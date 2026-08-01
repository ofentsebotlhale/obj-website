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
        title="Our Work"
      />

      {/* Hero Intro */}
      <section className="px-[5vw] pb-20 md:px-[8vw] md:pb-[10vh]">
        <div className="mx-auto max-w-[1920px]">
          <div className="max-w-4xl text-pretty">
            <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <RevealWords
                text="A selection of websites and digital experiences designed to help businesses build credibility and attract clients."
                className="text-foreground"
              />
            </h2>
          </div>
        </div>
      </section>

      <section className="px-[5vw] pb-[10vh] md:px-[8vw] mt-16">
        <div className="mx-auto max-w-[1920px]">
          <AsymmetricalProjectList items={projects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[5vw] py-[160px] md:px-[8vw] md:py-20">
        <div className="mx-auto max-w-[1920px] text-center flex flex-col items-center justify-center">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-widest text-foreground mb-6">
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
