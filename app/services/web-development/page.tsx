import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealWords } from "@/components/anim/reveal";

export const metadata: Metadata = {
  title: "Expert Web Development Services for Custom Websites",
  description: "We develop high-performing custom websites that are visually appealing and user friendly. Let us create a website that helps you achieve your business goals.",
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
              Building a strong online presence matters more than ever. We help you create a website that not only looks stunning but functions flawlessly. By focusing on your exact business goals, we deliver user friendly solutions that drive real results. As an expert website designer and development team, we understand what it takes to stand out in a crowded market.
            </p>
          </Reveal>

          <div className="max-w-4xl text-lg leading-relaxed text-muted-foreground font-sans">
            <Reveal delay={0.1}>
              <div className="mb-16">
                <p className="mb-6">
                  Every single web page we build focuses on clarity and speed. We want your potential customer to easily find what they need. When a visitor lands on your site, they form an opinion in seconds. If the site is slow or confusing, they will leave. That is why we build high performing websites. They load quickly, guide the user smoothly, and highlight your product or service effectively.
                </p>
                <p className="mb-6">
                  We know that attempting to create a website on your own can be extremely time consuming. You have a business to run. Learning code, managing a reliable web host, and fixing broken design elements takes your focus away from your real work. We take that burden off your shoulders. We manage the technical details so you can save time.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mb-16">
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
                  Mobile Experiences and Engagement
                </h2>
                <p className="mb-6">
                  Today, most people browse the internet on their phones. Your website must work perfectly on mobile devices. A site that looks great on a large screen but breaks on a phone will hurt your brand. We test every layout to ensure a flawless experience across all screens. This approach boosts user engagement and keeps visitors reading your content, whether they look at your main services or read your latest blog posts.
                </p>
                <p className="mb-6">
                  A visually appealing design grabs attention, but smooth user interaction keeps people on the site. We carefully map out the entire user journey. From the moment someone arrives until they contact you or make a purchase, the path should feel natural and effortless. We use clear buttons, logical menus, and smart layouts. This thoughtful structure turns casual visitors into loyal clients.
                </p>
                <p className="mb-6">
                  Our development process starts with your core business goals. We do not just write code; we solve problems. Do you need to capture more leads? Do you want to sell products online? Do you need a system that updates data in real time? We listen to your needs and build the right tools. We deliver high quality results that match your vision.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mb-16">
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
                  Our Working Process Explained
                </h2>
                <p className="mb-6">
                  Let us break down exactly how we work together. First, we plan. We discuss your target audience and the core message you want to send. We research your industry and find the best ways to present your brand. Second, we design. We select colors, fonts, and images that reflect your unique identity. Third, we develop. We turn those beautiful design elements into a fast, secure website. Finally, we launch. We help you choose a reliable web host and make sure everything runs smoothly on launch day.
                </p>
                <p className="mb-6">
                  We believe that a user friendly website is the best investment you can make. It works for you around the clock. It answers questions, showcases your work, and collects leads even when you sleep. When you partner with us, you get a dedicated team. We care about your success and work hard to deliver a final product you will truly love.
                </p>
                <p className="mb-6">
                  Let us look deeper into what makes a website truly effective. You might have the absolute best product or service in your industry, but if your website does not reflect that quality, people will hesitate. Trust is crucial online. A modern, high quality website builds instant credibility. It shows that you are professional and that you care about the small details.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mb-16">
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
                  Clean Code and Content Management
                </h2>
                <p className="mb-6">
                  We use clean code to ensure your site remains stable over time. Messy code causes glitches and slows down loading times. Our clean approach also helps search engines understand your site better. When search engines can easily read your web page, you rank higher in search results. Higher rankings mean more traffic, and more traffic naturally leads to more business.
                </p>
                <p className="mb-6">
                  Content also plays a huge role in your online success. Beautiful design elements must support strong words. Whether you share company news, industry insights, or helpful blog posts, your content needs a good home. We build flexible systems that make it easy for you to update your site. You will not need to call a developer every time you want to change a simple sentence or add a new photo. You can manage your content with complete confidence.
                </p>
                <p className="mb-6">
                  We also focus heavily on security. Cyber threats are very real, and a compromised website can severely damage your reputation. We follow strict best practices to protect your site and your users' data. We recommend secure hosting environments and implement strong defenses against common attacks. Peace of mind is just as important as a visually appealing design.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mb-16">
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
                  The User Journey and Advanced Features
                </h2>
                <p className="mb-6">
                  Let us talk about the user journey again. Imagine a potential customer visiting your site for the very first time. They see a clean layout. The text is very easy to read. The images load instantly. They easily navigate to your contact page and send a message. This seamless experience does not happen by accident. We engineer every single step to remove friction and encourage action.
                </p>
                <p className="mb-6">
                  Real time features can also dramatically enhance your site. If your business needs live chat, dynamic inventory updates, or interactive booking systems, we can build them. These advanced tools increase user interaction and make your daily business more efficient. Instead of handling every request manually, your website does the heavy lifting for you.
                </p>
                <p className="mb-6">
                  Working with a professional website designer saves you serious money in the long run. A poorly built site will constantly need fixes and frustrating updates. It might even cost you sales if it crashes during a busy period. We build things right the very first time. Our high performing websites are built to last and scale easily as your business grows.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="mb-16">
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
                  Search Engines, Speed, and Hosting
                </h2>
                <p className="mb-6">
                  Search engine optimization is another critical piece of the puzzle. When we create a website, we build it with search engines in mind from day one. We structure your web page so that search engines can crawl it easily. This means using the right tags, optimizing images, and writing clean code. A high performing site naturally ranks better. We want your potential customer to find you quickly when they search for your product or service online.
                </p>
                <p className="mb-6">
                  Speed is also a major ranking factor today. Nobody likes waiting for a slow page to load. If your site takes too long, users will simply close the tab and go to a competitor. We optimize every single line of code and compress every image to ensure lightning fast load times. We choose the best technologies to build a fast, responsive, and highly capable platform. This speed directly improves user engagement and keeps your audience reading.
                </p>
                <p className="mb-6">
                  Choosing the right web host is just as important as the code itself. A bad web host can cause unexpected downtime and slow performance. We guide you through the process of selecting a reliable hosting provider. We ensure your server can handle traffic spikes, especially during busy seasons or major marketing campaigns. We want your site to remain available in real time, every single day of the year. By combining great design elements, fast code, and a solid web host, we deliver a truly high quality product.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="mb-16">
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
                  Our Dedication to Your Success
                </h2>
                <p className="mb-6">
                  We are extremely proud of the work we do. We love seeing our clients succeed and reach new heights. When you succeed, we succeed. We treat every project with the utmost care and close attention to detail. We do not use generic templates that look exactly like a thousand other sites. We craft custom solutions tailored specifically to you and your goals.
                </p>
                <p className="mb-6">
                  Your website is often the very first impression people have of your business. Make it count. Invest in a high quality platform that clearly showcases your true value. Engage your audience with a visually appealing interface. Guide them with a highly logical user journey. Connect with them through meaningful user interaction. And most importantly, achieve your business goals with a site that works just as hard as you do.
                </p>
                <p className="mb-6">
                  In summary, we are here to greatly simplify the web development process for you. We handle the complex code, the intricate design, and the technical headaches. You get a stunning, user friendly website that directly helps your business grow. We look forward to bringing your grand vision to life.
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
