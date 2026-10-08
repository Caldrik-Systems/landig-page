import { globalContent } from "./global";

// Structured data for the global site (/). Built from global.ts so it stays in sync with the page copy.
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Caldrik",
  legalName: "Revenance Techsol Private Limited",
  url: "https://caldrik.co/",
  logo: "https://caldrik.co/logo-white.svg",
  image: "https://caldrik.co/og-image.jpg",
  description: globalContent.metadata.description,
  email: globalContent.footer.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: globalContent.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const globalJsonLd = [organization, faq];
