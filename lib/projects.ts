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
  results: string[]
  link: string
}

export const projects: Project[] = [
  {
    slug: 'ob-associates',
    title: 'OB and associates',
    category: 'Corporate Consulting',
    year: '2026',
    services: ['Strategic Consulting', 'Web Application', 'UX Design'],
    image: '/work/ob-law-1.avif',
    overview: 'A sophisticated advisory and custom business consultation digital presence for elite corporate partners.',
    problem: 'Their old website was outdated, difficult to navigate, and did not reflect the high-end credibility and authority of the firm.',
    solution: 'Designed and developed a modern, structured website with a clear service hierarchy, semantic layouts, and zero-script loading optimizations for flawless performance.',
    results: [
      'Improved professionalism and stronger brand perception',
      '+85% Client inquiry response accuracy metrics',
      'Under 100ms first input delay (FID)'
    ],
    link: 'https://obassociates.netlify.app'
  },
  {
    slug: 'obx-fash',
    title: 'OBX Fash',
    category: 'Fashion & E-Commerce',
    year: '2026',
    services: ['Art Direction', 'UI/UX Design', 'Headless Commerce'],
    image: '/work/obx-fash-1.avif',
    images: ['/work/obx-fash-1.avif', '/work/obx-fash-2.avif'],
    overview: 'An immersive digital garment gallery and high-performance collection portal for of-the-moment streetwear.',
    problem: 'The previous e-commerce experience was slow, clunky, and lacked the visual flair needed to represent a high-end streetwear brand effectively.',
    solution: 'Built using a stark, high-contrast canvas with seamless transitions, dynamic image scaling, and continuous performance tuning for physical devices, integrating a headless commerce backend.',
    results: [
      'Better user experience and immersive lookbook navigation',
      'Page speed scores averaging 98/100 globally',
      '+40% Increase in direct pre-order transactions'
    ],
    link: 'https://obxfash.netlify.app'
  }
]
