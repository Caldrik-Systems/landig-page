"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { HowItWorks } from "@/components/ui/how-it-works";
import type { HowItWorksStep } from "@/components/ui/how-it-works";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ── Shared bits (same patterns as TheProblem / HowWeWork) ─────────────── */

function AnimatedContainer({ className, delay = 0.1, children }: { className?: string; delay?: number; children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ label, headline, line, className = "max-w-2xl" }: { label: string; headline: ReactNode; line?: ReactNode; className?: string }) {
  return (
    <AnimatedContainer className={className}>
      <p className="text-base/7 font-semibold text-brand">{label}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">{headline}</h2>
      {line && <p className="mt-4 text-lg font-medium text-gray-400">{line}</p>}
    </AnimatedContainer>
  );
}

const dashedGrid = "grid grid-cols-1 divide-y divide-dashed divide-white/[0.15] border border-dashed border-white/[0.15]";

/* ── 2. The gap ────────────────────────────────────────────────────────── */

const gapCards = [
  { title: "Hiring takes quarters.", description: "Experienced AI engineers take months to recruit, and are hard to keep utilised between projects." },
  { title: "Saying no moves the account.", description: "A client who can't get AI from you will find someone who can. The AI work rarely leaves alone." },
  { title: "Demos drift in production.", description: "A prototype wins the meeting. Then the model updates, the data shifts, and the system quietly degrades, with your name on it." },
];

export function GlobalGap() {
  return (
    <section id="gap" className="bg-[#080f19] py-16 md:py-32">
      <div className="mx-auto w-full max-w-7xl space-y-8 px-6 lg:px-8">
        <SectionHeader
          label="The gap"
          headline={<>Clients ask for AI.<br />Benches aren&apos;t built for it.</>}
          line="Every services firm is being asked the same question. Few can answer it with a production system."
        />
        <AnimatedContainer delay={0.4} className={`${dashedGrid} sm:grid-cols-3 sm:divide-x sm:divide-y-0`}>
          {gapCards.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}

/* ── 3. The partnership ────────────────────────────────────────────────── */

const youOwn = ["The client relationship", "Commercial terms with your client", "Your brand on every deliverable", "The account's next move"];
const caldrikOwns = ["Technical scoping and acceptance criteria", "Build, evaluation and QA", "Deployment inside your client's cloud", "Handover and ongoing support"];

function OwnColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 md:p-8">
      <h3 className="text-base font-bold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-400">
            <span aria-hidden className="mt-2.5 block h-[1.5px] w-4 shrink-0 rounded-full bg-brand" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function GlobalPartnership() {
  return (
    <section id="partnership" className="bg-[#080f19] py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="The Partnership"
          headline="Your client. Our engineering."
          line="We work as your AI delivery team, under your name. The relationship stays yours; scoping, build, evaluation and handover are ours."
          className="max-w-2xl mb-12"
        />
        <AnimatedContainer delay={0.3} className={`${dashedGrid} md:grid-cols-2 md:divide-x md:divide-y-0`}>
          <OwnColumn title="You own" items={youOwn} />
          <OwnColumn title="Caldrik owns" items={caldrikOwns} />
        </AnimatedContainer>
        <p className="mt-6 font-mono text-sm text-brand">one small project · time and materials · kickoff within 8 days</p>
      </div>
    </section>
  );
}

/* ── 4. Capabilities (Focus row layout) ────────────────────────────────── */

const capabilities = [
  { name: "Agentic workflows", description: "Agents that take action in ERP, CRM and ticketing systems.", callout: "approval gates, full audit trails" },
  { name: "Knowledge assistants", description: "Answers over a client's documents and systems, scoped to who can see what.", callout: "every answer cited, every permission respected" },
  { name: "Document intelligence", description: "Extraction and reconciliation across contracts, invoices, claims and forms.", callout: "exceptions flagged with evidence" },
  { name: "Embedded AI", description: "LLM features inside the CRM, ERP and service desk your clients already run.", callout: "inside their tools, on their keys" },
];

export function GlobalCapabilities() {
  return (
    <section id="capabilities" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Capabilities"
          headline="Four builds. One standard."
          line="Built where your clients already work: inside their ERP, CRM, service desk and document stores."
          className="max-w-2xl mb-10"
        />
        <div>
          {capabilities.map((c) => (
            <div
              key={c.name}
              className="group border-t border-white/[0.12] py-8 -mx-6 px-6 lg:-mx-8 lg:px-8 transition-colors duration-300 hover:bg-white/[0.025]"
            >
              <div className="md:grid md:grid-cols-[280px_1fr] md:gap-12 md:items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">{c.name}</h3>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-base leading-7 text-gray-400">{c.description}</p>
                  <p className="font-mono text-sm text-brand">{c.callout}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/[0.12] -mx-6 lg:-mx-8" />
        </div>
      </div>
    </section>
  );
}

/* ── 5. The standard (HowItWorks numbered cards) ───────────────────────── */

const standardSteps: HowItWorksStep[] = [
  { title: "Evaluated", description: "A regression suite and automated scoring on every agent. Every task gets a score, a threshold and a status." },
  { title: "Observable", description: "Tracing, cost and latency monitoring in production from day one. Drift is visible before it reaches the client." },
  { title: "Governed", description: "PII and prompt-injection safeguards, approval gates, and human review of consequential actions." },
  { title: "Client-owned", description: "Deployed inside your client's cloud, on their own model keys. No licences, no lock-in." },
];

export function GlobalStandard() {
  return (
    <section id="standard" className="bg-[#080f19] py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="The Standard"
          headline="Engineered for production. Not for the demo."
          line={
            <>
              An agent that works in a demo can drift quietly in production.{" "}
              <span className="text-white/80">Every build ships with the controls that catch it, before your client does.</span>
            </>
          }
          className="max-w-3xl mb-16"
        />
        <HowItWorks steps={standardSteps} visuals={false} />
        <p className="mt-6 font-mono text-xs leading-6 text-white/50 break-words">
          langgraph · langchain · mcp · a2a · python · typescript · aws · docker · kubernetes · opentelemetry
        </p>
      </div>
    </section>
  );
}

/* ── Services-style card (description + → outcome) ─────────────────────── */

function DetailCard({ title, description, footer, footerIsOutcome = false }: { title: string; description: string; footer: string; footerIsOutcome?: boolean }) {
  return (
    <div className="relative flex flex-col gap-3 overflow-hidden p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.04] to-white/[0.01] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />
      </div>
      <h3 className="relative text-xl font-bold text-white">{title}</h3>
      <p className="relative text-sm leading-6 text-gray-400">{description}</p>
      {footerIsOutcome ? (
        <p className="relative text-sm leading-6 text-white/80">→ {footer}</p>
      ) : (
        <p className="relative font-mono text-sm text-brand">{footer}</p>
      )}
    </div>
  );
}

/* ── 6. Recent work ────────────────────────────────────────────────────── */

export function GlobalRecentWork() {
  return (
    <section id="work" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label="Recent Work" headline="Proof, anonymised." className="max-w-2xl mb-10" />
        <AnimatedContainer delay={0.3} className={`${dashedGrid} md:grid-cols-2 md:divide-x md:divide-y-0`}>
          <DetailCard
            title="AI-assisted claim investigation"
            description="Reads claim documents, policy terms, medical records and billing, then flags what's wrong, missing or inconsistent, with evidence."
            footer="the investigator makes the call"
          />
          <DetailCard
            title="Enterprise knowledge and engineering assistant"
            description="Connects Confluence, SharePoint, GitHub, Jira, runbooks and Slack or Teams. Surfaces related tickets, code and incidents."
            footer="every answer cited, every permission respected"
          />
        </AnimatedContainer>
      </div>
    </section>
  );
}

/* ── 7. Engagement models ──────────────────────────────────────────────── */

export function GlobalEngagement() {
  return (
    <section id="engagement" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Engagement Models"
          headline="Two models. No surprises."
          line="Every engagement runs under a Master Services Agreement, with a Statement of Work per project."
          className="max-w-2xl mb-10"
        />
        <AnimatedContainer delay={0.3} className={`${dashedGrid} md:grid-cols-2 md:divide-x md:divide-y-0`}>
          <DetailCard
            title="Time and Materials"
            description="An AI engineering pod billed monthly on actual effort against our rate card. No minimum commitment."
            footer="Suited to discovery, first builds and scopes still taking shape."
            footerIsOutcome
          />
          <DetailCard
            title="Dedicated Team"
            description="An embedded pod of lead architect, AI engineers, QA and eval, and a delivery manager. Monthly retainer, three-month minimum term, preferred rate."
            footer="Accountable for delivery against agreed acceptance criteria."
            footerIsOutcome
          />
        </AnimatedContainer>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-400">
          Rates are structured so you can bill your client at your market&apos;s prevailing rates and retain a healthy margin. Rate card shared on our first call.
        </p>
      </div>
    </section>
  );
}

/* ── 8. Safeguards ─────────────────────────────────────────────────────── */

const safeguards = [
  "Every engagement is fully white-label, governed by an NDA and MSA, with mutual non-solicitation.",
  "Client data stays inside the client's environment, on their own model keys.",
  "All IP in the delivered build belongs to the client.",
  "Not yet SOC 2 or ISO certified. We complete your security questionnaire as part of onboarding.",
];

export function GlobalSafeguards() {
  return (
    <section id="safeguards" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label="Safeguards" headline="White-label from the contract up." className="max-w-2xl mb-10" />
        <ul className="max-w-3xl space-y-4">
          {safeguards.map((s) => (
            <li key={s} className="flex items-start gap-4 text-base leading-7 text-gray-400">
              <CheckIcon aria-hidden className="mt-1 size-5 shrink-0 text-brand" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── 10. FAQ ───────────────────────────────────────────────────────────── */

const faqs = [
  { q: "Will my client know Caldrik is involved?", a: "No. We work under your brand, in your client's tools. Mutual non-solicitation is in the contract, and we never name your clients in our marketing." },
  { q: "Where is your team?", a: "Our engineering team is in India, working 14:00 to 23:00 IST. That covers the UK and European business day in full, and gives 3.5 to 4.5 hours of daily overlap with US Eastern business hours." },
  { q: "How do we start?", a: "An intro call to understand your firm and your clients. Most partners start with one small project on Time and Materials, kicked off within 8 days of signing." },
  { q: "Who owns what you build?", a: "Your client. All IP belongs to them, and the system runs inside their cloud on their own model keys." },
  { q: "Are you SOC 2 certified?", a: "Not yet. Work runs inside your client's environment, on their keys, and we complete your security questionnaire during onboarding." },
  { q: "What does it cost?", a: "Rates are set by role and stay the same across projects. Rate card shared on our first call." },
];

export function GlobalFaq() {
  return (
    <section id="faq" className="bg-[#080f19] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <AnimatedContainer className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Questions partners ask.</h2>
        </AnimatedContainer>
        <Accordion type="single" collapsible className="border-t border-dashed border-white/[0.12]">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base text-white">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-6 text-gray-400">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
