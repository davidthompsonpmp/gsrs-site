const items = [
  {
    name: "Moonlight Whisper",
    image: "/images/moonlight-whisper.jpg",
    itemType: "Ring",
    stone: "Larvikite",
    origin: "Norway",
    metal: ".925 Sterling Silver",
    details: "Oval • Size 6 • 4.8g • handmade in India",
    expectedPrice: "$110–135",
    listPrice: "$135",
    status: "Available",
    confidence: "High",
    hook: "A quiet light carried inside darkness — charcoal, midnight blue, and silver-black with a moonlit flash."
  },
  {
    name: "Sunset Kiss",
    image: "/images/sunset-kiss.jpg",
    itemType: "Earring Pair",
    stone: "Orange Sodalite",
    origin: "Possible Mexico, Brazil, or India",
    metal: ".925 Sterling Silver",
    details: "Fish-hook pair • 1½ in • 5.5g • handmade in India",
    expectedPrice: "$75–90",
    listPrice: "$88–98",
    status: "Available",
    confidence: "Medium",
    hook: "Warm sunset mineral patterning crossed with deep midnight blue — small, wearable, and memorable."
  },
  {
    name: "Mystery Bloom",
    image: "/images/Mystery Bloom.jpg",
    itemType: "Pendant",
    stone: "Malachite in Chrysocolla",
    origin: "Likely Arizona, USA",
    metal: ".925 Sterling Silver",
    details: "Oval pendant • 1½ in • 6.8g • handmade in India",
    expectedPrice: "$95–125",
    listPrice: "$118–138",
    status: "Available",
    confidence: "High",
    hook: "A hidden garden shaped in stone, with botanical green patterning born from copper-rich earth."
  },
  {
    name: "Secret Window",
    image: "/images/secret-window.jpg",
    itemType: "Ring",
    stone: "Trapiche Super Amethyst",
    origin: "Brazil or Madagascar",
    metal: ".925 Sterling Silver",
    details: "Goethite/Hematite inclusions • Size 7 • 5.75g • handmade in India",
    expectedPrice: "$95–115",
    listPrice: "$118",
    status: "Available",
    confidence: "Medium-High",
    hook: "A quiet violet flame suspended inside shadow, framed like a natural window in stone."
  },
  {
    name: "Mateo Code",
    image: "/images/Mateo Code.jpg",
    itemType: "Earring Pair",
    stone: "Muonionalusta Meteorite",
    origin: "Sweden",
    metal: ".925 Sterling Silver",
    details: "Fish-hook pair • Oval • 1⅛ in • 3.5g • handmade in India",
    expectedPrice: "$105–120",
    listPrice: "$128",
    status: "Available",
    confidence: "High",
    hook: "A message written before human hands learned to write — meteorite structure from ancient space."
  }
];

export default function Page() {
  return (
    <main className="bg-stone-100 px-6 py-8 text-stone-950 print:bg-white print:p-0">
      <style>{`
        @media print {
          @page {
            size: letter landscape;
            margin: 0.35in;
          }

          .no-print {
            display: none !important;
          }

          .print-page {
            break-after: page;
            page-break-after: always;
          }

          .avoid-break {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>

      <section className="mx-auto max-w-7xl print:max-w-none">
        <div className="no-print mb-6 rounded-xl border bg-white p-4 shadow-sm">
          <p className="font-semibold">Print / PDF Instructions</p>
          <p className="text-sm text-stone-700">
            Press <strong>Ctrl + P</strong>, choose <strong>Save as PDF</strong>, set
            layout to <strong>Landscape</strong>, and enable <strong>Background graphics</strong>.
          </p>
        </div>

        <section className="print-page rounded-2xl border bg-white p-8 shadow-sm print:rounded-none print:border-0 print:shadow-none">
          <header className="mb-6 border-b pb-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Gems, Stones, Rocks & Such
            </p>

            <h1 className="mt-2 text-4xl font-semibold tracking-tight">
              GSRS Curated Inventory Showcase
            </h1>

            <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
              A private seller-facing sample of curated gemstone jewelry selected to show
              visual range, story value, wearable appeal, and collector potential.
            </p>
          </header>

          <div className="mb-6 grid grid-cols-4 gap-4">
            <div className="rounded-xl bg-stone-100 p-4">
              <p className="text-xs font-semibold uppercase text-stone-500">Sample Count</p>
              <p className="mt-1 text-2xl font-semibold">5 Items</p>
            </div>
            <div className="rounded-xl bg-stone-100 p-4">
              <p className="text-xs font-semibold uppercase text-stone-500">Status</p>
              <p className="mt-1 text-2xl font-semibold">Available</p>
            </div>
            <div className="rounded-xl bg-stone-100 p-4">
              <p className="text-xs font-semibold uppercase text-stone-500">Sales Mode</p>
              <p className="mt-1 text-2xl font-semibold">Private</p>
            </div>
            <div className="rounded-xl bg-stone-100 p-4">
              <p className="text-xs font-semibold uppercase text-stone-500">Use Case</p>
              <p className="mt-1 text-2xl font-semibold">Vendor Intro</p>
            </div>
          </div>

          <section className="grid grid-cols-5 gap-4">
            {items.map((item) => (
              <article key={item.name} className="avoid-break rounded-xl border bg-white p-3 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-square w-full rounded-lg object-cover"
                />

                <h2 className="mt-3 text-lg font-semibold leading-tight">{item.name}</h2>
                <p className="text-sm text-stone-600">{item.stone}</p>

                <div className="mt-3 space-y-1 text-xs text-stone-700">
                  <p><strong>Type:</strong> {item.itemType}</p>
                  <p><strong>Origin:</strong> {item.origin}</p>
                  <p><strong>Price:</strong> {item.expectedPrice}</p>
                  <p><strong>Confidence:</strong> {item.confidence}</p>
                </div>

                <p className="mt-3 text-xs leading-5 text-stone-800">{item.hook}</p>
              </article>
            ))}
          </section>

          <footer className="mt-6 border-t pt-4 text-xs text-stone-500">
            Source direction: database-backed GSRS inventory showcase. Current version prepared as fast visual review packet.
          </footer>
        </section>

        {items.map((item) => (
          <section
            key={`${item.name}-detail`}
            className="print-page rounded-2xl border bg-white p-8 shadow-sm print:rounded-none print:border-0 print:shadow-none"
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              </div>

              <div className="flex flex-col">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  GSRS Inventory Detail
                </p>

                <h2 className="mt-2 text-4xl font-semibold">{item.name}</h2>
                <p className="mt-2 text-xl text-stone-600">
                  {item.stone} {item.itemType}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-stone-100 p-3">
                    <p className="text-xs uppercase text-stone-500">Origin</p>
                    <p className="font-semibold">{item.origin}</p>
                  </div>

                  <div className="rounded-xl bg-stone-100 p-3">
                    <p className="text-xs uppercase text-stone-500">Metal</p>
                    <p className="font-semibold">{item.metal}</p>
                  </div>

                  <div className="rounded-xl bg-stone-100 p-3">
                    <p className="text-xs uppercase text-stone-500">Expected Price</p>
                    <p className="font-semibold text-emerald-700">{item.expectedPrice}</p>
                  </div>

                  <div className="rounded-xl bg-stone-100 p-3">
                    <p className="text-xs uppercase text-stone-500">Seller Confidence</p>
                    <p className="font-semibold">{item.confidence}</p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border p-4">
                  <p className="text-xs font-semibold uppercase text-stone-500">Details</p>
                  <p className="mt-1 text-sm leading-6 text-stone-700">{item.details}</p>
                </div>

                <div className="mt-5 rounded-xl bg-emerald-50 p-5">
                  <p className="text-xs font-semibold uppercase text-emerald-700">Story Hook</p>
                  <p className="mt-2 text-base leading-7 text-stone-800">{item.hook}</p>
                </div>

                <div className="mt-auto border-t pt-4 text-xs text-stone-500">
                  Status: {item.status} • List / upper guide: {item.listPrice}
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}