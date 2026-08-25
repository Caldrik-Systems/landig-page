"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAV_LINKS = [
  { name: "Problem",      anchor: "problem" },
  { name: "How We Work",  anchor: "how-we-work" },
  { name: "Services",     anchor: "services" },
  { name: "Focus",        anchor: "focus" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = (anchor: string) => (isHome ? `#${anchor}` : `/#${anchor}`);
  const isSolid = scrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isSolid ? "liquid-glass bg-gray-900/70 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter id="liquid-glass-distortion" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="8" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="40" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-3 lg:px-8">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Caldrik</span>
          <img alt="Caldrik" src="/logo-white.svg" className="h-8 w-auto" />
        </a>

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-x-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={href(link.anchor)} className="text-sm/6 font-semibold text-white">
              {link.name}
            </a>
          ))}
        </div>

        <a href={href("doorway")} className="hidden bg-brand rounded-full px-4 py-1.5 text-sm/6 font-semibold text-white md:block">
          Discuss a Workflow
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white md:hidden"
        >
          <span className="sr-only">{mobileMenuOpen ? "Close main menu" : "Open main menu"}</span>
          {mobileMenuOpen ? (
            <XMarkIcon aria-hidden="true" className="size-6" />
          ) : (
            <Bars3Icon aria-hidden="true" className="size-6" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={href(link.anchor)}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href={href("doorway")}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
            >
              Discuss a Workflow
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
