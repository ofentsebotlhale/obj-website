'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
  containerClassName?: string
  motionClassName?: string
  yOffset?: string[]
}

export function ParallaxImage({
  src,
  alt,
  priority = false,
  className = "object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90",
  containerClassName = "absolute inset-0 z-0 overflow-hidden",
  motionClassName = "absolute inset-[-15%]",
  yOffset = ["-15%", "15%"],
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], yOffset)

  return (
    <div ref={ref} className={containerClassName}>
      <motion.div style={{ y }} className={motionClassName}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className={className}
          priority={priority}
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  )
}
