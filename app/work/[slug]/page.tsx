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
    <div id={`project-page-${project.slug}`} className="min-h-screen bg-background text-foreground pb-12">
      <PageHeader
        index={project.year}
        title={project.title}
        subtitle={project.category}
        badge={
          project.slug === "obx-fash" ? (
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
              Concept project
            </span>
          ) : undefined
        }
      />

      {/* Main Hero Parallax */}
      <section className="px-[2vw] md:px-[4vw] pb-16 md:pb-24">
        <div className="mx-auto max-w-[1920px]">
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-muted">
            <ParallaxImage
              src={project.image}
              alt={project.title}
              priority={true}
              className="object-cover"
              motionClassName="absolute inset-0"
              containerClassName="relative w-full h-full z-0"
              yOffset={["-8%", "8%"]}
            />
          </div>
        </div>
      </section>

      {/* Editorial Breakdown */}
      <section className="px-[5vw] pb-24 md:px-[8vw]">
        <div className="mx-auto max-w-[1920px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-y-0 gap-x-4 md:gap-x-12">
            
            {/* Left Column: Services & Links */}
            <div className="lg:col-span-4 space-y-12">
              <Reveal>
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block border-b border-border/40 pb-4">
                    Services
                  </span>
                  <ul className="flex flex-col gap-2 pt-2">
                    {project.services.map((service) => (
                      <li
                        key={service}
                        className="font-sans text-sm md:text-base text-foreground font-medium uppercase tracking-wide"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {project.link && project.link !== "#" && (
                <Reveal delay={0.1}>
                  <div className="space-y-4 border-t border-border/40 pt-8 mt-8">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-foreground transition-opacity hover:opacity-70"
                    >
                      <span className="border-b border-foreground/30 pb-0.5 group-hover/link:border-foreground transition-colors">Visit Live Website</span>
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
                    </a>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 lg:col-start-6 space-y-16">
              <Reveal>
                <p className="font-heading text-2xl sm:text-3xl md:text-4xl leading-[1.3] text-foreground font-medium text-pretty uppercase tracking-tight">
                  {project.overview}
                </p>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8">
                {/* Challenge */}
                <div className="space-y-6">
                  <Reveal>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/40 pb-4">
                      The Challenge
                    </h3>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="font-sans text-sm md:text-base leading-relaxed text-foreground/80">
                      {project.problem}
                    </p>
                  </Reveal>
                </div>

                {/* Solution */}
                <div className="space-y-6">
                  <Reveal>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/40 pb-4">
                      The Solution
                    </h3>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="font-sans text-sm md:text-base leading-relaxed text-foreground/80">
                      {project.solution}
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Additional Showcase Images if they exist */}
      {project.images && project.images.length > 0 && (
        <section className="px-[2vw] py-12 md:px-[4vw]">
          <div className="mx-auto max-w-[1920px] flex flex-col gap-12 md:gap-24">
            {project.images.map((img, i) => (
              <Reveal key={i} delay={0.1}>
                <div className={`relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-muted ${i % 2 !== 0 ? 'md:w-[80%] md:ml-auto' : 'md:w-[90%]'}`}>
                  <ParallaxImage
                    src={img}
                    alt={`${project.title} interface detail ${i + 1}`}
                    className="object-cover"
                    motionClassName="absolute inset-0"
                    containerClassName="relative w-full h-full z-0"
                    yOffset={["-6%", "6%"]}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Next Project CTA */}
      <section className="px-[5vw] py-24 md:px-[8vw] mt-12 bg-foreground text-background">
        <div className="mx-auto max-w-[1920px] text-center flex flex-col items-center justify-center">
          <Reveal>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-background/50 mb-8 block">
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
                    className="group inline-block font-heading text-5xl font-medium tracking-tight text-background sm:text-6xl md:text-7xl lg:text-8xl hover:opacity-80 transition-opacity uppercase"
                  >
                    {nextProject.title}
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

