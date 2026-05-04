import { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setStatus('submitting')
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSdc8Rh4JhNco7uKf7TBwcciXSF-ZmvP3sHH3NlBT7iXhuTmgg/formResponse"
    
    const data = new URLSearchParams()
    data.append('entry.2090300567', formData.name)
    data.append('entry.1904363910', formData.email)
    data.append('entry.1380600387', formData.subject)
    data.append('entry.398905292', formData.message)

    try {
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => {
        setStatus('idle')
        onClose()
      }, 3000)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn-primary" disabled={status === 'submitting' || status === 'success'} style={{width: '100%', marginTop: '0.5rem'}}>
            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>
          {status === 'error' && <p className="error-text">Oops! Something went wrong.</p>}
        </form>
        <p className="modal-subtitle">
          Please contact me directly at <a href="mailto:kaishavgupta4.2001@gmail.com">kaishavgupta4.2001@gmail.com</a> or drop your info here.
        </p>
      </div>
    </div>
  )
}
