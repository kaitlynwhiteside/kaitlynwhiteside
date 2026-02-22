export default function About() {
  return (
    <section
      id="about"
      className="px-8 md:px-20 lg:px-32 py-24 md:py-32 border-t border-[#0a0a0a]/10"
    >
      {/* Section label */}
      <p className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[#6b6b6b] mb-12">
        01 — About
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Bio */}
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-[#0a0a0a] leading-relaxed mb-8">
            Kaitlyn Whiteside is an attorney and writer based in New York.
            She practices at Lee Meier Burke and is licensed in New York,
            Georgia, and Tennessee. Alongside her legal career, she writes on
            law, culture, and the spaces between them.
          </p>
          <a
            href="https://leemeierburke.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.15em] text-[#b85c3a] hover:underline underline-offset-4"
          >
            Full bio at Lee Meier Burke →
          </a>
        </div>

        {/* Pull quote / decorative */}
        <div className="flex items-start md:items-center">
          <blockquote className="border-l-2 border-[#b85c3a] pl-8">
            <p className="font-[family-name:var(--font-display)] italic text-3xl md:text-4xl text-[#0a0a0a] leading-snug">
              &ldquo;At the intersection of law and language.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
