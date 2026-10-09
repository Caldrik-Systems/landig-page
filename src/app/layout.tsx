import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const GA_ID = "G-HHRDT7KR9V";
const CLARITY_ID = "ymae9ssuz9";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Caldrik | Enterprise AI Engineering for BFSI & Healthcare",
    template: "%s | Caldrik",
  },
  description:
    "Enterprise AI engineering firm in India. We build, evaluate, and maintain LLM systems for BFSI and healthcare workflows — deployed inside your cloud, monitored for drift, compliant by design.",
  metadataBase: new URL("https://caldrik.co"),
  openGraph: {
    title: "Caldrik | Enterprise AI Engineering for BFSI & Healthcare",
    description:
      "We build LLM systems for enterprise workflows that can't afford to drift — evaluated, monitored, and maintained inside your cloud.",
    siteName: "Caldrik",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caldrik — Enterprise AI Engineering",
    description:
      "End-to-end AI engineering for the workflows that can't afford to drift.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Caldrik",
    legalName: "Revenance Techsol Private Limited",
    url: "https://caldrik.co/",
    logo: "https://caldrik.co/logo-white.svg",
    image: "https://caldrik.co/og-image.jpg",
    description:
      "End-to-end AI engineering for enterprise workflows that can't afford to drift. Serving BFSI and Healthcare enterprises in India.",
    email: "hello@caldrik.co",
    areaServed: "IN",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    knowsAbout: [
      "AI Engineering",
      "Large Language Models",
      "RAG Pipelines",
      "AI Evaluation and Testing",
      "Enterprise AI Systems",
      "BFSI AI Integration",
      "Healthcare AI",
      "LLM Drift Detection",
      "Production AI Monitoring",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Engineering Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "RAG Pipeline Design & Evaluation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "LLM Integration for Production Workflows" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Drift Detection & Monitoring" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compliance-Ready AI Architecture" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI System Maintenance & SLA" } },
      ],
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
        <ScrollToTop />
        {children}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
        {CLARITY_ID && (
          <Script id="clarity-init" strategy="afterInteractive">{`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}</Script>
        )}
      </body>
    </html>
  );
}
