import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3>Annuj Kumar</h3>
            <p>Software Developer & Web Developer passionate about creating amazing digital solutions and innovative applications.</p>
            <div className="footer-social">
              <a href="https://github.com/annujkumar" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/annuj-kumar" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:annujinsan@gmail.com">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <p>annujinsan@gmail.com</p>
            <p>+91 9518438756</p>
            <p>Delhi, India</p>
            <motion.div className="footer-cv-download">
              <a 
                href="https://drive.google.com/file/d/1d8YReInB5Zgf11LY2wMuilCk81adWi0a/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-cv-btn"
              >
                Download CV
              </a>
            </motion.div>
            <motion.button
              className="back-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ↑ Back to Top
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Annuj Kumar. Made with{' '}
            <Heart size={16} className="heart-icon" />
            {' '}and lots of coffee.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
