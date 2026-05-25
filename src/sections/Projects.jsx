import { useState, useEffect } from 'react'

const projects = [
  {
    id: '01',
    title: 'Aviora',
    subtitle: 'Airport Passenger Assistance Platform · React Native & Firebase',
    description: 'A comprehensive mobile application designed to connect airport passengers with support staff for real-time assistance management.',
    shortDesc: 'Real-time mobile app for airport passenger assistance with role-based workflows.',
    tags: ['Mobile', 'React Native'],
    tech: ['React Native', 'Expo', 'Firebase', 'Firestore', 'Supabase', 'Zustand', 'React Navigation'],
    date: 'May – June 2026',
    images: ['https://raw.githubusercontent.com/kaishavgupta/aviora/main/screenshots/passenger_home.png', 'https://raw.githubusercontent.com/kaishavgupta/aviora/main/screenshots/passenger_tracking.png', 'https://raw.githubusercontent.com/kaishavgupta/aviora/main/screenshots/staff_assign.png'],
    videos: [],
    bullets: [
      'Built a full-stack, role-based mobile app (React Native + Expo) connecting airport passengers with support staff for real-time assistance request management.',
      'Implemented a multi-step wizard form with offline draft autosave via AsyncStorage, document uploads to Firebase Storage, and QR code generation for request verification.',
      'Engineered a strict sequential status workflow (New → Under Review → Staff Assigned → Passenger Contacted → In Progress → Completed) enforced at the database level using Firestore rules.',
      'Developed a real-time staff console with global keyword search, filter chips, staff allocation dialogs, and an inverted live chat thread powered by Firestore onSnapshot listeners.',
      'Integrated expo-notifications for push alerts on status transitions, a global dark/light mode toggle persisted to AsyncStorage, and a custom daily operations bar chart report.',
    ],
    features: ['Role-based authentication', 'Real-time status updates', 'Offline draft autosave', 'QR code verification', 'Live chat support', 'Push notifications', 'Dark/Light mode'],
    github: 'https://github.com/kaishavgupta/aviora',
    live: 'https://expo.dev/artifacts/eas/atXnwkv9rxjMztRTmAXEaD.apk',
  },
  {
    id: '02',
    title: 'SuperBlog',
    subtitle: 'AI-Powered Content Platform · Full-Stack Next.js & Supabase',
    description: 'A modern blogging platform powered by AI to generate intelligent summaries and manage content efficiently with role-based access control.',
    shortDesc: 'AI-powered blogging platform with automated summaries and role-based access.',
    tags: ['AI', 'Full Stack'],
    tech: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Gemini 2.5 Flash', 'Vercel'],
    date: 'April 2026',
    images: ['https://via.placeholder.com/600x400?text=SuperBlog+1', 'https://via.placeholder.com/600x400?text=SuperBlog+2'],
    videos: [],
    bullets: [
      'Built a modern blogging platform using Next.js 15 (App Router), TypeScript, and Supabase with secure authentication and role-based access (Author/Viewer/Admin).',
      'Integrated Google Gemini 2.5 Flash to generate AI summaries with a custom "Review & Publish" flow, reducing unnecessary API costs by skipping drafts.',
      'Implemented Cost Optimization with a token reduction layer that truncates input to 6,000 characters and persists summaries to prevent repeated API calls.',
      'Built server-side actions for CRUD operations using de-normalized PostgreSQL schema design to enhance read performance by 30% via minimized table joins.',
      'Resolved CI/CD production bugs related to TypeScript type-checking for null values and explicit typing in list-mapping logic during Vercel deployment.',
    ],
    features: ['AI-powered summaries', 'Role-based access control', 'Server-side rendering', 'PostgreSQL optimization', 'Vercel deployment', 'Cost optimization', 'Review workflow'],
    github: 'https://github.com/kaishavgupta/superBlog',
    live: 'https://kaishavsuperblog.vercel.app/',
  },
  {
    id: '03',
    title: 'Tomato',
    subtitle: 'Real-Time Food Delivery System · Scalable MERN Microservices',
    description: 'A scalable food delivery platform built with microservices architecture supporting real-time order tracking and restaurant management.',
    shortDesc: 'Scalable microservices food delivery platform with real-time tracking.',
    tags: ['MERN', 'Microservices'],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'RabbitMQ', 'Socket.io', 'Redis'],
    date: 'March 2026',
    images: ['https://via.placeholder.com/600x400?text=Tomato+1', 'https://via.placeholder.com/600x400?text=Tomato+2', 'https://via.placeholder.com/600x400?text=Tomato+3', 'https://via.placeholder.com/600x400?text=Tomato+4'],
    videos: [],
    bullets: [
      'Built a scalable food delivery platform using MongoDB, Express.js, React, and Node.js with microservices architecture.',
      'Designed services (Auth, Restaurant, Order, Payment) enabling modular scalability and fault isolation.',
      'Integrated RabbitMQ for asynchronous processing of payments and reliable rider notification workflows.',
      'Implemented Socket.io for real-time updates and Redis for caching live rider locations for low-latency tracking.',
    ],
    features: ['Microservices architecture', 'Real-time tracking', 'Payment processing', 'Rider assignment', 'Location caching', 'Queue management', 'Order management'],
    github: 'https://github.com/kaishavgupta/tomato',
    live: '#',
  },
  {
    id: '04',
    title: 'Uber Clone',
    subtitle: 'Taxi Booking & Management System · Scalable Real-Time Full Stack',
    description: 'A ride-hailing platform with real-time driver assignment and trip tracking capabilities using Socket.io for live updates.',
    shortDesc: 'Real-time ride-hailing platform with live driver tracking.',
    tags: ['Real-Time', 'Full Stack'],
    tech: ['React', 'Redux', 'Node.js', 'Express.js', 'Socket.io', 'REST APIs'],
    date: 'Jan 2026',
    images: ['https://via.placeholder.com/600x400?text=Uber+1', 'https://via.placeholder.com/600x400?text=Uber+2'],
    videos: [],
    bullets: [
      'Engineered a ride-hailing platform using React, Redux, Node.js, and Express.js supporting real-time interactions.',
      'Designed and implemented Socket.io for ride requests, live driver assignment, and trip tracking.',
      'Architected RESTful microservices for pricing and lifecycle management with clear service separation.',
    ],
    features: ['Real-time driver assignment', 'Live trip tracking', 'Pricing calculation', 'State management', 'WebSocket integration', 'Microservices'],
    github: 'https://github.com/kaishavgupta/uber',
    live: '#',
  },
  {
    id: '05',
    title: 'Careverse',
    subtitle: 'Doctor Appointment Booking System',
    description: 'A comprehensive platform for managing doctor appointments with separate interfaces for patients, doctors, and administrators.',
    shortDesc: 'Full-stack appointment booking system for healthcare management.',
    tags: ['MERN', 'Full Stack'],
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Vite', 'Cloudinary'],
    date: 'October 2025',
    images: ['https://via.placeholder.com/600x400?text=Careverse+1', 'https://via.placeholder.com/600x400?text=Careverse+2', 'https://via.placeholder.com/600x400?text=Careverse+3'],
    videos: [],
    bullets: [
      'Built an end-to-end doctor appointment platform covering backend, patient frontend, and admin/doctor dashboard.',
      'Designed a RESTful API using Node.js & Express with role-based routing for Admins, Doctors, and Patients.',
      'Integrated MongoDB (Mongoose) to handle appointment workflows and used Cloudinary for secure storage of doctor profiles and medical documents.',
      'Developed two React + Vite applications: Patient Portal and Admin/Doctor Dashboard.',
      'Implemented CORS middleware and cookie-based authentication for secure session handling.'
    ],
    features: ['Role-based dashboards', 'Appointment scheduling', 'Doctor profiles', 'Document management', 'RESTful API', 'Secure authentication', 'Two separate interfaces'],
    github: 'https://github.com/kaishavgupta/careverse/',
    live: '#',
  },
  {
    id: '06',
    title: 'Expense Tracker',
    subtitle: 'Personal Finance Tracking Application',
    description: 'A robust personal finance management application for tracking expenses, categorizing transactions, and maintaining financial overview.',
    shortDesc: 'Personal finance tracking with transaction categorization.',
    tags: ['MERN', 'Full Stack'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Vite', 'JWT'],
    date: 'September 2025',
    images: ['https://via.placeholder.com/600x400?text=Expense+1', 'https://via.placeholder.com/600x400?text=Expense+2'],
    videos: [],
    bullets: [
      'Developed a robust MERN stack application for tracking personal finances with a responsive UI built using Vite.',
      'Implemented JWT-based authentication using secure, HTTP-only cookies to manage user sessions and protect routes.',
      'Engineered RESTful API endpoints and designed a MongoDB schema embedding transaction data to streamline retrieval.',
      'Integrated React Router for navigation and React Toastify for real-time feedback and notifications.',
      'Built features for categorizing transactions and calculating real-time balance totals for an immediate financial overview.'
    ],
    features: ['Transaction tracking', 'Expense categorization', 'Real-time balance', 'JWT authentication', 'Secure sessions', 'Data visualization', 'Responsive design'],
    github: 'https://github.com/kaishavgupta/expenseTracker',
    live: '#',
  }
]

function ProjectSlider({ media }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!media || media.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [media])

  if (!media || media.length === 0) {
    return (
      <div className="project-slider-container no-media">
        <div className="no-image-placeholder">
          <span>📷</span>
          <p>No images available</p>
        </div>
      </div>
    )
  }

  const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url)

  return (
    <div className="project-slider-container">
      <div className="project-slider-wrapper">
        {media.map((item, idx) => (
          <div
            key={idx}
            className={`slider-item ${idx === currentIndex ? 'active' : ''}`}
            style={{ animation: idx === currentIndex ? 'fadeIn 0.5s ease-in-out' : 'none' }}
          >
            {isVideo(item) ? (
              <video src={item} muted autoPlay={idx === currentIndex} className="slider-media" />
            ) : (
              <img src={item} alt={`slide-${idx}`} className="slider-media" onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = '<div class="image-error"><span>⚠️</span><p>Preview coming soon</p></div>'
              }} />
            )}
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {media.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, onViewDetails }) {
  const [hovered, setHovered] = useState(false)
  const allMedia = [...(project.images || []), ...(project.videos || [])]

  return (
    <div
      className="project-card-enhanced"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-slider-section">
        <ProjectSlider media={allMedia} />
      </div>

      <div className="project-card-content">
        <div className="project-header-enhanced">
          <div>
            <h3 className="project-title-enhanced">{project.title}</h3>
            <p className="project-date-enhanced">{project.date}</p>
          </div>
          <div className="project-tags-enhanced">
            {project.tags.map(t => <span key={t} className="project-tag-enhanced">{t}</span>)}
          </div>
        </div>

        <p className="project-short-desc">{project.shortDesc}</p>

        <div className="project-tech-enhanced">
          {project.tech.slice(0, 4).map(t => <span key={t} className="tech-tag-enhanced">{t}</span>)}
          {project.tech.length > 4 && <span className="tech-tag-enhanced">+{project.tech.length - 4}</span>}
        </div>

        <div className="project-actions">
          <a href={project.github} className="project-btn github-btn" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          {project.live && project.live !== '#' && (
            <a href={project.live} className="project-btn live-btn" target="_blank" rel="noreferrer">
              Live Project ↗
            </a>
          )}
          <button className="project-btn details-btn" onClick={() => onViewDetails(project)}>
            View Details →
          </button>
        </div>
      </div>
    </div>
  )
}


function ProjectDetail({ project, onClose }) {
  const allMedia = [...(project.images || []), ...(project.videos || [])]

  return (
    <div className="project-detail-overlay" onClick={onClose}>
      <div className="project-detail-container" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close-btn" onClick={onClose}>✕</button>

        <div className="detail-content">
          <div className="detail-media">
            <ProjectSlider media={allMedia} />
          </div>

          <div className="detail-info">
            <div className="detail-header">
              <h1 className="detail-title">{project.title}</h1>
              <p className="detail-subtitle">{project.subtitle}</p>
              <p className="detail-date">{project.date}</p>
            </div>

            <p className="detail-description">{project.description}</p>

            <div className="detail-section">
              <h3 className="detail-section-title">Tech Stack</h3>
              <div className="detail-tech">
                {project.tech.map(t => <span key={t} className="detail-tech-tag">{t}</span>)}
              </div>
            </div>

            <div className="detail-section">
              <h3 className="detail-section-title">Key Features</h3>
              <ul className="detail-features">
                {project.features?.map((f, i) => (
                  <li key={i}>
                    <span className="feature-dot">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h3 className="detail-section-title">Project Highlights</h3>
              <ul className="detail-bullets">
                {project.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="bullet-dash">–</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-actions">
              <a href={project.github} className="detail-btn github-btn" target="_blank" rel="noreferrer">
                View on GitHub ↗
              </a>
              {project.live && project.live !== '#' && (
                <a href={project.live} className="detail-btn live-btn" target="_blank" rel="noreferrer">
                  Visit Live Project ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <div className="projects">
        <div className="projects-inner">
          <div className="projects-header">
            <div>
              <h2 className="section-title">My Projects</h2>
            </div>
            <a href="https://github.com/kaishavgupta" target="_blank" rel="noreferrer"
              style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-muted)', borderBottom: '1px solid var(--border)', paddingBottom: '2px' }}>
              All on GitHub →
            </a>
          </div>

          <div className="projects-grid-enhanced">
            {projects.map(p => <ProjectCard key={p.id} project={p} onViewDetails={setSelectedProject} />)}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  )
}
