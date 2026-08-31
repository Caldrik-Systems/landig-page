import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";

const GA_ID = "G-HHRDT7KR9V";

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
    url: "https://caldrik.co",
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
  alternates: { canonical: "https://caldrik.co" },
  robots: { index: true, follow: true },
};

const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Caldrik",
    legalName: "Revenance Techsol Private Limited",
    url: "https://caldrik.co",
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

const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI drift and why should enterprise teams care?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI drift happens when a deployed model's outputs degrade silently — no crashes, no alerts — because the underlying model updates, retrieval sources shift, or prompt interfaces change. For BFSI and healthcare workflows, this means approvals routing incorrectly, compliance checks passing when they shouldn't, or documents being misclassified. Unlike traditional software failures, drift returns HTTP 200 while the system is already broken.",
        },
      },
      {
        "@type": "Question",
        name: "What AI engineering services does Caldrik offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Caldrik provides end-to-end AI engineering: RAG pipeline design and evaluation, LLM integration for production workflows, AI system monitoring and drift detection, compliance-ready AI architecture for regulated industries, and ongoing maintenance. All systems are deployed and maintained inside the client's own cloud environment.",
        },
      },
      {
        "@type": "Question",
        name: "Does Caldrik work with BFSI and healthcare companies in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Caldrik specialises in AI engineering for regulated industries — primarily banking, financial services, insurance (BFSI) and healthcare in India. Systems are designed to meet compliance and auditability requirements from the ground up, not retrofitted after deployment.",
        },
      },
      {
        "@type": "Question",
        name: "How is Caldrik different from a typical AI consulting firm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most AI consulting firms deliver models. Caldrik delivers production systems — with evaluation baselines, monitoring, and maintenance built in. We define the criteria by which the system is measured before a line of code is written, so enterprise teams know exactly when and why performance changes.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to deploy an enterprise AI system with Caldrik?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timelines depend on workflow complexity and existing infrastructure. Caldrik starts every engagement with a technical assessment — typically two weeks — to define scope, acceptance criteria, and risk. Full production deployments for defined workflows typically take 6–14 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "What does it mean that Caldrik builds AI inside the client's cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Caldrik does not host or process client data on shared infrastructure. All AI systems — models, retrieval pipelines, evaluation frameworks — are deployed within the client's own AWS, Google Cloud, or Azure environment. This is a hard requirement for regulated BFSI and healthcare enterprises where data residency and access control are non-negotiable.",
        },
      },
    ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
        <SmoothScroll />
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
      </body>
    </html>
  );
}
