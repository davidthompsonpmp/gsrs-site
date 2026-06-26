import MainLayout from "./components/layout/MainLayout";
import BrandHero from "./components/brand/BrandHero";
import { gsrsThemeFallback } from "./lib/gsrsTheme";

export default function Home() {
  return (
    <MainLayout>
      <BrandHero theme={gsrsThemeFallback} />
    </MainLayout>
  );
}
