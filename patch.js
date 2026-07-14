const fs = require('fs');
const file = 'components/work/asymmetrical-project-list.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `import { motion, AnimatePresence } from 'framer-motion'\nimport { Reveal, RevealWords } from '@/components/anim/reveal'`,
  `import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'\nimport { useRef } from 'react'\nimport { Reveal, RevealWords } from '@/components/anim/reveal'`
);

content = content.replace(
  `function ProjectCard({ project, index }: { project: Project; index: number }) {`,
  `function ParallaxImage({ src, alt, priority = false }: { src: string, alt: string, priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-15%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      </motion.div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {`
);

content = content.replace(
  `        <div \n          className="group relative w-full overflow-hidden rounded-[2rem] bg-muted cursor-pointer"\n          onClick={() => setIsExpanded(!isExpanded)}\n        >\n          <div className="relative w-full aspect-video">\n            <Image\n              src={project.image || "/placeholder.svg"}\n              alt={project.title}\n              fill\n              sizes="(max-width: 768px) 100vw, 50vw"\n              className="object-cover transition-transform duration-1000 group-hover:scale-105"\n              loading="lazy"\n            />\n          </div>\n          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">`,
  `        <div \n          className="group relative w-full overflow-hidden rounded-[2rem] bg-muted cursor-pointer aspect-video"\n          onClick={() => setIsExpanded(!isExpanded)}\n        >\n          <ParallaxImage src={project.image || "/placeholder.svg"} alt={project.title} priority={index < 2} />\n          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center z-10">`
);

fs.writeFileSync(file, content);
console.log("Patched successfully");
