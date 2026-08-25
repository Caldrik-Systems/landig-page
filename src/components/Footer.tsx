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

export default function Footer() {
  return (
    <footer className="relative bg-[#080f19] px-6 lg:px-8 pt-8 pb-10">
      <FooterGrid />
      <div className="relative mx-auto max-w-7xl">

        {/* Top row — logo left, icon buttons right */}
        <div className="flex items-center justify-between pb-6">
          <Image src="/logo-white.svg" alt="Caldrik" width={140} height={31} />
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

        {/* Divider */}
        <div className="border-t border-white/[0.08]" />

        {/* Bottom row — stacks on mobile, side-by-side on sm+ */}
        <div className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-start sm:justify-between">

          {/* Left — copyright */}
          <div className="space-y-1 text-sm text-gray-500">
            <p>© 2026 Caldrik Systems · India</p>
            <p className="text-gray-600">Caldrik is a brand of Revenance Techsol Private Limited. All rights reserved.</p>
          </div>

          {/* Right — nav links stacked */}
          <div className="space-y-1.5 sm:text-right">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400 sm:justify-end">
              <a href="/#problem" className="hover:text-white transition-colors">Problem</a>
              <a href="/#how-we-work" className="hover:text-white transition-colors">How We Work</a>
              <a href="/#services" className="hover:text-white transition-colors">Services</a>
              <a href="/#focus" className="hover:text-white transition-colors">Focus</a>
              <a href="/insights" className="hover:text-white transition-colors">Insights</a>
            </nav>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600 sm:justify-end">
              <a href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-gray-400 transition-colors">Terms &amp; Conditions</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
