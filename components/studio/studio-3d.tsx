'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Octahedron, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function AnimatedStudioShape() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Octahedron ref={meshRef} args={[1, 0]} position={[-2, 0, -2]} scale={1.5}>
          <meshStandardMaterial
            color="#f59e0b"
            roughness={0.2}
            metalness={0.8}
            wireframe={true}
          />
        </Octahedron>
      </Float>
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#f59e0b" />
    </>
  )
}

export function Studio3D() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <AnimatedStudioShape />
      </Canvas>
    </div>
  )
}
