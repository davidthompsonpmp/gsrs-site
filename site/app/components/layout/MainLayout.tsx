import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#050505] text-stone-100">
      <div className="pointer-events-none fixed inset-0 opacity-[0.035] mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      <Header />
      <div className="relative z-10">{children}</div>
      <Footer />
    </main>
  );
}
