import { useState, useEffect } from 'react'
import myPhoto from '../assets/my-photo.png'
import resumePdf from '../assets/resume.pdf'

const links = ['hero', 'about', 'projects', 'education', 'skills', 'contact']
const labels = { hero: 'Home', about: 'About', projects: 'Projects', education: 'Education', skills: 'Skills', contact: 'Contact' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sectionEls = links.map(id => document.getElementById(id)).filter(Boolean)
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        if (window.scrollY >= sectionEls[i].offsetTop - 140) {
          setActive(links[i]); break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        {/* Photo replaces KG logo with hover zoom */}
        <div className="navbar-photo-container">
          <button onClick={() => scrollTo('hero')} style={{ background: 'none', border: 'none', padding: 0 }}>
            <img src={myPhoto} alt="Kaishav Gupta" className="navbar-photo" />
          </button>
          <div className="navbar-photo-large">
            <img src={myPhoto} alt="Kaishav Gupta Enlarged" />
          </div>
        </div>

        <div className="navbar-links">
          {links.filter(l => l !== 'hero').map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              className={`navbar-link${active === link ? ' active' : ''}`}>
              {labels[link]}
            </button>
          ))}
          <a href={resumePdf} download="Kaishav_Gupta_Resume.pdf" className="btn-primary" style={{ textDecoration: 'none', marginLeft: '1rem', textTransform: 'none' }}>
            Download my resume
          </a>
        </div>

        <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.filter(l => l !== 'hero').map(link => (
          <button key={link} className="mobile-menu-link" onClick={() => scrollTo(link)}>
            {labels[link]}
          </button>
        ))}
        <a href={resumePdf} download="Kaishav_Gupta_Resume.pdf" className="btn-primary" style={{ textDecoration: 'none', marginTop: '1rem', textTransform: 'none' }}>
          Download my resume
        </a>
      </div>
    </>
  )
}
