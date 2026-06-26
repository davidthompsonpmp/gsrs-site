import MainLayout from "../components/layout/MainLayout";
import PageTitle from "../components/common/PageTitle";

export default function AboutPage() {
  return (
    <MainLayout>
      <PageTitle eyebrow="About" title="A gallery shaped by beauty, story, and stewardship.">
        <p>
          Gemsstonesrocksandsuch is being prepared as a quiet, curated home for gemstones,
          jewelry, mineral treasures, and meaningful objects selected with care.
        </p>
      </PageTitle>
    </MainLayout>
  );
}
