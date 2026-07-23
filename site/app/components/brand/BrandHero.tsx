import StoryPromise from "./StoryPromise";
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
        background: theme.colors.creamIvory,
        color: theme.colors.deepChocolate,
        display: "flex",
        flexDirection: "column",
        padding: 0,
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "42px 24px",
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
              maxWidth: theme.brand.logoStyle.maxwidth,
              width: theme.brand.logoStyle.width,
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
              background: theme.colors.deepChocolate,
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
              borderTop: "1px solid rgba(61, 35, 20, 0.18)",
              borderBottom: "1px solid rgba(61, 35, 20, 0.18)",
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
        </section>
      </div>

      <footer
        className="brand-hero-footer"
        style={{
          width: "100%",
          boxSizing: "border-box",
          background: theme.colors.deepChocolate,
          borderTop: '1px solid ${theme.colors.footerDivider}',
          color: theme.colors.creamIvory,
          textAlign: "center",
          fontSize: "0.95rem",
          letterSpacing: "0.08em",
          padding: "16px 24px",
          margin: 0,
        }}
      >
        {theme.copy.footer}
      </footer>
          <StoryPromise />
</main>
  );
}