import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'

function FloatingCrystal({ position, scale, speed, rotDir }) {
  const mesh = useRef()
  const geometry = useMemo(() => new THREE.OctahedronGeometry(1, 0), [])
  useFrame(() => {
    if (!mesh.current) return
    mesh.current.rotation.x += 0.003 * rotDir * speed
    mesh.current.rotation.y += 0.005 * speed
  })
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={mesh} position={position} scale={scale} geometry={geometry}>
        <meshStandardMaterial color="#d8d5d0" roughness={0.1} metalness={0.65} />
      </mesh>
    </Float>
  )
}

function Torus({ position, scale }) {
  const mesh = useRef()
  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.elapsedTime * 0.15
    mesh.current.rotation.y = state.clock.elapsedTime * 0.2
  })
  return (
    <Float speed={1.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position} scale={scale}>
        <torusKnotGeometry args={[0.7, 0.22, 128, 16]} />
        <meshStandardMaterial color="#a8a5a0" roughness={0.2} metalness={0.7} />
      </mesh>
    </Float>
  )
}

function WireSphere({ position, scale }) {
  const mesh = useRef()
  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.1
    mesh.current.rotation.x = state.clock.elapsedTime * 0.05
  })
  return (
    <Float speed={2} floatIntensity={1}>
      <mesh ref={mesh} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#c8c5c0" roughness={0.05} metalness={0.8} wireframe />
      </mesh>
    </Float>
  )
}

export default function Scene3D({ style }) {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={style} dpr={[1, 1.5]}>
      <ambientLight intensity={1.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#c8c0b8" />
      <pointLight position={[0, 4, 0]} intensity={0.6} />
      <FloatingCrystal position={[-2.8, 0.5, 0]} scale={0.9} speed={1.2} rotDir={1} />
      <FloatingCrystal position={[2.5, -0.5, -1]} scale={0.6} speed={0.8} rotDir={-1} />
      <FloatingCrystal position={[0.5, 2, -2]} scale={0.4} speed={1.5} rotDir={1} />
      <Torus position={[0, 0, 0]} scale={1} />
      <WireSphere position={[3.5, 1.5, -1.5]} scale={0.8} />
      <WireSphere position={[-3.5, -1.5, -2]} scale={0.5} />
    </Canvas>
  )
}
