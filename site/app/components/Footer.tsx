export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-10 py-16 md:px-20">

      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
            GSRS Archive
          </p>

          <h2 className="mt-4 text-2xl font-extralight tracking-[0.2em] text-stone-100">
            Curated Gemstone Presentation
          </h2>
        </div>

        <div className="text-sm leading-loose text-stone-500">
          Rare gemstones, handcrafted jewelry,
          <br />
          and collector mineral specimens.
        </div>

      </div>

    </footer>
  );
}