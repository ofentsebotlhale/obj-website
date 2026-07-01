import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealWords } from "@/components/anim/reveal";

export const metadata: Metadata = {
  title: "Expert Web Development Services for Custom Websites",
  description: "We develop high-performing custom websites that are visually appealing and user-friendly. Let us build a solution to achieve your business goals.",
  alternates: {
    canonical: "/services/web-development",
  },
};

export default function WebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Development",
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
            description: "OBX Studio develops fast, responsive, and scalable websites built for performance, usability, and long-term growth.",
            serviceType: "Web Development"
          }),
        }}
      />
      <PageHeader
        index="04 / 05"
        subtitle="Services"
        title="Development"
      />

      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="max-w-4xl text-pretty">
            <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <RevealWords
                text="We build high performing websites that connect your product or service with your ideal audience."
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
              We help you create a custom website that not only looks stunning but functions flawlessly. As expert web developers, we focus on your exact business goals to deliver solutions that drive real results.
            </p>
          </Reveal>

          <div className="max-w-4xl text-lg leading-relaxed text-muted-foreground font-sans">
            <Reveal delay={0.1}>
              <div className="mb-16">
                <p className="mb-6">
                  Every page we build focuses on clarity and speed. When a visitor lands on your site, they form an opinion in seconds. If the site is slow or confusing, they will leave. That is why we build high-performing websites. They load quickly, guide the user smoothly, and highlight your product or service effectively. For the visual aspects of this process, see our <Link href="/services/web-design" className="text-accent underline hover:text-accent/80">web design</Link> service.
                </p>
                <p className="mb-6">
                  We manage the technical details so you can save time and focus on your business. <Link href="/contact" className="text-accent underline hover:text-accent/80">Get in touch</Link> to start your project.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mb-16">
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
                  Technical Execution
                </h2>
                <p className="mb-6">
                  We use clean code to ensure your site remains stable over time. Messy code causes glitches and slows down loading times.
                </p>
                <p className="mb-6">
                  We build flexible systems that make it easy for you to update your site. You will not need to call a developer every time you want to change a simple sentence or add a new photo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-28 md:px-10 md:py-40 bg-card/20 border-t border-border">
        <div className="mx-auto max-w-[1600px] text-center flex flex-col items-center justify-center">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Ready to Build Your Website?
            </p>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-12 max-w-3xl mx-auto">
              Let's turn your design into a fully functional website built for performance, scalability, and growth.
            </h2>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-foreground px-8 font-mono text-[11px] uppercase tracking-widest text-background transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground"
            >
              Start Development
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
