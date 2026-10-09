// FAQPage structured data for the homepage only. Moved verbatim from the root layout.

export const jsonLdFaq = {
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
