'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Icosahedron, MeshDistortMaterial, Stars } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function AnimatedServicesShape() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron ref={meshRef} args={[1.5, 0]} position={[3, -1, -3]}>
          <meshStandardMaterial
            color="#10b981"
            roughness={0.2}
            metalness={0.8}
            wireframe={true}
          />
        </Icosahedron>
      </Float>
      
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#10b981" />
    </>
  )
}

export function Services3D() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <div className="fixed inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <AnimatedServicesShape />
      </Canvas>
    </div>
  )
}
