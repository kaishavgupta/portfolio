const socials = [
  { label: 'GitHub',   href: 'https://github.com/kaishavgupta' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kaishavgupta' },
  { label: 'Email',    href: 'mailto:kaishavgupta4.2001@gmail.com' },
]

export default function Contact() {
  return (
    <footer className="footer-simple" id="contact">
      <div className="footer-inner">
        <h2 className="footer-title">
          Let's build<br />
          <em style={{ color: '#777' }}>something.</em>
        </h2>
        
        <p className="footer-subtitle">
          Available for full-time roles, internships, and freelance projects.
        </p>

        <div className="footer-links">
          {socials.map(s => (
            <a key={s.label} href={s.href} className="footer-link" target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          ))}
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Devloped by Kaishav Gupta
        </p>
      </div>
    </footer>
  )
}
