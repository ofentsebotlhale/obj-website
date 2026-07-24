import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/anim/reveal'
import { blogPosts } from '@/lib/blogs'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insights & Articles | OBX Studio Web Design Blog',
  description: 'Design guides, technical insights, and digital strategies from the experts at OBX Studio to build a high-converting website.',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogListingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'OBX Studio Web Design Blog',
    url: 'https://obxstudio.co.za/blog',
    description: 'Design guides, technical insights, and digital strategies from the experts at OBX Studio to build a high-converting website.',
    publisher: {
      '@type': 'Organization',
      name: 'OBX Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://obxstudio.co.za/logo.svg'
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader index="04 / 05" subtitle="Articles & Ideas" title="Blog" />
      <section className="px-5 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-[1600px] border-t border-border/80 pt-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Left sidebar info or categories teaser */}
            <div className="lg:col-span-4 space-y-6">
              <Reveal>
                <span className="font-mono text-[11px] uppercase tracking-widest text-foreground mr-3">
                  ( Insights Hub )
                </span>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm text-foreground leading-relaxed max-w-sm">
                  We write to make sense of design systems, technology performance, and user strategies that drive measurable growth for digital businesses.
                </p>
              </Reveal>
              <div className="pt-4 border-t border-border/40 max-w-sm">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground block mb-2">Featured Topic</span>
                <span className="rounded-full bg-foreground/5 border border-foreground/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground font-semibold inline-block">
                  Conversion Strategy
                </span>
              </div>
            </div>

            {/* Main blog timeline list */}
            <div className="lg:col-span-8 space-y-12">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative block border border-border/60 hover:border-accent bg-card/10 hover:bg-card/40 rounded-md p-8 md:p-10 transition-all duration-300"
                >
                    <div className="flex flex-col gap-4">
                      {/* Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-foreground">
                        <span className="text-foreground font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-3">
                          <span>{post.date}</span>
                          <span className="text-border">•</span>
                          <span>{post.readingTime}</span>
                        </div>
                      </div>

                      {/* Main Title */}
                      <div className="flex items-start justify-between gap-6 mt-2">
                        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground group-hover:text-foreground transition-colors duration-300">
                          <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                            {post.title}
                          </Link>
                        </h2>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-foreground group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>

                      {/* Excerpt */}
                      <p className="font-sans text-sm md:text-base text-foreground leading-relaxed mt-2 max-w-2xl">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-foreground mt-4 group-hover:translate-x-1.5 transition-transform duration-300">
                        <span>Read Chapter</span>
                        <span>→</span>
                      </div>
                    </div>
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
