'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, TorusKnot, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function AnimatedContactShape() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <TorusKnot ref={meshRef} args={[1, 0.3, 128, 32]} position={[0, 0, -2]} scale={1.2}>
          <MeshDistortMaterial
            color="#2563eb"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.1}
            metalness={0.8}
            wireframe={true}
          />
        </TorusKnot>
      </Float>
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
    </>
  )
}

export function Contact3D() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <div className="fixed inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <AnimatedContactShape />
      </Canvas>
    </div>
  )
}
