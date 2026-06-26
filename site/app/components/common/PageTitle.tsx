export default function PageTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="px-6 py-20 text-center md:py-28">
      {eyebrow && (
        <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#C8A15A]">
          {eyebrow}
        </p>
      )}
      <h1 className="mx-auto mb-8 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
        {title}
      </h1>
      {children && (
        <div className="mx-auto max-w-2xl text-base leading-8 text-stone-400 md:text-lg">
          {children}
        </div>
      )}
    </section>
  );
}
