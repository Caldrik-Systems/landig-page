"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// A link is either an anchor on the homepage ("anchor") or a plain page link ("href").
export type NavLink = { name: string; anchor?: string; href?: string };

const DEFAULT_NAV_LINKS: NavLink[] = [
  { name: "Problem",      anchor: "problem" },
  { name: "How We Work",  anchor: "how-we-work" },
  { name: "Services",     anchor: "services" },
  { name: "Focus",        anchor: "focus" },
  { name: "Partners",     href: "/partners/" },
];

const DEFAULT_CTA: NavLink = { name: "Discuss a Workflow", anchor: "doorway" };

// Same-page anchors stay plain <a>; anything that changes page goes through <Link> (client navigation + prefetch).
function NavA({ link, isHome, ...props }: { link: NavLink; isHome: boolean } & Omit<React.ComponentProps<"a">, "href">) {
  const href = link.href ?? (isHome ? `#${link.anchor}` : `/#${link.anchor}`);
  return link.href || !isHome ? <Link href={href} {...props} /> : <a href={href} {...props} />;
}

type NavigationProps = {
  links?: NavLink[];
  /** Menu button; defaults to the homepage's "Discuss a Workflow". */
  cta?: NavLink;
};

export default function Navigation({ links = DEFAULT_NAV_LINKS, cta = DEFAULT_CTA }: NavigationProps = {}) {
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

  const isSolid = scrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isSolid ? "liquid-glass bg-gray-900/50 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-3 lg:px-8">
        <Link href="/" className="-m-1.5 p-1.5">
          <Image alt="Caldrik" src="/logo-white.svg" className="h-8 w-auto" width={120} height={32} priority />
        </Link>

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-x-5 lg:gap-x-8">
          {links.map((link) => (
            <NavA key={link.name} link={link} isHome={isHome} className="whitespace-nowrap text-sm/6 font-semibold text-white">
              {link.name}
            </NavA>
          ))}
        </div>

        <NavA link={cta} isHome={isHome} className="hidden whitespace-nowrap bg-brand rounded-full px-4 py-1.5 text-sm/6 font-semibold text-white md:block">
          {cta.name}
        </NavA>

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
            {links.map((link) => (
              <NavA
                key={link.name}
                link={link}
                isHome={isHome}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
              >
                {link.name}
              </NavA>
            ))}
            <NavA
              link={cta}
              isHome={isHome}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
            >
              {cta.name}
            </NavA>
          </div>
        </div>
      )}
    </header>
  );
}
