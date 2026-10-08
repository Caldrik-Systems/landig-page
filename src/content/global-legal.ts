/**
 * Legal copy for the GLOBAL site: /privacy/ and /terms/.
 *
 * Adapted from the India policies (/in/privacy/, /in/terms/). Edit text here; no component changes needed.
 * Inline markup: **bold** and [link text](https://url or mailto:address).
 * Have counsel review before relying on this text.
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "contact"; lines: string[] };

export type LegalSection = { title: string; blocks: LegalBlock[] };

export type LegalDoc = {
  title: string;
  description: string;
  effective: string;
  updated: string;
  sections: LegalSection[];
};

const p = (text: string): LegalBlock => ({ type: "p", text });
const ul = (...items: string[]): LegalBlock => ({ type: "ul", items });
const contact: LegalBlock = {
  type: "contact",
  lines: [
    "**Revenance Techsol Private Limited**",
    "Operating as Caldrik",
    "India",
    "Email: [hello@caldrik.co](mailto:hello@caldrik.co)",
  ],
};

export const globalPrivacy: LegalDoc = {
  title: "Privacy Policy",
  description: "How Caldrik collects, uses, and protects your information.",
  effective: "8 October 2026",
  updated: "8 October 2026",
  sections: [
    {
      title: "1. Who We Are",
      blocks: [
        p("Caldrik is a brand of **Revenance Techsol Private Limited**, a company incorporated under the Companies Act, 2013, with its registered office in India (“we”, “us”, or “our”). We provide AI engineering services to enterprises and to technology services firms."),
        p("This Privacy Policy describes how we collect, use, store, and share information when you visit **caldrik.co** or submit an inquiry through our website."),
      ],
    },
    {
      title: "2. Information We Collect",
      blocks: [
        p("**Information you provide.** We collect information only when you voluntarily submit our contact form. This may include:"),
        ul("First and last name", "Work email address", "Company name", "Your title or role", "A description of the client requirement you wish to discuss"),
        p("**Information collected automatically.** When you visit our website, we also collect certain data automatically through analytics and session-recording tools (see Section 3)."),
      ],
    },
    {
      title: "3. Analytics and Session Recording",
      blocks: [
        p("We use the following third-party tools to understand how visitors use our website and to improve its content and performance:"),
        ul(
          "**Google Analytics 4 (GA4)** — provided by Google LLC. GA4 uses cookies and similar technologies to collect anonymised usage data including pages visited, session duration, device type, and approximate geographic location. Data is processed by Google under its Analytics Terms of Service and Privacy Policy. You may opt out using the [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout).",
          "**Microsoft Clarity** — provided by Microsoft Corporation. Clarity uses cookies and browser storage to record anonymised session replays and generate heatmaps that show how visitors interact with our pages. No personally identifiable information is transmitted to Clarity. You may opt out at [Microsoft’s Privacy Statement](https://privacy.microsoft.com/en-us/privacystatement).",
        ),
        p("Both tools operate by setting cookies or using local storage in your browser. By continuing to use our website, you consent to this use, to the extent permitted by applicable law. You may manage or disable cookies through your browser settings at any time; doing so may affect site functionality."),
        p("Neither tool receives the personal data you submit through our contact form, and neither is used for advertising or cross-site tracking."),
      ],
    },
    {
      title: "4. How We Use Your Information",
      blocks: [
        p("Information submitted through our contact form is used solely to:"),
        ul("Respond to your inquiry regarding our AI engineering services", "Conduct an initial assessment of whether AI applies to the client requirement you describe", "Communicate with you about a potential partnership or engagement"),
        p("We do not use your contact form data for advertising, profiling, or any purpose unrelated to the inquiry you initiated."),
      ],
    },
    {
      title: "5. Legal Basis for Processing",
      blocks: [
        p("We process contact form data on the basis of your explicit consent, given when you check the consent box and submit the form. You may withdraw this consent at any time by contacting us at [hello@caldrik.co](mailto:hello@caldrik.co)."),
        p("Analytics data collected via GA4 and Microsoft Clarity is processed on the basis of your consent through continued use of the website, to the extent permitted by applicable law."),
        p("As a company based in India, our processing is governed by the **Digital Personal Data Protection Act, 2023** (DPDP Act) of India. Where the data protection laws of your country or region (such as the EU or UK GDPR, or US state privacy laws) apply to our processing of your personal data, we will honour the rights those laws give you."),
      ],
    },
    {
      title: "6. International Transfers",
      blocks: [
        p("Our company and engineering team are based in India. If you contact us from outside India, the information you submit will be transferred to, stored, and processed in India, and may be processed by the service providers described in Section 7. By submitting the contact form, you acknowledge this transfer."),
      ],
    },
    {
      title: "7. Data Sharing",
      blocks: [
        p("We do not sell, rent, or trade your personal data, and we do not share it for advertising. We do not share contact form information with third parties except in the following limited circumstances:"),
        ul(
          "**Analytics processors:** Google LLC (GA4) and Microsoft Corporation (Clarity) receive anonymised, non-personally-identifiable analytics data as described in Section 3. Both act as independent data controllers for their respective platforms.",
          "**Service providers:** We may use trusted email or CRM tools to manage communications. These processors are contractually bound to handle data solely on our behalf.",
          "**Legal obligation:** We may disclose information where required to do so by law or in response to valid requests by public authorities.",
        ),
      ],
    },
    {
      title: "8. Data Retention",
      blocks: [
        p("We retain inquiry data for a period of **24 months** from the date of submission, or until you request deletion, whichever comes first. If an engagement proceeds, data may be retained for the duration of the engagement and for a reasonable period thereafter for legal and accounting purposes."),
        p("Analytics data retained by Google and Microsoft is subject to their respective retention policies. GA4 data is retained for 14 months by default; Clarity data is retained for 13 months."),
      ],
    },
    {
      title: "9. Your Rights",
      blocks: [
        p("Depending on where you live, you may have the right to:"),
        ul(
          "Access the personal data we hold about you",
          "Correct inaccurate or incomplete data",
          "Request erasure of your personal data",
          "Withdraw consent to processing at any time",
          "Object to or ask us to restrict certain processing, and request a portable copy of your data, where your local law provides for it",
          "Nominate a person to exercise these rights on your behalf, where your local law provides for it",
          "Lodge a complaint with your local data protection authority",
        ),
        p("To exercise any of these rights, write to us at [hello@caldrik.co](mailto:hello@caldrik.co). We will respond within 30 days. We will not treat you differently for exercising your rights."),
      ],
    },
    {
      title: "10. Data Security",
      blocks: [
        p("We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Our contact form submissions are transmitted over encrypted connections (HTTPS)."),
        p("No method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security."),
      ],
    },
    {
      title: "11. Children",
      blocks: [
        p("Our services are directed exclusively to business professionals. We do not knowingly collect personal data from individuals under the age of 18. If we become aware that we have inadvertently collected such data, we will delete it promptly."),
      ],
    },
    {
      title: "12. Changes to This Policy",
      blocks: [
        p("We may update this Privacy Policy from time to time. Material changes will be reflected in a revised effective date at the top of this page. We encourage you to review this policy periodically. Continued use of our website following any changes constitutes your acceptance of the updated policy."),
      ],
    },
    {
      title: "13. Contact",
      blocks: [p("For questions, concerns, or to exercise your data rights, contact our designated point of contact:"), contact],
    },
  ],
};

export const globalTerms: LegalDoc = {
  title: "Terms & Conditions",
  description: "Terms governing the use of Caldrik's website and AI engineering services.",
  effective: "8 October 2026",
  updated: "8 October 2026",
  sections: [
    {
      title: "1. About These Terms",
      blocks: [
        p("These Terms & Conditions (“Terms”) govern your use of the website **caldrik.co** and any services provided by **Revenance Techsol Private Limited**, operating under the brand name **Caldrik** (“we”, “us”, or “our”), a company incorporated under the Companies Act, 2013, with its registered office in India."),
        p("By accessing this website or submitting an inquiry, you agree to be bound by these Terms. If you do not agree, please do not use our website or services."),
      ],
    },
    {
      title: "2. Services",
      blocks: [
        p("Caldrik provides AI engineering services to enterprises and to technology services firms, including delivery under a partner’s own brand. The scope, deliverables, timelines, and commercial terms for any engagement are defined in a separate Statement of Work or Master Services Agreement executed between Caldrik and the client or partner."),
        p("Submission of the contact form on this website constitutes an expression of interest only and does not create a binding contract or commitment of any kind on either party."),
      ],
    },
    {
      title: "3. Website Use",
      blocks: [
        p("You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:"),
        ul(
          "Attempt to gain unauthorised access to any part of the website or its underlying systems",
          "Transmit any unsolicited commercial communications via the contact form",
          "Use automated tools to scrape, crawl, or extract content from the website",
          "Introduce malicious code, viruses, or any material that is harmful or disruptive",
        ),
      ],
    },
    {
      title: "4. Intellectual Property",
      blocks: [
        p("All content on this website — including text, graphics, logos, visual design, and code — is the exclusive property of Revenance Techsol Private Limited or its licensors and is protected by applicable intellectual property laws."),
        p("You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent."),
        p("Ownership of work delivered in an engagement is set out in the applicable Master Services Agreement or Statement of Work. Our pre-existing methodologies, tools, and frameworks remain the intellectual property of Revenance Techsol Private Limited unless explicitly transferred under a separate written agreement."),
      ],
    },
    {
      title: "5. Confidentiality",
      blocks: [
        p("Information you share with us through the contact form — including descriptions of your requirements, business context, and technical environment — is treated as confidential. We will not disclose such information to third parties except as necessary to respond to your inquiry or as required by law."),
        p("Formal confidentiality, non-solicitation, and white-label obligations for engagements are governed by the applicable Non-Disclosure Agreement and Master Services Agreement."),
      ],
    },
    {
      title: "6. Disclaimer of Warranties",
      blocks: [
        p("This website and its content are provided on an “as is” and “as available” basis without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components."),
        p("Any assessment or opinion provided during a pre-engagement discovery is indicative in nature and does not constitute a guarantee of outcome, return on investment, or technical feasibility beyond what is expressly stated in a signed engagement document."),
      ],
    },
    {
      title: "7. Limitation of Liability",
      blocks: [
        p("To the maximum extent permitted by applicable law, Revenance Techsol Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of this website or any information provided herein."),
        p("Our total aggregate liability to you in connection with this website — for any cause and regardless of the form of action — shall not exceed INR 10,000. Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law."),
      ],
    },
    {
      title: "8. Third-Party Links",
      blocks: [
        p("This website may contain links to third-party websites. These links are provided for convenience only. We do not endorse, control, or assume responsibility for the content, privacy practices, or accuracy of any third-party website. Accessing third-party links is at your own risk."),
      ],
    },
    {
      title: "9. Indemnification",
      blocks: [
        p("You agree to indemnify and hold harmless Revenance Techsol Private Limited, its officers, employees, and agents from any claims, losses, liabilities, damages, costs, or expenses (including legal fees) arising out of your violation of these Terms or your misuse of this website."),
      ],
    },
    {
      title: "10. Governing Law and Jurisdiction",
      blocks: [
        p("These Terms are governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in **Mumbai, Maharashtra, India**."),
      ],
    },
    {
      title: "11. Changes to These Terms",
      blocks: [
        p("We reserve the right to modify these Terms at any time. Material changes will be indicated by an updated effective date at the top of this page. Your continued use of the website after any changes constitutes your acceptance of the revised Terms."),
      ],
    },
    {
      title: "12. Contact",
      blocks: [p("For questions regarding these Terms, please contact us at:"), contact],
    },
  ],
};
