export interface Project {
  slug: string
  title: string
  category: string // Industry
  year: string
  services: string[]
  image: string
  images?: string[]
  overview: string
  problem: string
  solution: string
  link: string
}

export const projects: Project[] = [
  {
    slug: 'obx-fash',
    title: 'OBX Fash',
    category: 'Fashion & E-Commerce',
    year: '2026',
    services: ['Art Direction', 'UI/UX Design', 'Headless Commerce'],
    image: '/work/obx-fash-1.avif',
    images: ['/work/obx-fash-1.avif', '/work/obx-fash-2.avif'],
    overview: 'An editorial e-commerce experience for an independent streetwear label.',
    problem: 'The previous experience felt slow, clunky and visually disconnected from the quality and character of the brand.',
    solution: 'We designed a stark, high-contrast canvas with seamless transitions and dynamic image scaling. The build integrates a headless commerce backend, prioritizing performance and tactile responsiveness across all devices.',
    link: 'https://obxfash.netlify.app'
  },
  {
    slug: 'ob-associates',
    title: 'OB and associates',
    category: 'Corporate Consulting',
    year: '2026',
    services: ['Strategic Consulting', 'Web Application', 'UX Design'],
    image: '/work/ob-law-1.avif',
    overview: 'A high-trust digital presence for a corporate advisory practice.',
    problem: 'Their existing website was difficult to navigate and did not reflect the credibility or authority of the firm.',
    solution: 'We built a modern, structured website with a clear service hierarchy. The design relies on semantic layouts and performance optimizations to deliver a fast, authoritative experience.',
    link: 'https://obassociates.netlify.app'
  }
]
