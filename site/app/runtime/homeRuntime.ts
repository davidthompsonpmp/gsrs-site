import { gsrsThemeFallback } from "../lib/gsrsTheme";

export const homeRuntime = {
  theme: gsrsThemeFallback,
  sections: [
    {
      sectionId: "home-brand-hero",
      order: 1,
      status: "ACTIVE",
      component: {
        reactComponent: "BrandHero",
      },
    },
  ],
};