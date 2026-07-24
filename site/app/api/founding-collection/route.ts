import {NextResponse} from "next/server";
import {Pool} from "pg";
export const dynamic="force-dynamic";

const pool=new Pool({
  connectionString:process.env.DATABASE_URL,
  ssl:process.env.DATABASE_URL?.includes("render.com")
    ? {rejectUnauthorized:false}
    : undefined
});

const founding=[
  {name:"Moonlight Whisper",slug:"moonlight-whisper",image:"/images/moonlight-whisper.jpg"},
  {name:"Mateo Code",slug:"mateo-code",image:"/images/Mateo Code.jpg"},
  {name:"Mystery Bloom",slug:"mystery-bloom",image:"/images/Mystery Bloom.jpg"},
  {name:"Secret Window",slug:"secret-window",image:"/images/secret-window.jpg"},
  {name:"Sunset Kiss",slug:"sunset-kiss",image:"/images/sunset-kiss.jpg"}
];

export async function GET(){
  try{
    const names=founding.map(x=>x.name.toLowerCase());
    const r=await pool.query(
      `SELECT * FROM gsrs_public.sellable_item_public_view
       WHERE lower(coalesce(display_name,name,''))=ANY($1::text[])`,
      [names]
    );

    const items=r.rows.map((row:any)=>{
      const n=String(row.display_name??row.name??"");
      const f=founding.find(x=>x.name.toLowerCase()===n.toLowerCase());
      return {
        ...row,
        display_name:n,
        slug:String(row.slug??f?.slug??""),
        primary_image:String(row.primary_image??row.image_url??f?.image??"")
      };
    });

    return NextResponse.json({collection:"Founding Collection",items});
  }catch(e){
    console.error(e);
    return NextResponse.json(
      {error:"The Founding Collection is temporarily unavailable."},
      {status:503}
    );
  }
}
