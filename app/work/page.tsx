import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { AsymmetricalProjectList } from "@/components/work/asymmetrical-project-list";
import { Reveal, RevealWords } from "@/components/anim/reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Portfolio | OBX Studio Web Design Work",
  description:
    "Selected projects in branding, design, and development by OBX Studio.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "OBX Studio Portfolio Projects",
    description:
      "Selected projects in branding, design, and development by OBX Studio.",
    url: "https://obxstudio.co.za/work",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.overview,
        url: `https://obxstudio.co.za/work#${project.slug}`,
        image: `https://obxstudio.co.za${project.image}`,
        about: project.category,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        index="01 / 04"
        subtitle="Selected Projects"
        title="Our Work"
      />

      {/* Hero Intro */}
      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="max-w-4xl text-pretty">
            <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl mb-8">
              <RevealWords
                text="A selection of websites and digital experiences designed to help businesses build credibility and attract clients."
                className="text-foreground"
              />
            </h2>
            <Reveal delay={0.2}>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
                Welcome to our portfolio. Here you will find a curated collection of our recent web design and development projects. Each project represents a unique collaboration with a client who trusted us to elevate their digital presence. We approach every website as a strategic asset, carefully crafting the user journey to align with specific business goals.
              </p>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-muted-foreground">
                Whether creating a comprehensive corporate platform, a focused landing page, or a dynamic e-commerce experience, our focus remains consistent: delivering high quality, visually appealing, and incredibly fast digital products. Explore the case studies below to see how we combine creative design elements with robust engineering to solve real-world business challenges.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-10 mt-16">
        <div className="mx-auto max-w-[1600px]">
          <AsymmetricalProjectList items={projects} />
        </div>
      </section>

      {/* SEO What We Build Section */}
      <section className="px-5 py-28 md:px-10 md:py-40 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <Reveal>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
                What we build
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
                OBX Studio builds custom websites for professional service firms, growing businesses, and modern brands.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <ul className="flex flex-col gap-6">
                {[
                  "Corporate websites",
                  "Service-based business websites",
                  "Landing pages",
                  "Portfolio websites",
                  "Brand websites"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-foreground font-sans text-lg md:text-xl font-medium">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1600px] text-center flex flex-col items-center justify-center">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Have a project in mind?
            </p>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-7xl mb-12 max-w-3xl mx-auto">
              Let&apos;s build a website that reflects your business properly.
            </h2>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-foreground px-8 font-mono text-[11px] uppercase tracking-widest text-background transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground"
            >
              Start a Project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
