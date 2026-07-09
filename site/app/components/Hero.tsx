export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-start overflow-hidden bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center pl-10 md:pl-24">

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_30%)] opacity-70" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,210,140,0.10),transparent_40%)]" />

      <div className="relative z-10 mx-6 max-w-4xl rounded-[2rem] border border-white/10 bg-[var(--gsrs-color-background-primary)]/10 px-10 py-20 text-left shadow-[0_0_60px_rgba(0,0,0,0.55)] backdrop-blur-sm md:px-24">

        <p className="mb-6 text-sm uppercase tracking-[0.45em] text-stone-500">
          Private Collection Archive
        </p>

        <h1 className="text-5xl font-extralight tracking-[0.45em] md:text-7xl">
          GSRS
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-loose text-stone-300 md:text-xl">
          Rare gemstones, handcrafted jewelry, and collector specimens presented with a timeless gallery aesthetic.
        </p>

        <div className="mt-12 flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] text-stone-500">
          <span>Minerals</span>
          <span>•</span>
          <span>Jewelry</span>
          <span>•</span>
          <span>Collector Pieces</span>
        </div>

        <div className="mt-12 h-px w-24 bg-gradient-to-r from-stone-500/0 via-stone-400 to-stone-500/0" />

        <button className="mt-10 rounded-sm border border-stone-500/40 bg-[var(--gsrs-color-background-primary)]/30 px-8 py-3 text-sm uppercase tracking-[0.35em] backdrop-blur-sm transition hover:bg-white hover:text-black">
          Explore the Archive
        </button>

      </div>
    </section>
  );
}
