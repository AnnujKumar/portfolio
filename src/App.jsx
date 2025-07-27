import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import Chatbot from './components/Chatbot'
import CloudinaryImageLister from './components/CloudinaryImageLister'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)

  // Check if URL has #image-lister to show the image discovery tool
  useEffect(() => {
    if (window.location.hash === '#image-lister') {
      setCurrentView('image-lister')
    }
  }, [])

  // Scroll to top when view changes to project detail
  useEffect(() => {
    if (currentView === 'project-detail') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [currentView])

  const handleProjectSelect = (project) => {
    setSelectedProject(project)
    setCurrentView('project-detail')
  }

  const handleBackToProjects = () => {
    setSelectedProject(null)
    setCurrentView('home')
    // Scroll to projects section
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  if (currentView === 'project-detail' && selectedProject) {
    return (
      <div className="App">
        <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
        <Chatbot />
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects onProjectSelect={handleProjectSelect} />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
