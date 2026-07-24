import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/anim/reveal";
import { HeroText } from "@/components/services/hero-text";
import { ServiceCards } from "@/components/services/service-cards";
import { CapabilitiesMatrix } from "@/components/services/capabilities-matrix";
import { FeatureMetricsGrid } from "@/components/services/feature-metrics-grid";

export const metadata: Metadata = {
  title: "Web Design & Development Services | OBX Studio",
  description: "OBX Studio provides expert digital design and web development services, creating modern, high-performing websites to grow your business.",
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
                url: "https://obxstudio.co.za/logo.svg"
              },
              image: "https://obxstudio.co.za/logo.svg"
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

      <section className="relative px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1600px] relative z-10">
          <div className="max-w-4xl text-pretty">
            <HeroText />
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-24">
            <Reveal delay={0.1}>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-4">
                What We Do
              </h2>
              <p className="font-sans text-lg leading-relaxed text-muted-foreground mb-12 max-w-2xl">
                We offer a focused set of services designed to take a website from concept to launch, ensuring clarity and performance at every stage.
              </p>
            </Reveal>
            <ServiceCards />
          </div>

          <CapabilitiesMatrix />

          <FeatureMetricsGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-28 md:px-10 md:py-40 bg-card/20 border-t border-border">
        <div className="mx-auto max-w-[1600px] text-center flex flex-col items-center justify-center">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-widest text-foreground mb-6">
              Let's Build Your Website
            </p>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6 max-w-3xl mx-auto">
              Whether you need design, development, or a full website build — we can help you create a digital experience that represents your business properly.
            </h2>
            <p className="mt-4 mb-12 text-lg text-foreground leading-relaxed md:text-xl">
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
