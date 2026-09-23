export interface Project {
  slug: string
  title: string
  kicker?: string
  tagline?: string
  category: string // Industry
  year: string
  services: string[]
  image: string
  images?: string[]
  overview: string
  problem: string
  solution: string
  link: string
  badge?: string
}

export const projects: Project[] = [
  {
    slug: 'utopia',
    title: 'Utopia',
    kicker: 'UTOPIA',
    tagline: 'Where taste meets meaning.',
    category: 'Branding & Editorial',
    year: '2026',
    services: ['Brand Identity', 'Editorial Design', 'Tactile Packaging'],
    image: '/work/utopia.jpg',
    images: ['/work/utopia.jpg'],
    overview: 'An organic brand and editorial identity system crafted for an artisan culinary collective, marrying sustainable ethos with tactile typography.',
    problem: 'Sustainable luxury brands often lack distinct visual weight and struggle to communicate premium quality without resorting to craft clichés.',
    solution: 'We developed a stark, high-contrast visual language blending botanical motifs, editorial publishing, and tactile packaging materials.',
    link: 'https://utopia.co.za'
  },
  {
    slug: 'aurbse',
    title: 'Aurbse',
    kicker: 'AURBSE',
    tagline: 'A living instrument for reading territory.',
    category: 'Digital Platform',
    year: '2026',
    services: ['Interactive Design', 'Information Architecture', 'Cartography'],
    image: '/work/aurbse.jpg',
    images: ['/work/aurbse.jpg'],
    overview: 'A digital research and cartographic platform for an urbanism agency, turning dense territorial data into an intuitive exploratory tool.',
    problem: 'Public planning and territorial datasets are traditionally inaccessible, siloed, and unintuitive for citizens and policy makers alike.',
    solution: 'We engineered a living digital platform with multi-layered data visualization, responsive mapping, and clean editorial pacing.',
    link: 'https://aurbse.co.za'
  },
  {
    slug: 'in-cognita',
    title: 'In_Cognita',
    kicker: 'IN_COGNITA',
    tagline: 'Seize the unexpected: the invisible, made visible.',
    category: 'Creative Technology',
    year: '2026',
    services: ['Creative Direction', '3D WebGL Interaction', 'Spatial Interface'],
    image: '/work/in-cognita.jpg',
    images: ['/work/in-cognita.jpg'],
    overview: 'An immersive digital experience exploring cognitive science and creative serendipity through fluid procedural generative interfaces.',
    problem: 'Digital design interfaces rarely evoke the subconscious tactile sensation of genuine artistic discovery.',
    solution: 'We designed a spatial web experience pairing fluid 3D simulations with high-performance real-time interactions.',
    link: 'https://incognita.co.za'
  },
  {
    slug: 'lgm',
    title: 'LGM',
    kicker: 'LGM',
    tagline: 'Swiss clarity for French engineering.',
    category: 'Industrial Engineering',
    year: '2026',
    services: ['Brand Architecture', 'Design System', 'Digital Flagship'],
    image: '/work/lgm.jpg',
    images: ['/work/lgm.jpg'],
    overview: 'A rigorous rebranding and digital presence for an advanced precision engineering and industrial systems consultancy.',
    problem: 'Complex mechanical engineering firms frequently suffer from outdated, fragmented brand identities that fail to reflect their cutting-edge technical precision.',
    solution: 'We introduced Swiss modernist typography, functional grid systems, and a clean monochrome aesthetic across all physical and digital touchpoints.',
    link: 'https://lgm.co.za'
  },
  {
    slug: 'haptify',
    title: 'Haptify',
    kicker: 'HAPTIFY',
    tagline: 'Branding the forgotten sense.',
    category: 'Sensory Hardware & Tech',
    year: '2026',
    services: ['Brand Identity', 'Product Positioning', 'Interactive Web'],
    image: '/work/haptify.jpg',
    images: ['/work/haptify.jpg'],
    overview: 'Brand identity, hardware design language, and launch website for a pioneer in tactile spatial feedback and next-generation haptics.',
    problem: 'Sensory feedback technologies are notoriously abstract to demonstrate on flat digital screens.',
    solution: 'We crafted an electrifying visual identity around vibrational harmonic resonance, using dynamic motion and high-contrast color accents to evoke physical sensation.',
    link: 'https://haptify.co.za'
  },
  {
    slug: 'obx-fash',
    title: 'OBX Fash',
    kicker: 'OBX FASH',
    tagline: 'High-contrast editorial streetwear.',
    category: 'Fashion & E-Commerce',
    year: '2026',
    badge: 'Concept project',
    services: ['Art Direction', 'UI/UX Design', 'Headless Commerce'],
    image: '/work/obx-fash-1.avif',
    images: ['/work/obx-fash-1.avif', '/work/obx-fash-2.avif'],
    overview: 'An editorial e-commerce concept for an independent streetwear label, pairing high-contrast visual storytelling with seamless digital shopping.',
    problem: 'Independent streetwear labels often face rigid e-commerce templates that feel generic, sluggish, and visually disconnected from the tactile quality and culture of the brand.',
    solution: 'We designed a stark, high-contrast canvas with seamless transitions and dynamic image scaling. The build integrates a headless commerce backend, prioritizing performance and tactile responsiveness across all devices.',
    link: 'https://obxfash.netlify.app'
  },
  {
    slug: 'ob-associates',
    title: 'OB and associates',
    kicker: 'OB & ASSOCIATES',
    tagline: 'High-trust corporate presence.',
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
