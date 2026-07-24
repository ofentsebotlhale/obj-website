import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Reveal, RevealWords } from '@/components/anim/reveal'
import { blogPosts } from '@/lib/blogs'
import { ArrowLeft, Clock, Calendar, Hash } from 'lucide-react'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found | OBX Studio',
    }
  }

  return {
    title: post.seoTitle || `${post.title} | OBX Studio`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    articleBody: `${post.welcomeText}\n\n${post.points.map(p => `${p.title}\n${p.content}`).join('\n\n')}\n\n${post.conclusionText}\n\n${post.closingText}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'OBX Studio Strategy Team'
    },
    publisher: {
      '@type': 'Organization',
      name: 'OBX Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://obxstudio.co.za/logo.svg'
      }
    },
    url: `https://obxstudio.co.za/blog/${post.slug}`
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          
          {/* Back button link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Insights</span>
          </Link>

          {/* Heading intro block */}
          <header className="mt-8 border-b border-border/80 pb-12">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-[#a3a3a3] mb-4">
              <span className="text-foreground font-semibold">{post.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {post.readingTime}
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05] max-w-4xl text-pretty">
              {post.title}
            </h1>
          </header>

          {/* Intro welcome/welcome box */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <p className="font-sans text-lg md:text-xl text-foreground font-medium leading-relaxed italic text-pretty pl-4 border-l-2 border-accent/80">
                {post.welcomeText}
              </p>

              {/* Points checklist section */}
              <div className="mt-12 space-y-12 md:space-y-16">
                {post.points.map((point) => (
                  <div key={point.num} className="space-y-3 scroll-mt-24">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground flex items-baseline gap-3">
                      <span className="font-mono text-xs text-foreground font-semibold">{point.num}</span>
                      {point.title}
                    </h2>
                    <p className="pl-7 text-sm md:text-base leading-relaxed text-foreground">
                      {point.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Conclusion and parting words */}
              <div className="mt-16 border-t border-border/60 pt-10 space-y-6">
                <p className="font-sans text-sm md:text-base leading-relaxed text-foreground font-medium">
                  {post.conclusionText}
                </p>
                <p className="font-sans text-sm md:text-base leading-relaxed text-foreground pt-4 border-t border-border/20">
                  {post.closingText}
                </p>

                <div className="mt-12 bg-foreground/5 p-6 rounded-md border border-foreground/20">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold mb-4">Need help with your website?</h3>
                  <p className="font-sans text-sm md:text-base leading-relaxed text-foreground mb-4">
                    OBX Studio provides professional digital solutions tailored to your business. We build custom websites designed for performance and clarity.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/services/web-design"
                      className="inline-flex h-10 items-center justify-center rounded-full border border-foreground/30 px-5 font-sans text-xs font-medium uppercase tracking-widest text-foreground transition-all hover:bg-muted"
                    >
                      Web Design Services
                    </Link>
                    <Link
                      href="/services/web-development"
                      className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 font-sans text-xs font-medium uppercase tracking-widest text-background transition-all hover:scale-105 active:scale-95"
                    >
                      Web Development Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar quick takeaways */}
            <div className="lg:col-span-4 lg:pl-10">
              <div className="sticky top-28 space-y-8 bg-card/20 border border-border/60 rounded-md p-6">
                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#a3a3a3] mb-4 flex items-center gap-2">
                    <Hash className="h-3 w-3 text-foreground" /> Article Summary
                  </h3>
                  <p className="font-sans text-xs text-foreground leading-relaxed">
                    A comprehensive inspection Checklist highlighting conversion killers on consumer-facing websites with suggestions on building immediate stakeholder trust.
                  </p>
                </div>
                
                <div className="border-t border-border/40 pt-6">
                  <h4 className="font-sans text-xs font-semibold text-foreground mb-3">Key Solutions</h4>
                  <ul className="space-y-2 font-mono text-[10px] uppercase tracking-widest text-foreground">
                    <li>✓ Prioritize Core Web Vitals</li>
                    <li>✓ Modernize UI Design Standards</li>
                    <li>✓ Optimise Responsive Performance</li>
                    <li>✓ Direct user CTA Funneling</li>
                  </ul>
                </div>

                <div className="border-t border-border/40 pt-6">
                  <span className="font-mono text-[9px] text-[#737373] uppercase tracking-widest block">Author</span>
                  <span className="font-sans text-xs font-semibold text-foreground block mt-1">OBX Studio Strategy Team</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </article>
    </>
  )
}
