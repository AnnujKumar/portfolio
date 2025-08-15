import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const AnimatedText = () => {
  const words = ['think', 'learn', 'develop', 'deploy', 'innovate']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000) // Change word every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="animated-text-container">
      <span className="terminal-prefix">$&nbsp;</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWordIndex]}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="animated-word"
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
      <span className="terminal-cursor">_</span>
    </div>
  )
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 50)
      
      // Don't hide header when mobile menu is open
      if (isMenuOpen) {
        setIsVisible(true)
        return
      }
      
      // Auto-hide logic
      if (currentScrollY < 100) {
        // Always show header at the top
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    const handleMouseMove = (e) => {
      // Show header when mouse is near the top (only on desktop)
      if (e.clientY <= 100 && window.innerWidth > 768) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [lastScrollY, isMenuOpen])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatedText />
        </motion.div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" data-text="home" onClick={() => scrollToSection('home')}>home</a>
          <a href="#about" data-text="about" onClick={() => scrollToSection('about')}>about</a>
          <a href="#experience" data-text="experience" onClick={() => scrollToSection('experience')}>experience</a>
          <a href="#skills" data-text="skills" onClick={() => scrollToSection('skills')}>skills</a>
          <a href="#projects" data-text="projects" onClick={() => scrollToSection('projects')}>projects</a>
          <a href="#contact" data-text="contact" onClick={() => scrollToSection('contact')}>contact</a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.header>
  )
}

export default Header
