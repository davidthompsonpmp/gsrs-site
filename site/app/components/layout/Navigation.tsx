const navItems = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-5 text-[10px] uppercase tracking-[0.28em] text-stone-500 md:gap-8">
      {navItems.map((item) => (
        <a key={item.href} href={item.href} className="transition hover:text-[#C8A15A]">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
