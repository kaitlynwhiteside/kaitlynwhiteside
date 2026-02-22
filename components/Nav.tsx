"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8 md:px-20 lg:px-32 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-[#f9f7f4]/90 border-b border-[#0a0a0a]/10" : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className="font-[family-name:var(--font-display)] italic text-2xl text-[#0a0a0a] tracking-tight"
      >
        KW
      </a>
      <div className="flex items-center gap-8">
        {["About", "Writing", "Contact"].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.15em] text-[#6b6b6b] hover:text-[#b85c3a] transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
