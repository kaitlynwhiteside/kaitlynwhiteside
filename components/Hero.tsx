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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <h1
          className="font-[family-name:var(--font-hero)] leading-none tracking-[-0.02em]"
          style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)", color: "#ffffff" }}
        >
          kaitlyn whiteside
        </h1>

        <hr className="border-none h-[1px] w-16 bg-[#b85c3a] mx-auto mt-7 mb-6" />

        <p className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.28em] font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
          Attorney &amp; Writer
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-50">
        <div className="w-[1px] h-12 bg-white mx-auto" />
      </div>
    </section>
  );
}
