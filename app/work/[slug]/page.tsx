import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealWords } from "@/components/anim/reveal";
import { ParallaxImage } from "@/components/anim/parallax-image";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Case Study | OBX Studio`,
    description: project.overview,
    openGraph: {
      title: `${project.title} | Case Study | OBX Studio`,
      description: project.overview,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div id={`project-page-${project.slug}`} className="min-h-screen bg-background text-foreground pb-24">
      {/* Back to Work Link */}
      <div className="mx-auto max-w-[1600px] px-5 pt-32 md:px-10">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground hover:opacity-70 transition-opacity"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          <span>Back to Work</span>
        </Link>
      </div>

      <PageHeader
        index={project.year}
        title={project.title}
        subtitle={project.category}
      />

      {/* Main Hero Parallax */}
      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-[2rem] bg-card border border-border/50 p-6 md:p-12 lg:p-20">
            <ParallaxImage
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              priority={true}
              className="object-contain drop-shadow-2xl"
              motionClassName="absolute inset-0"
              containerClassName="relative w-full h-full z-0"
              yOffset={["-4%", "4%"]}
            />
          </div>
        </div>
      </section>

      {/* Editorial Breakdown */}
      <section className="px-5 pb-24 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-16">
              {/* Introduction & Services */}
              <div className="space-y-6">
                <Reveal>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground opacity-50 block mb-4">
                    Project Services
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-foreground/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-foreground bg-muted/30"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </Reveal>
                
                <Reveal delay={0.1}>
                  <div className="pt-6 border-t border-border/50">
                    <p className="font-sans text-xl md:text-2xl leading-relaxed text-foreground font-light text-pretty">
                      {project.overview}
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Challenge / Problem */}
              <div className="space-y-4">
                <Reveal>
                  <p className="font-mono text-xs uppercase tracking-widest text-foreground opacity-50">
                    The Challenge
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="font-sans text-base md:text-lg leading-relaxed text-foreground/90">
                    {project.problem}
                  </p>
                </Reveal>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <Reveal>
                  <p className="font-mono text-xs uppercase tracking-widest text-foreground opacity-50">
                    The Solution
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="font-sans text-base md:text-lg leading-relaxed text-foreground/90">
                    {project.solution}
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Right Column (Results card / dynamic info) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2} className="sticky top-28 bg-card rounded-[2rem] p-8 md:p-10 border border-border">
                <div className="space-y-8">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-foreground opacity-50 mb-6">
                      Results & Metrics
                    </h4>
                    <ul className="flex flex-col gap-6">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex gap-4 items-start text-foreground font-sans text-base md:text-[17px] font-medium leading-relaxed">
                          <span className="text-foreground shrink-0 mt-1">✦</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.link && project.link !== "#" && (
                    <div className="border-t border-border pt-8 mt-8">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex h-14 w-full items-center justify-between rounded-full bg-foreground px-8 font-mono text-[11px] uppercase tracking-widest text-background transition-transform hover:scale-[1.02]"
                      >
                        <span>Visit Live Website</span>
                        <span className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Showcase Images if they exist */}
      {project.images && project.images.length > 0 && (
        <section className="px-5 py-12 md:px-10 border-t border-border/20">
          <div className="mx-auto max-w-[1600px] flex flex-col gap-10">
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground opacity-50">
                Project Gallery
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {project.images.map((img, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] bg-card border border-border/50 p-6 md:p-10">
                    <ParallaxImage
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="object-contain drop-shadow-2xl"
                      motionClassName="absolute inset-0"
                      containerClassName="relative w-full h-full z-0"
                      yOffset={["-4%", "4%"]}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project CTA */}
      <section className="px-5 py-24 md:px-10 border-t border-border/20 mt-16">
        <div className="mx-auto max-w-[1600px] text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground opacity-50 mb-4">
              Next Project
            </p>
            {(() => {
              const currentIndex = projects.findIndex((p) => p.slug === slug);
              const nextIndex = (currentIndex + 1) % projects.length;
              const nextProject = projects[nextIndex];
              return (
                <div className="space-y-8">
                  <Link
                    href={`/work/${nextProject.slug}`}
                    className="group inline-block font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl hover:opacity-80 transition-opacity"
                  >
                    {nextProject.title} <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </Link>
                </div>
              );
            })()}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
