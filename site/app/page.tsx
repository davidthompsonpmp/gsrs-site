import PageRuntime from "./components/runtime/PageRuntime";
import { homeRuntime } from "./runtime/homeRuntime";

export const metadata = {
  title: "Gems, Stones, Rocks & Such — Gallery In Preparation",
  description:
    "Curated gemstones, handcrafted jewelry, and selected mineral treasures are being prepared for a refined gallery experience.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return <PageRuntime runtime={homeRuntime} />;
}