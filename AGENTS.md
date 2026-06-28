# OBX Studio - Project Architecture & Context

This file provides context about the current state and structure of the OBX Studio website. Read this to understand the layout before making modifications.

## Architecture: Single-Page Application (SPA)
This project was recently converted from a multi-page site into a **single-page landing page** architecture (`app/page.tsx`). 

**CRITICAL RULE:** Do NOT recreate separate pages for Studio, Work, Services, or Contact. They must remain as consolidated sections on the index page (`app/page.tsx`).

### Section Breakdown (`app/page.tsx`)
The single page is divided into the following sequential sections, each with an HTML `id` used for anchor navigation:

1. **`#hero`**
   - Contains: `<Hero />`, `<Marquee />`, `<Intro />`, `<WhatWeBuild />`.
   - Purpose: The initial landing view and high-level introduction.

2. **`#studio` (Who We Are)**
   - Contains: Narrative copy, `<StudioStatement />`, Image Gallery, horizontal `<Process />` slider, and Founder Bio.
   - Purpose: Replaces the former `/studio` about page.

3. **`#work` (Selected Projects)**
   - Contains: `<StickyProjectList />` (highlights) and `<AsymmetricalProjectList />` (full portfolio).
   - Purpose: Replaces the former `/work` page.

4. **`#services` (What We Do)**
   - Contains: Service offering cards (Design, Development, Full Build), `<ProcessAccordion />` (approach), and target audience lists.
   - Purpose: Replaces the former `/services` page.

5. **`#blog` (Articles & Ideas)**
   - Contains: Insights Hub header and a list mapping over `blogPosts`.
   - Purpose: Replaces the former `/blog` index page.
   - *Note:* Individual blog posts are still their own separate routes (`/app/blog/[slug]/page.tsx`).

6. **`#contact` (Start a Project)**
   - Contains: `<ContactForm />` and contact details (email, location, hours).
   - Purpose: Replaces the former `/contact` page.

## Navigation & Routing
- Global navigation (`<SiteNav />` and `<SiteFooter />`) uses anchor links (e.g., `href="#work"`, `href="#contact"`).
- Smooth scrolling is enabled globally via `scroll-behavior: smooth` in `globals.css`.

## Animation & Styling
- **Framer Motion:** Used heavily for transitions and scroll-driven animations (`useScroll`, `useTransform`).
- **Scroll-Driven Typewriter:** The `<RevealWords />` component in `components/anim/reveal.tsx` implements a custom, bi-directional scroll-driven typewriter/fade/landing effect using native DOM APIs (`requestAnimationFrame`) for performance without external libraries.
- **Three.js / WebGL:** Currently REMOVED to prioritize standard lightweight web performance. Do not re-introduce `react-three-fiber` unless explicitly requested.
- **Styling:** Tailwind CSS is used globally. Keep classes clean and modular.

## Development Constraints
- Use standard `id` attributes on `<section>` tags for any new content areas to support anchor linking.
- Ensure that `z-index` and `overflow` constraints are respected, particularly where sticky elements (like the `<StickyProjectList />` or `<ProcessAccordion />`) are involved.
