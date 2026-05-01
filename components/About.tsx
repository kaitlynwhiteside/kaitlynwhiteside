import Image from "next/image";

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

      <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 items-start">
        {/* Photo */}
        <div className="w-full md:w-64 lg:w-72 shrink-0">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/headshot.png"
              alt="Kaitlyn Whiteside"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center">
          <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-[#0a0a0a] leading-relaxed mb-8">
            Kaitlyn Whiteside is an attorney and writer based in New York.
            She practices at Lee Meier Burke and is licensed in New York
            and Georgia. Alongside her legal career, she writes on
            law, culture, and the spaces between them.
          </p>
          <a
            href="https://leemeierburke.com/our-team/kaitlyn-whiteside/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.15em] text-[#b85c3a] hover:underline underline-offset-4"
          >
            Full bio at Lee Meier Burke →
          </a>
        </div>
      </div>
    </section>
  );
}
