import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function RotatingCube() {
  const mesh = useRef()
  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.elapsedTime * 0.22
    mesh.current.rotation.y = state.clock.elapsedTime * 0.33
  })
  return (
    <Float speed={1.5} floatIntensity={0.6}>
      <mesh ref={mesh}>
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <meshStandardMaterial color="#c8c5c0" roughness={0.15} metalness={0.7} />
      </mesh>
    </Float>
  )
}

function LazyCube() {
  const containerRef = useRef()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1, rootMargin: '80px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      {visible && (
        <Canvas camera={{ position: [0, 0, 4], fov: 40 }} dpr={[1, 1.5]} style={{ width: '100%', height: '100%' }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[3, 3, 3]} intensity={1.5} />
          <RotatingCube />
        </Canvas>
      )}
    </div>
  )
}

export default function About() {
  return (
    <div className="about-single">
      <div className="about-single-inner">

        <h2 className="section-title">
          Crafting software<br /><em>with intention.</em>
        </h2>

        <div className="about-single-body">
          <div className="about-single-text">
            <p className="about-text" style={{ marginTop: '1.75rem' }}>
              I'm a full-stack engineer pursuing B.Tech in Computer Science at ABES Institute of Technology.
              I care about the full picture — from database schema design to pixel-perfect UI, building
              systems that are scalable, maintainable, and fast.
            </p>
            <p className="about-text">
              I've shipped AI-powered platforms, real-time microservices, and ride-hailing systems.
              Currently exploring opportunities in full-stack and backend roles.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
              <a href="https://github.com/kaishavgupta" target="_blank" rel="noreferrer" className="hero-link">GitHub ↗</a>
              <a href="https://linkedin.com/in/kaishavgupta" target="_blank" rel="noreferrer" className="hero-link">LinkedIn ↗</a>
              <a href="mailto:kaishavgupta4.2001@gmail.com" className="hero-link">Email ↗</a>
            </div>
          </div>

          <div className="about-3d" style={{ flex: '0 0 240px', minWidth: '180px' }}>
            <LazyCube />
          </div>
        </div>
      </div>
    </div>
  )
}
