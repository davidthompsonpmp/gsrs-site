const items = [
  {
    title: "Sunset Kiss",
    type: "Orange Sodalite Earrings",
    image: "/images/sunset-kiss.jpg"
  },
  {
    title: "Moonlight Whisper",
    type: "Larvikite Ring",
    image: "/images/moonlight-whisper.jpg"
  },
  {
    title: "Secret Window",
    type: "Trapiche Amethyst",
    image: "/images/secret-window.jpg"  },
];

export default function FeaturedCollection() {
  return (
    <section className="relative z-10 px-10 pb-32 pt-10 md:px-20">

      <div className="mb-16 flex items-end justify-between">

        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
            Featured Collection
          </p>

          <h2 className="mt-4 text-3xl font-extralight tracking-[0.2em] text-stone-100 md:text-5xl">
            Collector Pieces
          </h2>
        </div>

      </div>

      <div className="grid gap-8 md:grid-cols-3">

        {items.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 backdrop-blur-sm transition duration-500 hover:border-stone-400/30"
          >

            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-[480px] w-full object-cover transition duration-1000 group-hover:scale-[1.03]"
              />
            </div>

            <div className="p-8">

              <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">
                {item.type}
              </p>

              <h3 className="mt-4 text-3xl font-extralight tracking-[0.18em] text-stone-100">
                {item.title}
              </h3>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}