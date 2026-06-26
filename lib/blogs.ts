export interface BlogPoint {
  num: string
  title: string
  content: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  category: string
  welcomeText: string
  points: BlogPoint[]
  conclusionText: string
  closingText: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: '10-signs-your-business-website-is-losing-clients',
    title: '10 Signs Your Business Website Is Losing Clients',
    excerpt: 'Your website is often the first impression potential clients get. Is it doing its job well, or is it driving valuable opportunities away?',
    date: 'June 18, 2026',
    readingTime: '5 min read',
    category: 'Website Strategy',
    welcomeText: 'Welcome! If you’ve ever wondered whether your business website is truly pulling its weight, you’re not alone. Your website is often the first impression potential clients get, and if it’s not doing its job well, you might be losing valuable opportunities without even realizing it. Today, we’re diving into the telltale signs that your website could be driving clients away—and what you can do about it.',
    points: [
      {
        num: '01',
        title: 'Slow Loading Times',
        content: 'Nothing tests a visitor’s patience quite like a slow website. If your pages take more than a few seconds to load, users are likely clicking away before they even see what you offer. Speed matters—big time.'
      },
      {
        num: '02',
        title: 'Outdated Design',
        content: 'A website that looks stuck in the past can make your business feel out of touch. Modern, clean, and mobile-friendly design isn’t just about aesthetics; it builds trust and shows you care about user experience.'
      },
      {
        num: '03',
        title: 'Poor Mobile Experience',
        content: 'With more than half of web traffic coming from mobile devices, a site that’s hard to navigate on a phone or tablet is a major red flag. If your mobile visitors struggle to find information or interact with your site, you’re losing clients right there.'
      },
      {
        num: '04',
        title: 'Confusing Navigation',
        content: 'If visitors can’t easily find what they’re looking for, they won’t stick around. Clear menus, intuitive layout, and logical flow are essential to guide users smoothly through your site.'
      },
      {
        num: '05',
        title: 'Lack of Clear Calls to Action',
        content: 'Your website should gently lead visitors toward the next step—whether it’s contacting you, making a purchase, or signing up for a newsletter. If calls to action are missing or buried, clients won’t know what to do next.'
      },
      {
        num: '06',
        title: 'Outdated or Inaccurate Content',
        content: 'Information that’s old or wrong can seriously damage your credibility. Regularly updating your content shows clients you’re active, reliable, and attentive to detail.'
      },
      {
        num: '07',
        title: 'No Social Proof or Testimonials',
        content: 'People trust people. If your website lacks customer reviews, testimonials, or case studies, visitors might hesitate to engage. Social proof builds confidence and can be the nudge someone needs to become a client.'
      },
      {
        num: '08',
        title: 'Broken Links and Errors',
        content: 'Nothing screams “neglect” like links that lead nowhere or error pages. These glitches interrupt user experience and make your business appear careless.'
      },
      {
        num: '09',
        title: 'Complicated Contact Options',
        content: "If it’s hard to get in touch—whether contact forms are confusing, phone numbers are missing, or response times are slow—clients will look elsewhere. Make connecting with you as effortless as possible."
      },
      {
        num: '10',
        title: 'Ignoring SEO Basics',
        content: 'If your website isn’t optimized for search engines, potential clients might never find you. Good SEO practices increase your visibility, driving qualified traffic straight to your door.'
      }
    ],
    conclusionText: 'Recognizing these signs is the first step toward turning things around. A website that’s fast, clear, up-to-date, and user-friendly can become your strongest client magnet. Keep these points in mind as you review your site, and don’t hesitate to make improvements that put your visitors—and potential clients—first.',
    closingText: 'Thanks for reading! Next time, we’ll explore simple ways to boost your website’s SEO without overwhelming technical jargon. Stay tuned and keep building that digital presence with confidence.'
  },
  {
    slug: 'web-design-johannesburg-what-businesses-should-look-for',
    title: 'Web Design Johannesburg: What Businesses Should Look For',
    excerpt: 'Planning to scale in South Africa’s economic hub? Discover the vital pillars to evaluate when choosing a local Johannesburg web design partner.',
    date: 'June 19, 2026',
    readingTime: '5 min read',
    category: 'Local Strategy',
    welcomeText: 'When selecting web design services in Johannesburg, businesses should focus on several key factors to ensure their website effectively supports growth and customer engagement. In a competitive market, a website isn’t just a digital brochure—it’s the engine of your brand.',
    points: [
      {
        num: '01',
        title: 'Local Market Understanding',
        content: 'Choose designers who understand Johannesburg’s unique market dynamics, culture, and consumer behavior for tailored website strategies.'
      },
      {
        num: '02',
        title: 'Responsive and Mobile-Friendly Design',
        content: 'With high mobile usage, ensure the website looks great and functions well on all devices.'
      },
      {
        num: '03',
        title: 'User Experience (UX)',
        content: 'Prioritize intuitive navigation, fast loading times, and clear calls to action to enhance visitor engagement and conversions.'
      },
      {
        num: '04',
        title: 'SEO Expertise',
        content: 'A website optimized for search engines will help your business rank higher and attract more local traffic.'
      },
      {
        num: '05',
        title: 'Portfolio and References',
        content: 'Review previous work and client testimonials to gauge the quality and reliability of the design agency.'
      },
      {
        num: '06',
        title: 'Customization and Scalability',
        content: 'The design should be flexible to grow with your business, allowing easy updates and feature additions.'
      },
      {
        num: '07',
        title: 'Integration Capabilities',
        content: 'Make sure the website can integrate smoothly with other tools like payment systems, social media, and CRM platforms.'
      },
      {
        num: '08',
        title: 'Support and Maintenance',
        content: 'Ongoing support is crucial for fixing issues, updating content, and keeping the site secure.'
      },
      {
        num: '09',
        title: 'Clear Pricing and Timelines',
        content: 'Transparent costs and realistic project timelines avoid surprises and ensure smooth collaboration.'
      },
      {
        num: '10',
        title: 'Communication and Collaboration',
        content: 'Effective communication channels and collaborative processes help align the website with your business goals.'
      }
    ],
    conclusionText: 'By considering these factors, Johannesburg businesses can select web design services that create a strong online presence, engage customers, and drive growth.',
    closingText: 'With a highly optimized and beautifully crafted online home, your brand can rise above the noise in Gauteng and beyond. Partner with the right digital team and take your business to the next stage.'
  },
  {
    slug: 'how-much-does-a-website-cost-in-south-africa',
    title: 'How Much Does a Website Cost in South Africa?',
    excerpt: 'Planning your digital budget? Break down typical price points, recurring server/domain fees, and core factors governing web development costs in SA.',
    date: 'June 19, 2026',
    readingTime: '6 min read',
    category: 'Digital Investment',
    welcomeText: 'If you’re a business owner or entrepreneur in South Africa considering building a website, one of the first questions you probably have is: How much will it cost? The answer isn’t one-size-fits-all, as website costs can vary widely depending on several factors. Let’s break down the typical price ranges to help you plan your budget.',
    points: [
      {
        num: '01',
        title: 'Project Complexity',
        content: 'Is it a simple informational site or a custom solution? The level of complexity is the primary driver of development time and strategic planning.'
      },
      {
        num: '02',
        title: 'Custom Design vs. Templates',
        content: 'Using a generic template is cost-effective but limits your brand representation. Bespoke, tailored UI/UX design fits your business objectives perfectly but requires a larger initial investment.'
      },
      {
        num: '03',
        title: 'Interactive Functionality',
        content: 'Special features like real-time booking engines, client login portals, robust payment gateways, and custom database collections increase the scope and fee structure.'
      },
      {
        num: '04',
        title: 'Basic Website Tier (ZAR 5,000 – ZAR 15,000)',
        content: 'Usually best for small businesses or personal brands. These sites have a few pages (home, about, contact) with standard layout components.'
      },
      {
        num: '05',
        title: 'Standard Business Website (ZAR 15,000 – ZAR 50,000)',
        content: 'Features fully custom UI/UX, responsive layouts, content integration, and optimization for lead generation and brand authority.'
      },
      {
        num: '06',
        title: 'E-commerce Platforms (ZAR 30,000 – ZAR 100,000+)',
        content: 'Selling physically or digitally requires payment gateway integrations (like PayFast or Peach Payments), dynamic inventory systems, and transactional mailing.'
      },
      {
        num: '07',
        title: 'Advanced Web Applications (exceeding ZAR 100,000)',
        content: 'Custom interactive apps, SaaS interfaces, and complex enterprise automation platforms that require extensive database logic and highly tailored security frameworks.'
      },
      {
        num: '08',
        title: 'Domain and Server Hosting Fees',
        content: 'Ongoing infrastructure costs: expect ZAR 150 to ZAR 500 per year for domain registration (.co.za/.com) and ZAR 50 to ZAR 2,000+ per month for reliable SSD hosting.'
      },
      {
        num: '09',
        title: 'Continuous Support & Upkeep',
        content: 'Regular bug fixes, CMS updates, plugin security patches, and periodic content changes usually carry modest monthly retainer or hourly maintenance fees.'
      },
      {
        num: '10',
        title: 'Developer Partner Selection',
        content: 'Choosing between a DIY builder, a solo freelancer, or an established design agency. Your selection directly impacts design fidelity, code performance, and future scalability.'
      }
    ],
    conclusionText: 'Building a website is an important investment for your business or personal brand. Understanding the costs upfront will help you make informed decisions and choose the right solution for your budget and goals.',
    closingText: 'Whether you opt for a simple site or a full-scale online store, there are options available in South Africa to fit your needs. Chat with a local developer to gain precise quotes for your custom roadmap.'
  }
]
