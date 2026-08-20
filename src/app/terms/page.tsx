import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions — Caldrik",
  description: "Terms governing the use of Caldrik's website and AI engineering services.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold text-white">{title}</h2>
    <div className="space-y-3 text-gray-400 leading-7">{children}</div>
  </div>
);

export default function TermsPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#080f19]">
      <Navigation />

      <main className="flex-1 px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">

          {/* Header */}
          <div className="mb-14 space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff]/70">Legal</p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Terms &amp; Conditions</h1>
            <p className="text-sm text-gray-500">Effective date: 1 August 2026 &nbsp;·&nbsp; Last updated: 20 August 2026</p>
          </div>

          {/* Body */}
          <div className="space-y-10 text-sm">

            <Section title="1. About These Terms">
              <p>
                These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the website <strong className="text-gray-300">caldrik.co</strong> and any services provided by <strong className="text-gray-300">Revenance Techsol Private Limited</strong>, operating under the brand name <strong className="text-gray-300">Caldrik</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company incorporated under the Companies Act, 2013, with its registered office in India.
              </p>
              <p>
                By accessing this website or submitting an inquiry, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.
              </p>
            </Section>

            <Section title="2. Services">
              <p>
                Caldrik provides AI engineering advisory, assessment, design, and implementation services to enterprise and business clients. The scope, deliverables, timelines, and commercial terms for any engagement are defined in a separate Statement of Work or Master Services Agreement executed between Caldrik and the client.
              </p>
              <p>
                Submission of the contact form on this website constitutes an expression of interest only and does not create a binding contract or commitment of any kind on either party.
              </p>
            </Section>

            <Section title="3. Website Use">
              <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-500 ml-2">
                <li>Attempt to gain unauthorised access to any part of the website or its underlying systems</li>
                <li>Transmit any unsolicited commercial communications via the contact form</li>
                <li>Use automated tools to scrape, crawl, or extract content from the website</li>
                <li>Introduce malicious code, viruses, or any material that is harmful or disruptive</li>
              </ul>
            </Section>

            <Section title="4. Intellectual Property">
              <p>
                All content on this website — including text, graphics, logos, visual design, and code — is the exclusive property of Revenance Techsol Private Limited or its licensors and is protected by applicable intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
              </p>
              <p>
                Work product, methodologies, tools, and frameworks developed by Caldrik during a client engagement remain the intellectual property of Revenance Techsol Private Limited unless explicitly transferred under a separate written agreement.
              </p>
            </Section>

            <Section title="5. Confidentiality">
              <p>
                Information you share with us through the contact form — including descriptions of your workflows, business context, and technical environment — is treated as confidential. We will not disclose such information to third parties except as necessary to respond to your inquiry or as required by law.
              </p>
              <p>
                Formal confidentiality obligations for client engagements are governed by the non-disclosure provisions of the applicable Master Services Agreement.
              </p>
            </Section>

            <Section title="6. Disclaimer of Warranties">
              <p>
                This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
              <p>
                Any assessment or opinion provided during a pre-engagement discovery is indicative in nature and does not constitute a guarantee of outcome, return on investment, or technical feasibility beyond what is expressly stated in a signed engagement document.
              </p>
            </Section>

            <Section title="7. Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law, Revenance Techsol Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of this website or any information provided herein.
              </p>
              <p>
                Our total aggregate liability to you in connection with this website — for any cause and regardless of the form of action — shall not exceed INR 10,000.
              </p>
            </Section>

            <Section title="8. Third-Party Links">
              <p>
                This website may contain links to third-party websites, including professional networks such as LinkedIn. These links are provided for convenience only. We do not endorse, control, or assume responsibility for the content, privacy practices, or accuracy of any third-party website. Accessing third-party links is at your own risk.
              </p>
            </Section>

            <Section title="9. Indemnification">
              <p>
                You agree to indemnify and hold harmless Revenance Techsol Private Limited, its officers, employees, and agents from any claims, losses, liabilities, damages, costs, or expenses (including legal fees) arising out of your violation of these Terms or your misuse of this website.
              </p>
            </Section>

            <Section title="10. Governing Law and Jurisdiction">
              <p>
                These Terms are governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in <strong className="text-gray-300">Mumbai, Maharashtra, India</strong>.
              </p>
            </Section>

            <Section title="11. Changes to These Terms">
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be indicated by an updated effective date at the top of this page. Your continued use of the website after any changes constitutes your acceptance of the revised Terms.
              </p>
            </Section>

            <Section title="12. Contact">
              <p>
                For questions regarding these Terms, please contact us at:
              </p>
              <div className="mt-2 space-y-1 text-gray-500">
                <p><strong className="text-gray-300">Revenance Techsol Private Limited</strong></p>
                <p>Operating as Caldrik</p>
                <p>India</p>
                <p>
                  Email: <a href="mailto:hello@caldrik.co" className="text-[#5170ff] hover:underline">hello@caldrik.co</a>
                </p>
              </div>
            </Section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
