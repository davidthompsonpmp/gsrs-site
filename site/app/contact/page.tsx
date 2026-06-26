import MainLayout from "../components/layout/MainLayout";
import PageTitle from "../components/common/PageTitle";

export default function ContactPage() {
  return (
    <MainLayout>
      <PageTitle eyebrow="Contact" title="The gallery is not yet open for public transactions.">
        <p>
          Gemsstonesrocksandsuch is currently in preparation. Public ordering, checkout,
          and customer transactions are not yet active.
        </p>
      </PageTitle>
    </MainLayout>
  );
}
