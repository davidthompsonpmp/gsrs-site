import {
  gsrsThemeFallback,
  type GsrsTheme,
} from "../../lib/gsrsTheme";

type BrandHeroProps = {
  theme?: GsrsTheme;
};

export default function BrandHero({
  theme = gsrsThemeFallback,
}: BrandHeroProps) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: theme.colors.background,
        color: theme.colors.deepChocolate,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "42px 24px",
        fontFamily: "Georgia, serif",
      }}
    >
      <section
        aria-label="GSRS gallery in preparation"
        style={{
          maxWidth: "760px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <img
          src={theme.brand.logo}
          alt={theme.brand.displayName}
          style={{
            display: "block",
            maxWidth: "315px",
            width: "62%",
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "28px",
          }}
        />

        <div
          style={{
            width: "240px",
            height: "1px",
            background: theme.colors.softGold,
            margin: "0 auto 28px auto",
          }}
        />

        <p
          style={{
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            fontSize: "0.78rem",
            marginBottom: "18px",
          }}
        >
          {theme.copy.previewLabel}
        </p>

        <h1
          style={{
            fontSize: "clamp(2.15rem, 5.4vw, 4.2rem)",
            lineHeight: "1.08",
            margin: "0 0 24px 0",
            fontWeight: 500,
          }}
        >
          {theme.copy.heroHeadline}
        </h1>

        <p
          style={{
            fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)",
            lineHeight: 1.75,
            margin: "0 auto 18px auto",
            maxWidth: "650px",
          }}
        >
          {theme.copy.body}
        </p>

        <p
          style={{
            fontSize: "1.02rem",
            lineHeight: 1.65,
            margin: "0 auto 32px auto",
            maxWidth: "560px",
          }}
        >
          {theme.copy.collectionLine}
        </p>

        <div
          style={{
            borderTop: `1px solid rgba(61, 35, 20, 0.18)`,
            borderBottom: `1px solid rgba(61, 35, 20, 0.18)`,
            padding: "24px 0",
            margin: "30px auto",
            maxWidth: "620px",
          }}
        >
          <h2
            style={{
              margin: "0 0 12px 0",
              fontSize: "1.32rem",
              fontWeight: 500,
            }}
          >
            {theme.copy.constructionTitle}
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "1rem",
              lineHeight: 1.65,
            }}
          >
            {theme.copy.constructionBody}
          </p>
        </div>

        <p
          style={{
            fontSize: "1.14rem",
            margin: "0 0 10px 0",
          }}
        >
          {theme.copy.purposeLine}
        </p>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.65,
            margin: "0 auto 38px auto",
            maxWidth: "560px",
          }}
        >
          {theme.copy.missionLine}
        </p>

        <div
          style={{
            color: theme.colors.footerBlue,
            background: "transparent",
            fontSize: "0.95rem",
            letterSpacing: "0.04em",
            padding: "18px 0 0 0",
            margin: 0,
          }}
        >
          {theme.copy.footer}
        </div>
      </section>
    </main>
  );
}