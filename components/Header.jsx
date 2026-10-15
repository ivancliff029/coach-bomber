"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_LINK, SITE } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-charcoal/95 backdrop-blur border-b border-charcoal-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 flex items-center justify-between h-[72px]">
        <a href="#top" className="flex items-baseline gap-2 shrink-0">
          <span className="font-display text-2xl tracking-wide text-sand leading-none">
            BOMBER
          </span>
          <span className="font-display text-2xl tracking-wide text-clay leading-none">
            STYLE BOXING
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-sand/80 hover:text-ochre transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_LINK("Hi Coach, I'd like to book a free class at Bomber Style.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm border border-ochre/60 px-5 py-2.5 text-sm font-medium text-ochre hover:bg-ochre hover:text-charcoal transition-colors"
          >
            Message Coach {SITE.name.split(" ")[0]}s 
          </a>
        </div>

        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-[2px] w-6 bg-sand transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-sand transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-sand transition-transform ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-charcoal border-t border-charcoal-line px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-sand/85 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK("Hi Coach, I'd like to book a free class at Bomber Style.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center rounded-sm border border-ochre/60 px-5 py-3 text-sm font-medium text-ochre"
            >
              Message the Coach
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
