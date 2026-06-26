export default function CollectionCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-[#3A1F0F]/70 bg-black/25 p-7 transition hover:border-[#C8A15A]/40">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C8A15A]">◇</p>
      <h2 className="mb-4 font-serif text-2xl text-stone-100">{title}</h2>
      <p className="text-sm leading-7 text-stone-500">{text}</p>
    </div>
  );
}
