import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/anim/reveal'

export const metadata: Metadata = {
  title: 'Privacy Policy — OBX Studio',
  description: 'Privacy Policy and data protection terms for OBX Studio.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHeader index="00 / 04" subtitle="Legal details" title="Privacy Policy" />
      <section className="px-5 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-3xl border-t border-border pt-12 md:pt-16">
          <div className="space-y-12 md:space-y-16">
            
            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">01</span>
                Introduction
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  Welcome to OBX Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring that your personal information is handled responsibly and securely.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, store, and protect information when you visit our website or contact us regarding our services. In an increasingly connected world, we understand that data privacy is a fundamental concern. We believe in complete transparency about our data practices, so you can feel confident when sharing your information with us.
                </p>
                <p>
                  By using our website, you agree to the practices described in this Privacy Policy.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">02</span>
                Information We Collect
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-foreground mb-2 font-semibold">Information You Provide</h3>
                  <p>We may collect information that you voluntarily provide, including:</p>
                  <ul className="mt-3 space-y-1.5 list-disc list-inside text-muted-foreground pl-1">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company or business name</li>
                    <li>Project details and requirements</li>
                    <li>Any other information submitted through our contact forms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-foreground mb-2 font-semibold">Automatically Collected Information</h3>
                  <p>When you visit our website, certain information may be collected automatically, including:</p>
                  <ul className="mt-3 space-y-1.5 list-disc list-inside text-muted-foreground pl-1">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Pages visited</li>
                    <li>Date and time of visits</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>
                <p className="italic text-xs text-muted-foreground/80 mt-2">
                  This information helps us improve website performance, security, and user experience.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">03</span>
                How We Use Your Information
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                <p>We use collected information to:</p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside text-muted-foreground pl-1 mb-4">
                  <li>Respond to inquiries and project requests</li>
                  <li>Communicate regarding our services</li>
                  <li>Prepare proposals and quotations</li>
                  <li>Improve our website and user experience</li>
                  <li>Monitor website performance and security</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p>We will only use your information for legitimate business purposes.</p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">04</span>
                Cookies and Analytics
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>Our website may use cookies and similar technologies to:</p>
                <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-1">
                  <li>Remember user preferences</li>
                  <li>Analyze website traffic</li>
                  <li>Improve website functionality</li>
                  <li>Measure website performance</li>
                </ul>
                <p>
                  You may choose to disable cookies through your browser settings. However, some website features may not function correctly without them.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">05</span>
                Third-Party Services
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                <p>We may use trusted third-party service providers to operate our website and business activities, including:</p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside text-muted-foreground pl-1">
                  <li>Website hosting providers</li>
                  <li>Analytics providers</li>
                  <li>Email service providers</li>
                  <li>Form submission services</li>
                </ul>
                <p className="mt-4">
                  These providers may process information on our behalf only to the extent necessary to perform their services.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">06</span>
                Data Sharing
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                <p>We do not sell, rent, or trade your personal information to third parties.</p>
                <p className="mt-3">We may disclose information only when:</p>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-muted-foreground pl-1">
                  <li>Required by law</li>
                  <li>Necessary to protect our legal rights</li>
                  <li>Required to respond to lawful requests from authorities</li>
                </ul>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">07</span>
                Data Security
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  We take reasonable technical and organizational measures to protect personal information against:
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-muted-foreground pl-1">
                  <li>Unauthorized access</li>
                  <li>Loss or theft</li>
                  <li>Misuse</li>
                  <li>Alteration</li>
                  <li>Disclosure</li>
                </ul>
                <p>
                  While we strive to protect your information, no internet transmission or storage system can be guaranteed to be completely secure.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">08</span>
                Data Retention
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                <p>We retain personal information only for as long as necessary to:</p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside text-muted-foreground pl-1 mb-4">
                  <li>Fulfill the purposes outlined in this Privacy Policy</li>
                  <li>Maintain business records</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p>Information that is no longer required will be securely deleted or anonymized.</p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">09</span>
                Your Rights
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                <p>
                  Depending on applicable laws, including the South African Protection of Personal Information Act (POPIA), you may have the right to:
                </p>
                <ul className="mt-3 space-y-1.5 list-disc list-inside text-muted-foreground pl-1">
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to certain processing activities</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the details below.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">10</span>
                International Data Transfers
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                <p>
                  Some service providers may store or process information outside South Africa. Where such transfers occur, reasonable safeguards will be implemented to protect your information.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">11</span>
                Children&apos;s Privacy
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-4">
                <p>
                  Our services are intended for businesses and individuals over the age of 18. We do not knowingly collect personal information from children.
                </p>
                <p>
                  If we become aware that personal information from a child has been collected unintentionally, we will take reasonable steps to remove it.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">12</span>
                Changes to This Policy
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
                <p className="mt-3">
                  We encourage users to review this policy periodically.
                </p>
              </div>
            </Reveal>

            <Reveal className="space-y-4 pb-8">
              <h2 className="text-xl font-medium tracking-tight text-foreground flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">13</span>
                Contact Information
              </h2>
              <div className="pl-6 text-sm md:text-base leading-relaxed text-muted-foreground space-y-3">
                <p>If you have questions about this Privacy Policy or how your information is handled, please contact:</p>
                <div className="pt-2 font-mono text-xs space-y-1 block text-foreground">
                  <p className="font-semibold text-sm font-sans text-foreground">OBX Studio</p>
                  <p>Email: <a href="mailto:hello@obxstudio.co.za" className="underline hover:text-foreground transition-colors">hello@obxstudio.co.za</a></p>
                  <p>Website: <a href="https://obxstudio.co.za" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">obxstudio.co.za</a></p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  )
}
