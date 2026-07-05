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
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FDFBF7",
        color: "#3D2314",
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
          src="/brand/gsrs-logo-elongated-deep-chocolate.png"
          alt="Gems, Stones, Rocks & Such"
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
            background: "#C8A15A",
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
          Gallery In Preparation
        </p>

        <h1
          style={{
            fontSize: "clamp(2.15rem, 5.4vw, 4.2rem)",
            lineHeight: "1.08",
            margin: "0 0 24px 0",
            fontWeight: 500,
          }}
        >
          A curated gallery is being prepared.
        </h1>

        <p
          style={{
            fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)",
            lineHeight: 1.75,
            margin: "0 auto 18px auto",
            maxWidth: "650px",
          }}
        >
          Curated gemstones, handcrafted jewelry, and carefully selected mineral
          treasures are being prepared for a refined gallery experience.
        </p>

        <p
          style={{
            fontSize: "1.02rem",
            lineHeight: 1.65,
            margin: "0 auto 32px auto",
            maxWidth: "560px",
          }}
        >
          Our first collection is being carefully assembled.
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
            Website Under Construction
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "1rem",
              lineHeight: 1.65,
            }}
          >
            Our public gallery is currently being prepared. This website is
            available for launch testing and QR code validation while we complete
            the collection.
          </p>
        </div>

        <p
          style={{
            fontSize: "1.14rem",
            margin: "0 0 10px 0",
          }}
        >
          Curated with purpose.
        </p>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.65,
            margin: "0 auto 38px auto",
            maxWidth: "560px",
          }}
        >
          Every purchase helps support our mission to feed those in need.
        </p>

        <div
          style={{
            color: "#0B1D33",
            background: "transparent",
            fontSize: "0.95rem",
            letterSpacing: "0.04em",
            padding: "18px 0 0 0",
            margin: 0,
          }}
        >
          © Gems, Stones, Rocks and Such
        </div>
      </section>
    </main>
  );
}
