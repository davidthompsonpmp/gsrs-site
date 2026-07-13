export const gsrsThemeFallback = {
  brand: {
    publicName: "Gems, Stones, Rocks and Such",
    displayName: "Gems, Stones, Rocks & Such",
    legalEntityVisibility: "HIDDEN_FROM_CUSTOMERS",
    logo: "/brand/gsrs-logo-elongated-deep-chocolate.png",

    logoStyle: {
        maxwidth: "275px",
        width: "56%",
    },
  },

  colors: {
    background: "#FDFBF7",
    deepChocolate: "#3D2314",
    softGold: "#C8A15A",
    footerBlue: "#0B1D33",
  },

  copy: {
    previewLabel: "Gallery In Preparation",
    heroHeadline: "A curated gallery is being prepared.",

    body:
      "Curated gemstones, handcrafted jewelry, and carefully selected mineral treasures are being prepared for a refined gallery experience.",

    collectionLine:
      "Our first collection is being carefully assembled.",

    constructionTitle: "Website Under Construction",

    constructionBody:
      "Our public gallery is currently being prepared. This website is available for launch testing and QR code validation while we complete the collection.",

    purposeLine: "Curated with purpose.",

    missionLine:
      "Every purchase helps support our mission to feed those in need.",

    footer: "© Gems, Stones, Rocks and Such",
  },
} as const;

export type GsrsTheme = typeof gsrsThemeFallback;