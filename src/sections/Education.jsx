import { useRef, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function Globe() {
  const mesh = useRef()
  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.12
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
  })
  return (
    <Float speed={1} floatIntensity={0.4}>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#c8c5c0" roughness={0.1} metalness={0.5} wireframe />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.3, 24, 24]} />
        <meshStandardMaterial color="#e8e5e0" roughness={0.3} metalness={0.2} transparent opacity={0.25} />
      </mesh>
    </Float>
  )
}

// GlobeCanvas is always mounted. onCreated grabs gl + camera refs,
// then a ResizeObserver watches the wrapper div and calls gl.setSize
// whenever it gets non-zero dimensions — fixes first-scroll blank canvas.
function GlobeCanvas() {
  const wrapperRef = useRef()
  const glRef = useRef()
  const cameraRef = useRef()

  const handleCreated = useCallback(({ gl, camera }) => {
    glRef.current = gl
    cameraRef.current = camera

    const el = wrapperRef.current
    if (!el) return

    const applySize = (w, h) => {
      if (w > 0 && h > 0) {
        gl.setSize(w, h, false)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
    }

    // Try immediately
    applySize(el.clientWidth, el.clientHeight)

    // Watch for any layout change (covers first-scroll case)
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        applySize(width, height)
      }
    })
    ro.observe(el)

    // Cleanup stored on gl so it lives with the canvas
    gl._roCleanup = () => ro.disconnect()
  }, [])

  return (
    <div ref={wrapperRef} className="globe-canvas">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 1.5]}
        onCreated={handleCreated}
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -3, -5]} intensity={0.4} />
        <Globe />
      </Canvas>
    </div>
  )
}

const education = [
  {
    degree: 'B.Tech — Computer Science & Technology',
    institution: 'ABES Institute of Technology',
    period: '2023 – Present',
    score: 'CGPA: 6.1',
    highlights: [
      'Full Stack Development, Distributed Systems, Data Structures & Algorithms',
      'Building AI-integrated production applications using Next.js and Supabase',
      'Active open-source contributor, exploring cloud-native and microservices patterns',
    ],
  },
  {
    degree: 'Higher Secondary Education (ICSE Board)',
    institution: 'St. Joseph College',
    period: '2019 – 2021',
    score: 'Class 12: 70%',
    highlights: [
      'Physics, Chemistry, Mathematics, Computer Science',
      'Foundation in programming and problem-solving',
    ],
  },
]

const certifications = [
  { name: 'Linux Certification', issuer: 'Udemy', year: '2025' },
  { name: 'DBMS Certification', issuer: 'Infosys Springboard', year: '2024' },
]

const stats = [
  { num: '3+', label: 'Projects Shipped' },
  { num: '6+', label: 'Technologies' },
  { num: '3', label: 'Certifications' },
  { num: '2026', label: 'Latest Project' },
]

export default function Education() {
  return (
    <div className="education">
      <div className="education-left">
        <h2 className="section-title">Academic<br /><em>journey.</em></h2>

        <div className="timeline">
          <div className="timeline-line" />
          {education.map((edu, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-meta">
                <h3 className="timeline-degree">{edu.degree}</h3>
                <span className="timeline-period">{edu.period}</span>
              </div>
              <p className="timeline-institution">{edu.institution}</p>
              <p className="timeline-score">{edu.score}</p>
              <ul className="timeline-highlights">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="timeline-highlight">
                    <span style={{ color: 'var(--ink-faint)', flexShrink: 0 }}>—</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="certs-section">
          <p className="certs-label">Certifications</p>
          <div className="cert-cards">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-card">
                <div>
                  <p className="cert-name">{cert.name}</p>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <span className="cert-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="education-right">
        <GlobeCanvas />
        <div className="stats-grid">
          {stats.map(stat => (
            <div key={stat.label} className="stat-card">
              <p className="stat-num">{stat.num}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
