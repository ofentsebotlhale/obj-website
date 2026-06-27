import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealWords } from "@/components/anim/reveal";

export const metadata: Metadata = {
  title: "Services | OBX Studio",
  description: "OBX Studio provides end-to-end digital design and web development services focused on creating modern, high-performing websites for businesses.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Services",
            provider: {
              "@type": "Organization",
              name: "OBX Studio",
              url: "https://obxstudio.co.za",
              logo: {
                "@type": "ImageObject",
                url: "https://obxstudio.co.za/icon.svg"
              },
              image: "https://obxstudio.co.za/icon.svg"
            },
            description: "OBX Studio provides end-to-end digital design and web development services focused on creating modern, high-performing websites for businesses.",
          }),
        }}
      />
      <PageHeader
        index="03 / 05"
        subtitle="What we do"
        title="Services"
      />

      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="max-w-4xl text-pretty">
            <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <RevealWords
                text="OBX Studio provides end-to-end digital design and web development services focused on creating modern, high-performing websites for businesses."
                className="text-foreground"
              />
            </h2>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">

          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
              What We Do
            </h2>
            <p className="font-sans text-lg leading-relaxed text-muted-foreground mb-12">
              We offer a focused set of services designed to take a website from concept to launch.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-card/40 border border-border/50 rounded-xl p-8 transition-colors hover:border-accent/50 hover:bg-accent/5 flex flex-col h-full">
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-4">Web Design</h3>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-8 flex-grow">
                  We design clean, structured, and user-focused websites that communicate clearly and build trust. Every design is tailored to your brand, audience, and business goals.
                </p>
                <Link
                  href="/services/web-design"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent hover:text-foreground transition-colors mt-auto"
                >
                  <span>Explore Design</span>
                  <span>↗</span>
                </Link>
              </div>

              <div className="bg-card/40 border border-border/50 rounded-xl p-8 transition-colors hover:border-accent/50 hover:bg-accent/5 flex flex-col h-full">
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-4">Web Development</h3>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-8 flex-grow">
                  We develop fast, responsive, and scalable websites built for performance and usability. Every build is optimised for speed, responsiveness, and real-world usage.
                </p>
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent hover:text-foreground transition-colors mt-auto"
                >
                  <span>Explore Development</span>
                  <span>↗</span>
                </Link>
              </div>

              <div className="bg-card/40 border border-border/50 rounded-xl p-8 transition-colors hover:border-accent/50 hover:bg-accent/5 flex flex-col h-full">
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-4">Full Website Build</h3>
                <p className="font-sans text-base leading-relaxed text-muted-foreground mb-8 flex-grow">
                  For clients who want a complete solution, we handle both design and development — delivering a fully finished website from initial concept to final launch.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent hover:text-foreground transition-colors mt-auto"
                >
                  <span>Start a Project</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
              Our Approach
            </h2>
            <p className="font-sans text-lg leading-relaxed text-muted-foreground mb-12">
              We follow a structured process to ensure every project is clear, efficient, and aligned with your goals.
            </p>
            <div className="flex flex-col gap-12 mb-20">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-semibold mb-4">1. Strategy</h3>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  We understand your business, audience, and objectives to define the direction of the project.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-semibold mb-4">2. Design</h3>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  We create a visual system and user experience that reflects your brand and guides users effectively. Read more about our <Link href="/services/web-design" className="text-accent underline hover:text-accent/80">web design services</Link>.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-semibold mb-4">3. Development</h3>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  We build the website into a fully functional, responsive, and performance-optimised product. Read more about our <Link href="/services/web-development" className="text-accent underline hover:text-accent/80">web development services</Link>.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-semibold mb-4">4. Launch</h3>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  We deploy and refine the website to ensure it is stable, fast, and ready for users.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 border-y border-border py-16">
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-8">
                  Who We Work With
                </h2>
                <p className="font-sans text-[15px] leading-relaxed text-foreground font-medium mb-4">
                  We work with businesses that value clarity, design quality, and performance.
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    "Professional service firms",
                    "Growing businesses",
                    "Modern brands",
                    "Startups building their digital presence",
                    "Companies upgrading outdated websites"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 font-sans text-[15px] leading-relaxed text-muted-foreground">
                      <span className="text-accent mt-0.5">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-8">
                  Why OBX Studio
                </h2>
                <p className="font-sans text-[15px] md:text-base leading-relaxed text-muted-foreground mb-6">
                  We don't treat websites as just design projects.
                </p>
                <p className="font-sans text-[15px] md:text-base leading-relaxed text-muted-foreground mb-6">
                  We build digital systems that help businesses communicate better, build credibility, and attract clients.
                </p>
                <p className="font-sans text-[15px] md:text-base leading-relaxed text-foreground font-medium mb-4">
                  Every project is focused on:
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    "clarity",
                    "performance",
                    "usability",
                    "long-term scalability"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 font-sans text-[15px] leading-relaxed text-muted-foreground">
                      <span className="text-accent mt-0.5">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-28 md:px-10 md:py-40 bg-card/20 border-t border-border">
        <div className="mx-auto max-w-[1600px] text-center flex flex-col items-center justify-center">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Let's Build Your Website
            </p>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6 max-w-3xl mx-auto">
              Whether you need design, development, or a full website build — we can help you create a digital experience that represents your business properly.
            </h2>
            <p className="mt-4 mb-12 text-lg text-muted-foreground leading-relaxed md:text-xl">
              Contact OBX Studio to get started.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-foreground px-8 font-mono text-[11px] uppercase tracking-widest text-background transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground"
            >
              Contact OBX Studio
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
