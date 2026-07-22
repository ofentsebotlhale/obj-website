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
        index={`01 / 0${projects.length}`}
        subtitle="Selected Projects"
        title="Our Work"
      />

      {/* Hero Intro */}
      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1600px]">
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

      <section className="px-5 pb-28 md:px-10 mt-16">
        <div className="mx-auto max-w-[1600px]">
          <AsymmetricalProjectList items={projects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1600px] text-center flex flex-col items-center justify-center">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-widest text-foreground mb-6">
              Have a project in mind?
            </p>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-7xl mb-12 max-w-3xl mx-auto">
              Let&apos;s build a website that reflects your business properly.
            </h2>
            <a
              href="mailto:hello@obxstudio.co.za"
              className="inline-flex h-14 items-center justify-center rounded-full bg-foreground px-8 font-mono text-[11px] uppercase tracking-widest text-background transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground"
            >
              Start a Project
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
