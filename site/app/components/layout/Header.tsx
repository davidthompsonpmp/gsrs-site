import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="relative z-20 border-b border-white/5 bg-[#050505]/80 px-6 py-6 backdrop-blur md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5">
        <a href="/" className="text-xs uppercase tracking-[0.48em] text-stone-300">
          Gemsstonesrocksandsuch
        </a>
        <Navigation />
      </div>
    </header>
  );
}
