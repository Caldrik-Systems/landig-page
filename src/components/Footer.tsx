"use client";
import { useId } from "react";
import Image from "next/image";

function FooterGrid() {
  const id = useId();
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        maskImage: "linear-gradient(to top, white 0%, transparent 70%)",
        WebkitMaskImage: "linear-gradient(to top, white 0%, transparent 70%)",
      }}
    >
      <svg className="h-full w-full" aria-hidden>
        <defs>
          <pattern id={id} width={20} height={20} patternUnits="userSpaceOnUse" x="-12" y="4">
            <path d="M.5 20V.5H20" fill="none" stroke="rgba(81,112,255,0.10)" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const navLinks = [
  { href: "/#problem", label: "Problem" },
  { href: "/#how-we-work", label: "How We Work" },
  { href: "/#services", label: "Services" },
  { href: "/#focus", label: "Focus" },
  { href: "/insights", label: "Insights" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#080f19] px-6 lg:px-8 pt-10 pb-12">
      <FooterGrid />
      <div className="relative mx-auto max-w-7xl space-y-8">

        {/* Logo + social icons */}
        <div className="flex items-center justify-between">
          <Image src="/logo-white.svg" alt="Caldrik" width={130} height={29} />
          <div className="flex items-center gap-2">
            <a
              href="mailto:hello@caldrik.co"
              aria-label="Email"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white transition-colors"
            >
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/caldrik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white transition-colors"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.08]" />

        {/* Nav links — 2-col grid on mobile, single row on md+ */}
        <nav className="grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-white/[0.08]" />

        {/* Copyright + legal */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">© 2026 Caldrik Systems · India</p>
            <p className="text-xs text-gray-600 leading-relaxed max-w-xs sm:max-w-none">
              Caldrik is a brand of Revenance Techsol Private Limited.
              <span className="hidden sm:inline"> All rights reserved.</span>
            </p>
          </div>
          <div className="flex gap-5 sm:flex-col sm:items-end sm:gap-1.5">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
