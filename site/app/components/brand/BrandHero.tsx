import { gsrsThemeFallback } from "../../lib/gsrsTheme";

type BrandHeroProps = {
  theme?: typeof gsrsThemeFallback;
};

export default function BrandHero({ theme = gsrsThemeFallback }: BrandHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <img
          src={theme.brand.logo}
          alt={`${theme.brand.displayName} logo`}
          className="mx-auto mb-10 block h-32 w-auto opacity-90 md:h-44"
        />

        <div className="mx-auto mb-10 h-px w-32 bg-[#3A1F0F]" />

        <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#C8A15A]">
          {theme.copy.preview_label}
        </p>

        <h1 className="mx-auto mb-7 max-w-4xl font-serif text-4xl leading-tight text-stone-100 md:text-6xl">
          {theme.copy.hero_headline}
        </h1>

        <p className="mb-5 text-lg font-light tracking-wide text-stone-300 md:text-xl">
          {theme.copy.purpose_line}
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-stone-400 md:text-lg">
          {theme.copy.body}
        </p>

        <div className="mx-auto mb-9 max-w-2xl rounded-2xl border border-[#3A1F0F]/75 bg-[var(--gsrs-color-background-primary)]/30 px-7 py-6 text-sm leading-7 text-stone-300">
          {theme.copy.mission_line}
        </div>

        <a
          href="#"
          aria-disabled="true"
          className="inline-flex items-center justify-center rounded-full border border-[#3A1F0F] px-8 py-3 text-xs uppercase tracking-[0.28em] text-[#C8A15A] transition hover:bg-[#3A1F0F]/20"
        >
          {theme.copy.story_button}
        </a>

        <footer className="mt-14 text-[10px] uppercase tracking-[0.32em] text-stone-700">
          © 2026 Gems, Stones, Rocks and Such
        </footer>
      </div>
    </section>
  );
}

