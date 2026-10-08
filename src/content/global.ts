/**
 * All copy for the GLOBAL site (/global/). Edit text here; no component changes needed.
 *
 * - Nav `anchor` values must match section ids on the page:
 *   gap, partnership, capabilities, standard, work, engagement, safeguards, faq, doorway.
 * - Everything on /global/ is independent of the India site: nothing here or in
 *   src/components/global/ is imported from (or links to) the India homepage components.
 */

export const globalContent = {
  metadata: {
    title: "White-Label AI Engineering for Technology Services Firms · Caldrik",
    description:
      "The AI engineering team behind technology services firms. Production AI, evaluated and maintained inside your client's cloud, delivered under your name.",
  },

  nav: {
    links: [
      { name: "The Gap", anchor: "gap" },
      { name: "Partnership", anchor: "partnership" },
      { name: "Capabilities", anchor: "capabilities" },
      { name: "Standard", anchor: "standard" },
      { name: "Engagement", anchor: "engagement" },
      { name: "FAQ", anchor: "faq" },
    ],
    cta: { name: "Discuss a Partnership", anchor: "doorway" },
  },

  hero: {
    eyebrow: "AI Engineering · White-Label Delivery",
    headline: { before: "Your clients' AI, ", highlight: "engineered", after: " under your name." },
    subhead:
      "The AI engineering team behind technology services firms. Designed, evaluated and maintained inside your client's cloud, and delivered as your own.",
    primaryCta: { label: "Discuss a Partnership", anchor: "doorway" },
    secondaryCta: { label: "See How It Works", anchor: "partnership" },
  },

  gap: {
    label: "The gap",
    headline: ["Clients ask for AI.", "Benches aren't built for it."],
    line: "Every services firm is being asked the same question. Few can answer it with a production system.",
    cards: [
      { title: "Hiring takes quarters.", description: "Experienced AI engineers take months to recruit, and are hard to keep utilised between projects." },
      { title: "Saying no moves the account.", description: "A client who can't get AI from you will find someone who can. The AI work rarely leaves alone." },
      { title: "Demos drift in production.", description: "A prototype wins the meeting. Then the model updates, the data shifts, and the system quietly degrades, with your name on it." },
    ],
  },

  partnership: {
    label: "The Partnership",
    headline: "Your client. Our engineering.",
    line: "We work as your AI delivery team, under your name. The relationship stays yours; scoping, build, evaluation and handover are ours.",
    columns: [
      {
        title: "You own",
        items: ["The client relationship", "Commercial terms with your client", "Your brand on every deliverable", "The account's next move"],
      },
      {
        title: "Caldrik owns",
        items: ["Technical scoping and acceptance criteria", "Build, evaluation and QA", "Deployment inside your client's cloud", "Handover and ongoing support"],
      },
    ],
    callout: "one small project · time and materials · kickoff within 8 days",
  },

  capabilities: {
    label: "Capabilities",
    headline: "Four builds. One standard.",
    line: "Built where your clients already work: inside their ERP, CRM, service desk and document stores.",
    rows: [
      { name: "Agentic workflows", description: "Agents that take action in ERP, CRM and ticketing systems.", callout: "approval gates, full audit trails" },
      { name: "Knowledge assistants", description: "Answers over a client's documents and systems, scoped to who can see what.", callout: "every answer cited, every permission respected" },
      { name: "Document intelligence", description: "Extraction and reconciliation across contracts, invoices, claims and forms.", callout: "exceptions flagged with evidence" },
      { name: "Embedded AI", description: "LLM features inside the CRM, ERP and service desk your clients already run.", callout: "inside their tools, on their keys" },
    ],
  },

  standard: {
    label: "The Standard",
    headline: "Engineered for production. Not for the demo.",
    line: "An agent that works in a demo can drift quietly in production.",
    lineEmphasis: "Every build ships with the controls that catch it, before your client does.",
    steps: [
      { title: "Evaluated", description: "A regression suite and automated scoring on every agent. Every task gets a score, a threshold and a status." },
      { title: "Observable", description: "Tracing, cost and latency monitoring in production from day one. Drift is visible before it reaches the client." },
      { title: "Governed", description: "PII and prompt-injection safeguards, approval gates, and human review of consequential actions." },
      { title: "Client-owned", description: "Deployed inside your client's cloud, on their own model keys. No licences, no lock-in." },
    ],
    stack: "langgraph · langchain · mcp · a2a · python · typescript · aws · docker · kubernetes · opentelemetry",
  },

  recentWork: {
    label: "Recent Work",
    headline: "Proof, anonymised.",
    cards: [
      {
        title: "AI-assisted claim investigation",
        description: "Reads claim documents, policy terms, medical records and billing, then flags what's wrong, missing or inconsistent, with evidence.",
        callout: "the investigator makes the call",
      },
      {
        title: "Enterprise knowledge and engineering assistant",
        description: "Connects Confluence, SharePoint, GitHub, Jira, runbooks and Slack or Teams. Surfaces related tickets, code and incidents.",
        callout: "every answer cited, every permission respected",
      },
    ],
  },

  engagement: {
    label: "Engagement Models",
    headline: "Two models. No surprises.",
    line: "Every engagement runs under a Master Services Agreement, with a Statement of Work per project.",
    cards: [
      {
        title: "Time and Materials",
        description: "An AI engineering pod billed monthly on actual effort against our rate card. No minimum commitment.",
        outcome: "Suited to discovery, first builds and scopes still taking shape.",
      },
      {
        title: "Dedicated Team",
        description: "An embedded pod of lead architect, AI engineers, QA and eval, and a delivery manager. Monthly retainer, three-month minimum term, preferred rate.",
        outcome: "Accountable for delivery against agreed acceptance criteria.",
      },
    ],
    note: "Rates are structured so you can bill your client at your market's prevailing rates and retain a healthy margin. Rate card shared on our first call.",
  },

  safeguards: {
    label: "Safeguards",
    headline: "White-label from the contract up.",
    items: [
      "Every engagement is fully white-label, governed by an NDA and MSA, with mutual non-solicitation.",
      "Client data stays inside the client's environment, on their own model keys.",
      "All IP in the delivered build belongs to the client.",
      "Not yet SOC 2 or ISO certified. We complete your security questionnaire as part of onboarding.",
    ],
  },

  honestLine: {
    quote: "Your client sees your name. Our job is making sure it holds up.",
    attribution: "— Caldrik",
  },

  faq: {
    headline: "Questions partners ask.",
    items: [
      { q: "Will my client know Caldrik is involved?", a: "No. We work under your brand, in your client's tools. Mutual non-solicitation is in the contract, and we never name your clients in our marketing." },
      { q: "Where is your team?", a: "Our engineering team is in India, working 14:00 to 23:00 IST. That covers the UK and European business day in full, and gives 3.5 to 4.5 hours of daily overlap with US Eastern business hours." },
      { q: "How do we start?", a: "An intro call to understand your firm and your clients. Most partners start with one small project on Time and Materials, kicked off within 8 days of signing." },
      { q: "Who owns what you build?", a: "Your client. All IP belongs to them, and the system runs inside their cloud on their own model keys." },
      { q: "Are you SOC 2 certified?", a: "Not yet. Work runs inside your client's environment, on their keys, and we complete your security questionnaire during onboarding." },
      { q: "What does it cost?", a: "Rates are set by role and stay the same across projects. Rate card shared on our first call." },
    ],
  },

  doorway: {
    headline: ["Know before", "you pitch."],
    line: "Bring one client requirement. We'll tell you if AI fits, and what it takes to deliver it under your name.",
    smallPrint: "No pitch. Just a technical opinion.",
    contacts: [
      { name: "Rohan Mashiyava", role: "Founder" },
      { name: "Ravindra Dhavlesha", role: "Lead Architect" },
    ],
    email: "hello@caldrik.co",
    phone: { display: "+1 917 920 9285", tel: "+19179209285", note: "(US)" },
    form: {
      firstName: { label: "First name", placeholder: "First name" },
      lastName: { label: "Last name", placeholder: "Last name" },
      company: { label: "Company name", placeholder: "Company name" },
      email: { label: "Work email", placeholder: "you@company.com" },
      title: { label: "Your title", placeholder: "e.g. Founder, CEO, Head of Delivery" },
      requirement: {
        label: "The client requirement",
        hint: "— in a sentence (optional)",
        placeholder: "e.g. A client wants AI agents inside their ERP to triage supplier exceptions.",
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
      { href: "#gap", label: "The Gap" },
      { href: "#partnership", label: "Partnership" },
      { href: "#capabilities", label: "Capabilities" },
      { href: "#standard", label: "Standard" },
      { href: "#engagement", label: "Engagement" },
      { href: "#faq", label: "FAQ" },
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
