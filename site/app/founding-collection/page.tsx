import Link from "next/link";
export const dynamic="force-dynamic";

async function items(){
  const b=process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000";
  const r=await fetch(`${b}/api/founding-collection`,{cache:"no-store"});
  return r.ok?(await r.json()).items??[]:[];
}

export default async function Page(){
  const x=await items();
  return <main className="foundingCollection">
    <header className="foundingIntro">
      <p className="eyebrow">A place where relationships begin</p>
      <h1>The Founding Collection</h1>
      <p>Five curates. Five stories. Follow whichever one catches your eye, then follow the trail wherever your curiosity leads.</p>
    </header>

    <section className="curateGrid">
      {x.map((i:any)=><article className="curateCard" key={i.slug||i.display_name}>
        {i.primary_image&&<img src={i.primary_image} alt={i.display_name}/>}
        <div>
          <h2>{i.display_name}</h2>
          <p>{i.short_story||i.summary||"A story waiting to be discovered."}</p>
          <Link href={`/curates/${i.slug}`}>Follow my story →</Link>
        </div>
      </article>)}
    </section>

    {!x.length&&<p>The Founding Collection is being prepared for discovery.</p>}
  </main>
}
