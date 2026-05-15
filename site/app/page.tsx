export default function Home() {
  return (
    <main className="min-h-screen bg-black text-stone-100">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

        <div className="relative z-10 text-center">
          
          <p className="mb-6 text-sm uppercase tracking-[0.45em] text-stone-500">
            Curated Gemstone Collection
          </p>

          <h1 className="text-6xl font-light tracking-[0.25em] md:text-8xl">
            GSRS
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-stone-400">
            Rare gemstones, handcrafted jewelry, and collector specimens presented with a timeless gallery aesthetic.
          </p>

          <button className="mt-10 rounded-full border border-stone-700 px-8 py-3 text-sm uppercase tracking-[0.25em] transition hover:bg-white hover:text-black">
            Enter Collection
          </button>

        </div>
      </section>
    </main>
  );
}