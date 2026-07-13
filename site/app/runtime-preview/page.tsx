import BrandHero from "../components/brand/BrandHero";
import { gsrsThemeFallback } from "../lib/gsrsTheme";

export default function RuntimePreview() {
  return <BrandHero theme={gsrsThemeFallback} />;
}