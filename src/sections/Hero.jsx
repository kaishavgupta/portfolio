import { useEffect, useRef } from 'react'
import Scene3D from '../components/Scene3D'

const socials = [
  { label: 'GitHub', value: 'kaishavgupta', href: 'https://github.com/kaishavgupta' },
  { label: 'LinkedIn', value: 'kaishavgupta', href: 'https://linkedin.com/in/kaishavgupta' },
  { label: 'Email', value: 'kaishavgupta4.2001@gmail.com', href: 'mailto:kaishavgupta4.2001@gmail.com' },
]

export default function Hero() {
  const contentRef = useRef()

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    el.style.opacity = 0
    el.style.transform = 'translateY(24px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease'
      el.style.opacity = 1
      el.style.transform = 'translateY(0)'
    }, 150)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="hero">
      {/* 3D background */}
      <Scene3D style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.45 }} />

      {/* Centered main content */}
      <div ref={contentRef} className="hero-content">
        <span className="hero-badge">Full Stack Engineer — Available for opportunities</span>

        <h1 className="hero-title">
          Kaishav<br />
          <span>Gupta.</span>
        </h1>

        <p className="hero-subtitle">
          I design and build scalable full-stack web applications — cloud-native APIs,
          real-time systems, and AI-driven products. Focused on performance, craft, and impact.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>View Projects</button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>Get in Touch</button>
        </div>
      </div>

      {/* Social links bar — pinned to bottom of hero */}
      <div className="hero-social-bar">
        {socials.map(s => (
          <a key={s.label} href={s.href} className="hero-social-item" target="_blank" rel="noreferrer">
            <span className="hero-social-label">{s.label}</span>
            <span className="hero-social-value">{s.value}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
