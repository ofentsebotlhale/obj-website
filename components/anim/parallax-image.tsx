'use client'

import { useRef, useLayoutEffect, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// gsap.registerPlugin(ScrollTrigger)

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface ParallaxImageProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
  containerClassName?: string
  yOffset?: string[]
}

export function ParallaxImage({
  src,
  alt,
  priority = false,
  className = "object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90",
  containerClassName = "absolute inset-0 z-0 overflow-hidden",
  yOffset = ["-15%", "15%"],
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { y: yOffset[0] },
        {
          y: yOffset[1],
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [yOffset])

  return (
    <div ref={containerRef} className={containerClassName}>
      <div ref={imageRef} className="absolute inset-[-15%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className={className}
          priority={priority}
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  )
}
