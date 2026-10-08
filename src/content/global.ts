/**
 * All copy for the GLOBAL site (/). Edit text here; no component changes needed.
 *
 * - Nav `anchor` values must match section ids on the page:
 *   partnership, standard, capabilities, terms, faq, doorway.
 * - Everything on /global/ is independent of the India site: nothing here or in
 *   src/components/global/ is imported from (or links to) the India homepage components.
 */

export const globalContent = {
  metadata: {
    title: "White-Label AI Engineering for Technology Services Firms · Caldrik",
    description:
      "AI that reaches production, delivered under your name. Caldrik is the white-label AI engineering team behind technology services firms.",
  },

  nav: {
    links: [
      { name: "Partnership", anchor: "partnership" },
      { name: "Standard", anchor: "standard" },
      { name: "Capabilities", anchor: "capabilities" },
      { name: "Terms", anchor: "terms" },
      { name: "FAQ", anchor: "faq" },
      { name: "Insights", href: "/insights/" },
    ],
    cta: { name: "Discuss a Partnership", anchor: "doorway" },
  },

  hero: {
    eyebrow: "White-Label AI Engineering",
    headline: { before: "AI that reaches ", highlight: "production", after: ". Delivered under your name." },
    subhead:
      "For technology services firms whose clients want AI. We scope, build and support it as your engineering team. You own the account and keep the margin.",
    primaryCta: { label: "Discuss a Partnership", anchor: "doorway" },
    secondaryCta: { label: "How the partnership works", anchor: "partnership" },
  },

  partnership: {
    label: "The Partnership",
    headline: "Your client stays yours. In writing.",
    line: "We work inside your delivery, under your brand. We don't contact your clients outside your engagements, and we never use their names.",
    columns: [
      {
        title: "You own",
        items: ["The client relationship", "Commercial terms with your client", "The brand on every deliverable"],
      },
      {
        title: "We own",
        items: ["Scoping and acceptance criteria", "Build, evaluation and QA", "Deployment, handover and support"],
      },
    ],
    callout: "NDA and MSA before any work · mutual non-solicitation",
  },

  standard: {
    label: "The Standard",
    headline: "Proven value. Controlled cost. Managed risk.",
    line: "Gartner expects over 40% of agentic AI projects to be cancelled by 2027, for rising costs, unclear value or weak risk controls. Every Caldrik build is engineered against all three.",
    lineEmphasis: "",
    steps: [
      { title: "Proven value", description: "Acceptance criteria agreed before the build. An evaluation suite scores every agent against them, before launch and after every change." },
      { title: "Controlled cost", description: "Cost and latency monitored in production from day one. Running costs are visible, never a surprise." },
      { title: "Managed risk", description: "PII and prompt-injection safeguards, approval gates on consequential actions, and full audit trails." },
    ],
    stack: "langgraph · langchain · mcp · a2a · python · typescript · aws · docker · kubernetes · opentelemetry",
  },

  capabilities: {
    label: "Capabilities",
    headline: "Four builds. One standard.",
    line: "Built inside the systems your clients already run.",
    // `callout` is the monospace "Built" line; leave it "" to show none.
    rows: [
      { name: "Agentic workflows", description: "Agents that take action in ERP, CRM and ticketing systems.", callout: "" },
      {
        name: "Knowledge assistants",
        description: "Cited answers over a client's documents and systems, scoped to who can see what.",
        callout: "engineering assistant across confluence, sharepoint, github, jira and slack",
      },
      {
        name: "Document intelligence",
        description: "Extraction and reconciliation across contracts, invoices, claims and forms.",
        callout: "insurance claim investigation: flags what's wrong, missing or inconsistent, with evidence",
      },
      { name: "Embedded AI", description: "LLM features inside the CRM, ERP and service desk your clients already use.", callout: "" },
    ],
  },

  workingTerms: {
    label: "Working Terms",
    headline: "Capacity when you sell. No bench when you don't.",
    line: "We contract under a Master Services Agreement, with a Statement of Work per project.",
    cards: [
      {
        title: "Time and Materials",
        description: "For first builds and scopes still taking shape. Billed monthly on actual effort, with no minimum commitment.",
      },
      {
        title: "Dedicated Team",
        description: "For ongoing programmes. A lead architect, AI engineers, QA and eval, and a delivery manager, on a monthly retainer with a three-month minimum and a preferred rate.",
      },
    ],
    note: "Rates are structured so you resell at your market's rates and keep a healthy margin. Rate card shared on our first call.",
    strip: "client data stays in the client's environment · client owns all IP · not yet SOC 2 or ISO certified; we complete your security questionnaire",
  },

  faq: {
    headline: "Before you ask.",
    items: [
      { q: "Where is your team, and when do you work?", a: "In India, 14:00 to 23:00 IST. That covers the UK and European business day in full, and overlaps 3.5 to 4.5 hours with US Eastern." },
      { q: "How fast can we start?", a: "Kickoff within 8 days of signing, usually with one small project on Time and Materials." },
      { q: "What does it cost?", a: "Rates are set by role and stay the same across projects. Rate card shared on our first call." },
    ],
  },

  insights: {
    title: "Insights · Caldrik",
    description: "AI engineering perspectives from the Caldrik team — on evaluation, reliability, and building AI systems for regulated industries.",
    label: "Insights",
    headline: "From the engineering floor.",
    readMore: "Read more →",
    postCta: {
      button: "Discuss a Partnership",
    },
  },

  doorway: {
    headline: ["Know before", "you pitch."],
    line: "Bring one client requirement. We'll tell you if AI fits, and what it takes to deliver it under your name.",
    smallPrint: "No pitch. Just a technical opinion.",
    form: {
      firstName: { label: "First name", placeholder: "First name" },
      lastName: { label: "Last name", placeholder: "Last name" },
      company: { label: "Company name", placeholder: "Company name" },
      email: { label: "Work email", placeholder: "you@company.com" },
      title: { label: "Your title", placeholder: "e.g. Founder, CEO, Head of Delivery" },
      requirement: {
        label: "The client requirement",
        hint: "— in a sentence (optional)",
        placeholder: "e.g. A client wants AI agents in their ERP to triage supplier exceptions.",
      },
      consent: "Yes, I'd like Caldrik to contact me regarding AI engineering services and related offerings by email or telephone.",
      button: "Discuss a Partnership",
      sending: "Sending…",
      error: "Something went wrong — please try again or email hello@caldrik.co directly.",
      successTitle: "We'll be in touch.",
      successBody: "Expect a technical response within one business day.",
    },
  },

  footer: {
    // Anchors on /global/. Add { href: "...", label: "..." } for other pages.
    links: [
      { href: "#partnership", label: "Partnership" },
      { href: "#standard", label: "Standard" },
      { href: "#capabilities", label: "Capabilities" },
      { href: "#terms", label: "Terms" },
      { href: "#faq", label: "FAQ" },
      { href: "/insights/", label: "Insights" },
    ],
    legalLinks: [
      { href: "/privacy/", label: "Privacy" },
      { href: "/terms/", label: "Terms & Conditions" },
    ],
    copyright: "© 2026 Caldrik Systems",
    entity: "Caldrik is a brand of Revenance Techsol Private Limited.",
    entitySuffix: " All rights reserved.",
    email: "hello@caldrik.co",
    // Social icons: only email is shown. Add a LinkedIn URL here to show that icon again.
    linkedinUrl: "",
  },
} as const;

export type GlobalContent = typeof globalContent;
