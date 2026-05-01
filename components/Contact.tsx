interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
}

export default function Contact() {
  const links: ContactLink[] = [
    {
      label: "Lee Meier Burke",
      href: "https://leemeierburke.com/our-team/kaitlyn-whiteside/",
      external: true,
    },
    {
      label: "Substack",
      href: "https://kaitlynwhiteside.substack.com/",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kaitlynwhiteside/",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="px-8 md:px-20 lg:px-32 py-24 md:py-32 border-t border-[#0a0a0a]/10"
    >
      {/* Section label */}
      <p className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[#6b6b6b] mb-12">
        03 — Contact
      </p>

      <ul className="divide-y divide-[#0a0a0a]/10">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between py-8"
            >
              <span className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[#0a0a0a] group-hover:text-[#b85c3a] transition-colors">
                {link.label}
              </span>
              <span className="font-[family-name:var(--font-display)] text-2xl md:text-4xl text-[#6b6b6b] group-hover:text-[#b85c3a] transition-colors ml-4">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-body)] text-xs text-[#6b6b6b] tracking-wide">
          © 2025 Kaitlyn Whiteside
        </p>
        <p className="font-[family-name:var(--font-body)] text-xs text-[#6b6b6b] tracking-wide">
          kaitlynwhiteside.com
        </p>
      </div>
    </section>
  );
}
