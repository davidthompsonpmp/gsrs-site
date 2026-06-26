import MainLayout from "../components/layout/MainLayout";
import PageTitle from "../components/common/PageTitle";
import CollectionCard from "../components/cards/CollectionCard";

const collections = [
  ["Natural Gemstones", "Selected stones prepared for a refined gallery experience."],
  ["Handcrafted Jewelry", "Wearable pieces shaped by beauty, material, and intention."],
  ["Mineral Specimens", "Natural forms chosen for presence, texture, and story."],
  ["Vintage Treasures", "Distinctive pieces with character, history, and charm."],
  ["Craft Supplies", "Materials for makers, collectors, and creative hands."],
  ["Curated Finds", "Special objects prepared for future presentation."],
];

export default function CollectionsPage() {
  return (
    <MainLayout>
      <PageTitle eyebrow="Collections" title="Curated collections are being prepared." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {collections.map(([title, text]) => (
          <CollectionCard key={title} title={title} text={text} />
        ))}
      </section>
    </MainLayout>
  );
}
