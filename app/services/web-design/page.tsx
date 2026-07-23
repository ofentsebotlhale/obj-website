import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealWords } from "@/components/anim/reveal";

export const metadata: Metadata = {
  title: "Custom Web Design Services | OBX Studio",
  description: "OBX Studio designs modern, user-focused websites that help businesses communicate clearly, build credibility, and convert visitors into clients.",
  alternates: {
    canonical: "/services/web-design",
  },
};

export default function WebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Design",
            provider: {
              "@type": "Organization",
              name: "OBX Studio",
              url: "https://obxstudio.co.za",
              logo: {
                "@type": "ImageObject",
                url: "https://obxstudio.co.za/logo.jpg"
              },
              image: "https://obxstudio.co.za/logo.jpg"
            },
            description: "OBX Studio designs modern, user-focused websites for businesses that want to communicate clearly, build credibility, and convert visitors into clients.",
            serviceType: "Web Design"
          }),
        }}
      />
      <PageHeader
        index="03 / 05"
        subtitle="Services"
        title="Web Design"
      />

      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="max-w-4xl text-pretty">
            <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <RevealWords
                text="OBX Studio designs modern, user-focused websites for businesses that want to communicate clearly, build credibility, and convert visitors into clients."
                className="text-foreground"
              />
            </h2>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="font-heading text-2xl font-light leading-relaxed tracking-tight text-foreground sm:text-3xl max-w-4xl mb-24">
              We focus on creating clean, structured, and visually refined websites that reflect the quality of your brand while delivering a seamless user experience across all devices.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
              What We Do
            </h2>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              We design custom website experiences tailored to your business goals, audience, and industry. Every design is created from scratch — no templates, no shortcuts.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground font-medium mb-6">
              Our web design services include:
            </p>
            <ul className="flex flex-col gap-4 mb-20">
              {[
                "Website UI/UX design",
                "Information architecture and layout planning",
                "Responsive mobile-first design",
                "Visual branding for web",
                "Landing page design",
                "Design systems and style direction"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 font-sans text-lg text-foreground">
                  <span className="text-foreground mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-12">
              Our Approach
            </h2>
            <div className="flex flex-col gap-12 mb-20">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-semibold mb-4">1. Understanding Your Business</h3>
                <p className="font-sans text-lg leading-relaxed text-foreground">
                  We start by learning your brand, audience, and objectives. This ensures every design decision is intentional and aligned with your goals.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-semibold mb-4">2. Structure & Wireframing</h3>
                <p className="font-sans text-lg leading-relaxed text-foreground">
                  We define the structure of your website, focusing on clarity, content hierarchy, and user flow before any visual design begins.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-semibold mb-4">3. Visual Design</h3>
                <p className="font-sans text-lg leading-relaxed text-foreground">
                  We translate strategy into visual form — combining typography, spacing, colour, and layout to create a modern and professional interface.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-semibold mb-4">4. Responsive Experience</h3>
                <p className="font-sans text-lg leading-relaxed text-foreground">
                  Every design is optimized for desktop, tablet, and mobile to ensure a consistent and intuitive experience across all devices.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
              From Design to a Complete Website
            </h2>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              At OBX Studio, web design is the foundation of a complete digital product.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              Once the design phase is complete, we can extend the project into full development and launch. This means your website moves seamlessly from concept to a fully functional, live product without the need to coordinate separate teams.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-20">
              We handle both design and development to ensure consistency, performance, and a smooth execution from start to finish.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 border-y border-border py-16">
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-8">
                  What You Get
                </h2>
                <ul className="flex flex-col gap-4">
                  {[
                    "Custom website design tailored to your brand",
                    "Mobile-responsive layouts",
                    "Clear user experience structure",
                    "High-fidelity design files ready for development",
                    "Consistent visual system across all pages"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 font-sans text-[15px] leading-relaxed text-foreground">
                      <span className="text-foreground mt-0.5">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-8">
                  Who This Is For
                </h2>
                <p className="font-sans text-[15px] leading-relaxed text-foreground font-medium mb-4">
                  This service is ideal for:
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    "Professional service firms",
                    "Law firms and consulting businesses",
                    "Startups building their first digital presence",
                    "Established businesses needing a redesign",
                    "Brands looking to improve credibility online"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 font-sans text-[15px] leading-relaxed text-foreground">
                      <span className="text-foreground mt-0.5">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
              Why Good Web Design Matters
            </h2>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              Your website is often the first impression people have of your business.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-6">
              Good design builds trust, improves clarity, and helps users understand your value within seconds. Poor design creates friction, confusion, and lost opportunities.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground mb-8">
              At OBX Studio, we design websites that not only look modern but also guide users toward meaningful action. Once the design is finalized, our web development team brings it to life.
            </p>
            <div className="mb-20">
              <Link
                href="/services/web-development"
                className="inline-flex h-11 items-center justify-center rounded-full border border-foreground/30 px-6 font-sans text-xs font-medium uppercase tracking-widest text-foreground transition-all hover:bg-muted"
              >
                Learn about Web Development
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-28 md:px-10 md:py-40 bg-card/20 border-t border-border">
        <div className="mx-auto max-w-[1600px] text-center flex flex-col items-center justify-center">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-widest text-foreground mb-6">
              Ready to Build Your Website?
            </p>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-12 max-w-3xl mx-auto">
              Let&apos;s design and develop a website that reflects your business properly — from first concept to final launch.
            </h2>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-foreground px-8 font-mono text-[11px] uppercase tracking-widest text-background transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground"
            >
              Start Your Project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
