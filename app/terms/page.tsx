import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/anim/reveal'

export const metadata: Metadata = {
  title: 'Terms and Conditions — OBX Studio',
  description: 'Terms and Conditions for OBX Studio.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <PageHeader index="00 / 05" subtitle="Legal details" title="Terms and Conditions" />
      <section className="px-5 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-3xl border-t border-border pt-12 md:pt-16">
          <div className="space-y-12 md:space-y-16">
            
            <Reveal className="space-y-4">
              <div className="text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p><strong>Last Updated:</strong> 22 June 2026</p>
                <p>
                  Welcome to OBX Studio (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website.
                </p>
                <p>
                  These Terms and Conditions govern your use of the OBX Studio website and the services we offer. We have designed these terms to be as clear and straightforward as possible, outlining both our responsibilities to you as a service provider and your obligations as a user of our platform. Please take the time to read through them carefully before engaging with our services or relying on the information presented on our site.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">1.</span>
                About Us
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  OBX Studio is a web design and development studio based in Johannesburg, South Africa, providing website design, development, branding, and related digital services.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">2.</span>
                Website Use
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website.
                </p>
                <p>You may not:</p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Attempt to gain unauthorized access to the website or its systems.</li>
                  <li>Interfere with the operation or security of the website.</li>
                  <li>Use the website for fraudulent or unlawful activities.</li>
                  <li>Reproduce, distribute, or exploit website content without permission.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">3.</span>
                Intellectual Property
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  All content on this website, including but not limited to text, graphics, logos, designs, images, code, and branding, is the property of OBX Studio unless otherwise stated.
                </p>
                <p>
                  No content may be copied, reproduced, modified, distributed, or used without prior written permission.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">4.</span>
                Portfolio Work
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  Projects displayed in our portfolio are shown for demonstration and marketing purposes. Ownership of client work remains subject to the agreements entered into with those clients.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">5.</span>
                Service Information
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  Information regarding our services is provided for general informational purposes only and does not constitute a binding offer.
                </p>
                <p>
                  Any proposal, quotation, timeline, or project scope will be confirmed separately in writing.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">6.</span>
                Contact Forms and Enquiries
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  When you submit an enquiry through our website, you agree that the information provided is accurate and complete.
                </p>
                <p>
                  Submission of an enquiry does not create a client relationship or guarantee the provision of services.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">7.</span>
                Third-Party Links
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  This website may contain links to third-party websites. We are not responsible for the content, availability, security, or privacy practices of those websites.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">8.</span>
                Disclaimer
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  While we strive to ensure the accuracy of information on this website, we make no warranties or representations regarding its completeness, reliability, or accuracy.
                </p>
                <p>
                  Website content may be updated, modified, or removed at any time without notice.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">9.</span>
                Limitation of Liability
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  To the fullest extent permitted by law, OBX Studio shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Use of this website.</li>
                  <li>Inability to access this website.</li>
                  <li>Reliance on information provided on this website.</li>
                  <li>Technical errors, interruptions, or security issues.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">10.</span>
                Privacy
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  Your use of this website is also governed by our Privacy Policy, which explains how personal information is collected, used, and protected.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">11.</span>
                Changes to These Terms
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  We reserve the right to update these Terms and Conditions at any time. Changes become effective upon publication on this website.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">12.</span>
                Governing Law
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the Republic of South Africa.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4 pb-8">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">13.</span>
                Contact Information
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-3">
                <div className="pt-2 font-mono text-xs space-y-1 block text-foreground">
                  <p className="font-semibold text-sm font-sans text-foreground">OBX Studio</p>
                  <p>Johannesburg, South Africa</p>
                  <p>Email: <a href="mailto:hello@obxstudio.co.za" className="underline hover:text-accent transition-colors">hello@obxstudio.co.za</a></p>
                  <p>Website: <a href="https://obxstudio.co.za" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">www.obxstudio.co.za</a></p>
                  <p className="pt-4 font-sans text-muted-foreground text-sm">
                    If you have any questions regarding these Terms and Conditions, please contact us using the details above.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  )
}
