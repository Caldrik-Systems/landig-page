import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Caldrik",
  description: "How Caldrik collects, uses, and protects your information.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold text-white">{title}</h2>
    <div className="space-y-3 text-gray-400 leading-7">{children}</div>
  </div>
);

export default function PrivacyPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#080f19]">
      <Navigation />

      <main className="flex-1 px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">

          {/* Header */}
          <div className="mb-14 space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5170ff]/70">Legal</p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Privacy Policy</h1>
            <p className="text-sm text-gray-500">Effective date: 1 August 2026 &nbsp;·&nbsp; Last updated: 20 August 2026</p>
          </div>

          {/* Body */}
          <div className="space-y-10 text-sm">

            <Section title="1. Who We Are">
              <p>
                Caldrik is a brand of <strong className="text-gray-300">Revenance Techsol Private Limited</strong>, a company incorporated under the Companies Act, 2013, with its registered office in India (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We provide AI engineering advisory and implementation services to enterprise clients.
              </p>
              <p>
                This Privacy Policy describes how we collect, use, store, and share information when you visit <strong className="text-gray-300">caldrik.co</strong> or submit an inquiry through our website.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We collect information only when you voluntarily provide it through our contact form. This may include:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-500 ml-2">
                <li>First and last name</li>
                <li>Work email address</li>
                <li>Company name</li>
                <li>Your title or role</li>
                <li>A description of the workflow you wish to discuss</li>
              </ul>
              <p>
                We do not use cookies for tracking, do not deploy analytics scripts, and do not collect any information passively from visitors who do not submit the contact form.
              </p>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>Information submitted through our contact form is used solely to:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-500 ml-2">
                <li>Respond to your inquiry regarding our AI engineering services</li>
                <li>Conduct an initial assessment of AI applicability to your described workflow</li>
                <li>Communicate with you about a potential engagement</li>
              </ul>
              <p>
                We do not use your information for advertising, profiling, or any purpose unrelated to the inquiry you initiated.
              </p>
            </Section>

            <Section title="4. Legal Basis for Processing">
              <p>
                We process your personal data on the basis of your consent, given explicitly when you check the consent box on our contact form and submit your inquiry. You may withdraw consent at any time by contacting us at <a href="mailto:hello@caldrik.co" className="text-[#5170ff] hover:underline">hello@caldrik.co</a>.
              </p>
              <p>
                Our processing is governed by the <strong className="text-gray-300">Digital Personal Data Protection Act, 2023</strong> (DPDP Act) of India.
              </p>
            </Section>

            <Section title="5. Data Sharing">
              <p>
                We do not sell, rent, or trade your personal data. We do not share your information with third parties except in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-500 ml-2">
                <li><strong className="text-gray-300">Service providers:</strong> We may use trusted email or CRM tools to manage communications. These processors are contractually bound to handle data solely on our behalf.</li>
                <li><strong className="text-gray-300">Legal obligation:</strong> We may disclose information where required to do so by law or in response to valid requests by public authorities.</li>
              </ul>
            </Section>

            <Section title="6. Data Retention">
              <p>
                We retain inquiry data for a period of <strong className="text-gray-300">24 months</strong> from the date of submission, or until you request deletion, whichever comes first. If an engagement proceeds, data may be retained for the duration of the engagement and for a reasonable period thereafter for legal and accounting purposes.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p>Under the DPDP Act, 2023, you have the right to:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-500 ml-2">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request erasure of your personal data</li>
                <li>Withdraw consent to processing at any time</li>
                <li>Nominate a person to exercise these rights on your behalf</li>
              </ul>
              <p>
                To exercise any of these rights, write to us at <a href="mailto:hello@caldrik.co" className="text-[#5170ff] hover:underline">hello@caldrik.co</a>. We will respond within 30 days.
              </p>
            </Section>

            <Section title="8. Data Security">
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Our contact form submissions are transmitted over encrypted connections (HTTPS).
              </p>
              <p>
                No method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="9. Children">
              <p>
                Our services are directed exclusively to business professionals. We do not knowingly collect personal data from individuals under the age of 18. If we become aware that we have inadvertently collected such data, we will delete it promptly.
              </p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Material changes will be reflected in a revised effective date at the top of this page. We encourage you to review this policy periodically. Continued use of our website following any changes constitutes your acceptance of the updated policy.
              </p>
            </Section>

            <Section title="11. Contact">
              <p>
                For questions, concerns, or to exercise your data rights, contact our designated point of contact:
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
