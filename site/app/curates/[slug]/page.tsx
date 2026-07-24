import Link from "next/link";
import {notFound} from "next/navigation";
export const dynamic="force-dynamic";

async function items(){
  const b=process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000";
  const r=await fetch(`${b}/api/founding-collection`,{cache:"no-store"});
  return r.ok?(await r.json()).items??[]:[];
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const all=await items();
  const i=all.find((x:any)=>x.slug===slug);
  if(!i)notFound();

  const rel=all.filter((x:any)=>x.slug!==slug).slice(0,3);

  return <main className="curateDetail">
    <Link href="/founding-collection">← Founding Collection</Link>

    <section className="curateHero">
      {i.primary_image&&<img src={i.primary_image} alt={i.display_name}/>}
      <div>
        <p className="eyebrow">A curate in our stewardship</p>
        <h1>{i.display_name}</h1>
        <p>{i.full_story||i.story||i.short_story||i.summary}</p>
        {i.availability&&<p><strong>Stewardship:</strong> {i.availability}</p>}
      </div>
    </section>

    <section className="discoveryTrail">
      <p className="eyebrow">Follow the trail</p>
      <h2>Where will your curiosity lead next?</h2>
      <div className="curateGrid">
        {rel.map((x:any)=><article className="curateCard" key={x.slug}>
          {x.primary_image&&<img src={x.primary_image} alt={x.display_name}/>}
          <h3>{x.display_name}</h3>
          <Link href={`/curates/${x.slug}`}>Continue discovering →</Link>
        </article>)}
      </div>
    </section>
  </main>
}
