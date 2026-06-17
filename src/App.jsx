import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import HowIWork from './components/HowIWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundLines from './components/BackgroundLines'

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div style={{ position: 'relative' }}>
      <BackgroundLines dark={dark} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar dark={dark} setDark={setDark} />
        <main>
          <div className="container">
            <Hero />
            <hr className="divider" />
            <Skills />
            <hr className="divider" />
            <Experience />
            <hr className="divider" />
            <Projects />
            <hr className="divider" />
            <HowIWork />
            <hr className="divider" />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App