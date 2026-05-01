import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'
import './index.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  )
}
