import { useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'SuperBlog',
    subtitle: 'AI-Powered Content Platform · Full-Stack Next.js & Supabase',
    tags: ['AI', 'Full Stack'],
    tech: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Gemini 2.5 Flash', 'Vercel'],
    date: 'April 2026',
    bullets: [
      'Built a modern blogging platform using Next.js 15 (App Router), TypeScript, and Supabase with secure authentication and role-based access (Author/Viewer/Admin).',
      'Integrated Google Gemini 2.5 Flash to generate AI summaries with a custom "Review & Publish" flow, reducing unnecessary API costs by skipping drafts.',
      'Implemented Cost Optimization with a token reduction layer that truncates input to 6,000 characters and persists summaries to prevent repeated API calls.',
      'Built server-side actions for CRUD operations using de-normalized PostgreSQL schema design to enhance read performance by 30% via minimized table joins.',
      'Resolved CI/CD production bugs related to TypeScript type-checking for null values and explicit typing in list-mapping logic during Vercel deployment.',
    ],
    github: 'https://github.com/kaishavgupta',
    live: 'https://kaishavsuperblog.vercel.app/',
  },
  {
    id: '02',
    title: 'Tomato',
    subtitle: 'Real-Time Food Delivery System · Scalable MERN Microservices',
    tags: ['MERN', 'Microservices'],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'RabbitMQ', 'Socket.io', 'Redis'],
    date: 'March 2026',
    bullets: [
      'Built a scalable food delivery platform using MongoDB, Express.js, React, and Node.js with microservices architecture.',
      'Designed services (Auth, Restaurant, Order, Payment) enabling modular scalability and fault isolation.',
      'Integrated RabbitMQ for asynchronous processing of payments and reliable rider notification workflows.',
      'Implemented Socket.io for real-time updates and Redis for caching live rider locations for low-latency tracking.',
    ],
    github: 'https://github.com/kaishavgupta',
    live: '#',
  },
  {
    id: '03',
    title: 'Uber Clone',
    subtitle: 'Taxi Booking & Management System · Scalable Real-Time Full Stack',
    tags: ['Real-Time', 'Full Stack'],
    tech: ['React', 'Redux', 'Node.js', 'Express.js', 'Socket.io', 'REST APIs'],
    date: 'Jan 2026',
    bullets: [
      'Engineered a ride-hailing platform using React, Redux, Node.js, and Express.js supporting real-time interactions.',
      'Designed and implemented Socket.io for ride requests, live driver assignment, and trip tracking.',
      'Architected RESTful microservices for pricing and lifecycle management with clear service separation.',
    ],
    github: 'https://github.com/kaishavgupta',
    live: '#',
  },
  {
    id: '04',
    title: 'Careverse',
    subtitle: 'Doctor Appointment Booking System',
    tags: ['MERN', 'Full Stack'],
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Vite', 'Cloudinary'],
    date: 'October 2025',
    bullets: [
      'Built an end-to-end doctor appointment platform covering backend, patient frontend, and admin/doctor dashboard.',
      'Designed a RESTful API using Node.js & Express with role-based routing for Admins, Doctors, and Patients.',
      'Integrated MongoDB (Mongoose) to handle appointment workflows and used Cloudinary for secure storage of doctor profiles and medical documents.',
      'Developed two React + Vite applications: Patient Portal and Admin/Doctor Dashboard.',
      'Implemented CORS middleware and cookie-based authentication for secure session handling.'
    ],
    github: 'https://github.com/kaishavgupta',
    live: '#',
  },
  {
    id: '05',
    title: 'Expense Tracker',
    subtitle: 'Personal Finance Tracking Application',
    tags: ['MERN', 'Full Stack'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Vite', 'JWT'],
    date: 'September 2025',
    bullets: [
      'Developed a robust MERN stack application for tracking personal finances with a responsive UI built using Vite.',
      'Implemented JWT-based authentication using secure, HTTP-only cookies to manage user sessions and protect routes.',
      'Engineered RESTful API endpoints and designed a MongoDB schema embedding transaction data to streamline retrieval.',
      'Integrated React Router for navigation and React Toastify for real-time feedback and notifications.',
      'Built features for categorizing transactions and calculating real-time balance totals for an immediate financial overview.'
    ],
    github: 'https://github.com/kaishavgupta',
    live: '#',
  }
]

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="project-card"
      style={{ background: hovered ? 'var(--surface)' : 'transparent' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className="project-num">{project.id}</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--ink-faint)' }}>{project.date}</span>
        </div>
        <div className="project-tags">
          {project.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>

      <ul className="project-bullets">
        {project.bullets.map((b, i) => (
          <li key={i} className="project-bullet">
            <span className="project-bullet-dash">–</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="project-tech">
        {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>

      <div className="project-links">
        <a href={project.github} className="project-link" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={project.live} className="project-link muted">Live ↗</a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
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

        <div className="projects-grid">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </div>
  )
}
