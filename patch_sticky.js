const fs = require('fs');
const file = 'components/home/sticky-project-list.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `function Card({ project, i }: { project: Project; i: number }) {`,
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
          sizes="100vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      </motion.div>
    </div>
  )
}

function Card({ project, i }: { project: Project; i: number }) {`
);

content = content.replace(
  `        <div className="absolute inset-0 z-0 overflow-hidden bg-black">\n          <Image\n            src={project.image || "/placeholder.svg"}\n            alt={project.title}\n            fill\n            sizes="100vw"\n            className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"\n            loading="lazy"\n          />\n          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />\n        </div>`,
  `        <div className="absolute inset-0 z-0 overflow-hidden bg-black">\n          <ParallaxImage src={project.image || "/placeholder.svg"} alt={project.title} priority={i === 0} />\n          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />\n        </div>`
);

fs.writeFileSync(file, content);
console.log("Patched sticky project list");
