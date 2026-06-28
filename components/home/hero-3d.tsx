'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, Torus } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedShapes() {
  const sphereRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1, 64, 64]} position={[2, 0, -2]} scale={1.5}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
        <Torus args={[1, 0.3, 16, 100]} position={[-3, 1, -4]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#8b5cf6" roughness={0.1} metalness={0.9} />
        </Torus>
      </Float>
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
    </>
  )
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <AnimatedShapes />
      </Canvas>
    </div>
  )
}
