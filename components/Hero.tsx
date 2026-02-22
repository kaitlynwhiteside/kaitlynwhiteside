export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay — 40% opacity */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.40)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(2.2rem, 5.5vw, 80px)",
            lineHeight: 1.15,
            letterSpacing: "0.04em",
            color: "#f5f2ec",
          }}
        >
          Kaitlyn
          <br />
          Whiteside
        </h1>

        <hr
          className="border-none mx-auto"
          style={{ height: "1px", width: "48px", background: "#b85c3a", marginTop: "28px", marginBottom: "22px" }}
        />

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            fontWeight: 500,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "rgba(245,242,236,0.75)",
          }}
        >
          Attorney &amp; Writer
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-40">
        <div style={{ width: "1px", height: "48px", background: "#f5f2ec" }} />
      </div>
    </section>
  );
}
