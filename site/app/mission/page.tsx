import MainLayout from "../components/layout/MainLayout";
import PageTitle from "../components/common/PageTitle";

export default function MissionPage() {
  return (
    <MainLayout>
      <PageTitle eyebrow="Mission" title="Curated with purpose.">
        <p>
          Every purchase helps support our mission to feed those in need.
          The gallery is being built around beauty, trust, stewardship, and generosity.
        </p>
      </PageTitle>
    </MainLayout>
  );
}
