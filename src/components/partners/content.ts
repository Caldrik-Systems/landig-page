/**
 * Copy and data for /partners/. Edit text here; no component changes needed.
 *
 * Ways to partner: the table columns come from `models`. Delete one entry from `models`
 * to drop a column (and its option in the form's "Partnership model" dropdown); the row
 * values keyed to it are then simply unused.
 */

export const partnersMeta = {
  title: "White-Label AI Engineering Partner for Technology Services Firms · Caldrik",
  description:
    "Add production AI to what you sell, without building a team. Caldrik engineers it as part of yours: your client, your brand, your margin.",
};

export const hero = {
  eyebrow: "Partners",
  headline: { before: "", highlight: "Production AI", after: ", under your name." },
  subhead:
    "For technology services firms whose clients already trust them. We engineer it inside your team. You keep the client and the margin.",
  primaryCta: { label: "Discuss a Partnership", href: "#doorway" },
  secondaryCta: { label: "Find your partnership model", href: "#models" },
};

export const models = [
  { key: "whiteLabel", name: "White-label" },
  { key: "coDelivery", name: "Co-delivery" },
  { key: "referral", name: "Referral" },
];

// A headline is plain text, optionally with a second phrase shown in the brand colour.
export type Headline = string | { plain: string; accent: string };
export const headlineText = (h: Headline) => (typeof h === "string" ? h : `${h.plain} ${h.accent}`);

export type Owner = "you" | "caldrik" | "shared";

export const ways = {
  label: "Ways to partner",
  headline: { plain: "Three models.", accent: "Your client contract decides." },
  // `intro: true` marks the "Best when" row, shown in each model's header. `owners` drives the
  // You / Caldrik / Shared chip in each cell.
  rows: [
    {
      label: "Best when",
      intro: true,
      values: {
        whiteLabel: "You want to sell AI as your own service",
        coDelivery: "Your client's vendor rules require named subcontractors",
        referral: "You'd rather introduce the work than run it",
      },
    },
    {
      label: "Client relationship",
      owners: { whiteLabel: "you", coDelivery: "you", referral: "shared" },
      values: { whiteLabel: "Yours", coDelivery: "Yours", referral: "Shared, agreed upfront" },
    },
    {
      label: "Brand on the work",
      owners: { whiteLabel: "you", coDelivery: "you", referral: "caldrik" },
      values: {
        whiteLabel: "Yours",
        coDelivery: "Yours, with Caldrik named as your engineering partner",
        referral: "Caldrik's",
      },
    },
    {
      label: "Contract with the client",
      owners: { whiteLabel: "you", coDelivery: "you", referral: "caldrik" },
      values: { whiteLabel: "Yours", coDelivery: "Yours", referral: "Caldrik's" },
    },
    {
      label: "Pricing to the client",
      owners: { whiteLabel: "you", coDelivery: "you", referral: "caldrik" },
      values: {
        whiteLabel: "You set it",
        coDelivery: "You set it",
        referral: "Caldrik sets it; your referral terms agreed in writing",
      },
    },
    {
      label: "Delivery",
      owners: { whiteLabel: "caldrik", coDelivery: "caldrik", referral: "caldrik" },
      values: {
        whiteLabel: "Caldrik, as part of your team",
        coDelivery: "Caldrik, alongside your team",
        referral: "Caldrik",
      },
    },
  ] as {
    label: string;
    intro?: boolean;
    owners?: Record<string, Owner>;
    values: Record<string, string>;
  }[],
};

export const rules = {
  label: "Rules of engagement",
  headline: { plain: "Your client stays yours.", accent: "In writing." },
  // Each rule is one sentence split in two so the lead can be emphasised: `${lead} ${rest}` is the full text.
  // The first item is the headline promise and gets the large card.
  items: [
    { icon: "accounts", lead: "Accounts you bring are yours.", rest: "We never sell to them directly, during or after the engagement." },
    { icon: "contract", lead: "NDA and MSA before any work,", rest: "with mutual non-solicitation." },
    { icon: "privacy", lead: "No contact outside your engagement,", rest: "and we never use your clients' names in our marketing." },
    {
      icon: "split",
      lead: "You own the client and the commercials; we own the engineering.",
      rest: "Scoping, build, evaluation, QA, deployment and handover.",
    },
  ] as { icon: "accounts" | "contract" | "privacy" | "split"; lead: string; rest: string }[],
};

export const workingTerms = {
  label: "Working terms",
  headline: { plain: "Capacity when you sell.", accent: "No bench when you don't." },
  // `${line} ${kickoff}` is the full sentence pair; kickoff is shown as a highlighted pill.
  line: "Master Services Agreement, with a Statement of Work per project.",
  kickoff: "Kickoff within 8 days of signing.",
  // Each card's description is split at its first sentence: `${lead} ${rest}`.
  cards: [
    {
      title: "Time and Materials",
      lead: "For first builds and scopes still taking shape.",
      rest: "Billed monthly on actual effort, with no minimum commitment.",
    },
    {
      title: "Dedicated Team",
      lead: "For ongoing programmes.",
      rest: "A lead architect, AI engineers, QA and eval, and a delivery manager, on a monthly retainer with a three-month minimum and a preferred rate.",
    },
  ] as { title: string; lead: string; rest: string }[],
  note: "Rates are structured so you resell at your market's rates and keep a healthy margin.",
  // "assurance" items get a tick; the "caveat" gets an info mark so the honest limit reads as honest.
  strip: [
    { kind: "assurance", text: "client data stays in the client's environment" },
    { kind: "assurance", text: "client owns all IP" },
    { kind: "caveat", text: "not yet SOC 2 or ISO certified; we complete your security questionnaire" },
  ] as { kind: "assurance" | "caveat"; text: string }[],
};

export const faq = {
  headline: "Before you ask.",
  items: [
    { q: "Do you compete with us for clients?", a: "No. The accounts you bring are yours, and our contract with you says so." },
    {
      q: "Will my client know you're involved?",
      a: "Only if you choose co-delivery. With white-label, we work under your brand, inside your client's tools.",
    },
    {
      q: "Where is your team, and when do you work?",
      a: "In India, 14:00 to 23:00 IST. That covers the UK and European business day in full, and overlaps 3.5 to 4.5 hours with US Eastern.",
    },
    { q: "How fast can we start?", a: "Kickoff within 8 days of signing, usually with one small project on Time and Materials." },
    { q: "What does it cost?", a: "Rates are set by role and stay the same across projects. Rate card shared on our first call." },
  ],
};

export const closing = {
  headline: ["Know before", "you pitch."],
  line: "Bring one client requirement. We'll tell you whether AI fits, and what it takes to deliver it.",
  smallPrint: "No pitch. Just a technical opinion.",
  button: "Book a discovery call",
  calendlyUrl: "https://calendly.com/rohan-caldrik/30min",
  // When a model was picked in "Ways to partner", it is shown on the card and passed to Calendly as answer 1.
  interestedIn: "Interested in",
};
