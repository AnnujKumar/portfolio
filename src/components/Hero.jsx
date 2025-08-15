import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="highlight">Annuj Kumar</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Engineer & Full Stack Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate Computer Science student at VIT Chennai with expertise in C++, Java, JavaScript, and modern web technologies. 
              Skilled in full-stack development, AI/ML, and creating scalable applications. 
              Currently pursuing B.Tech in Computer Science with a CGPA of 9.09.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button 
                className="btn primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
              <a 
                href="https://drive.google.com/file/d/1d8YReInB5Zgf11LY2wMuilCk81adWi0a/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn secondary"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>
            
            <motion.div
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="https://github.com/annujkumar" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/annuj-kumar" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:annujinsan@gmail.com">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="terminal-image-container">
              {/* Terminal coding background */}
              <div className="terminal-code-background">
                <div className="code-lines">
                  <div className="code-line">import React from 'react';</div>
                  <div className="code-line">import &#123; useState, useEffect &#125; from 'react';</div>
                  <div className="code-line">const Developer = () =&gt; &#123;</div>
                  <div className="code-line">  const [skills, setSkills] = useState([]);</div>
                  <div className="code-line">  return (</div>
                  <div className="code-line">    &lt;div className="profile"&gt;</div>
                  <div className="code-line">      &lt;h1&gt;Annuj Kumar&lt;/h1&gt;</div>
                  <div className="code-line">      &lt;p&gt;Software Engineer&lt;/p&gt;</div>
                  <div className="code-line">      &lt;span&gt;Full Stack Developer&lt;/span&gt;</div>
                  <div className="code-line">    &lt;/div&gt;</div>
                  <div className="code-line">  );</div>
                  <div className="code-line">&#125;;</div>
                  <div className="code-line">export default Developer;</div>
                  <div className="code-line">// Skills: React, Node.js, MongoDB</div>
                  <div className="code-line">// Experience: 2+ years in development</div>
                  <div className="code-line">// Passion: Building amazing applications</div>
                  <div className="code-line">function createPortfolio() &#123;</div>
                  <div className="code-line">  const skills = ['React', 'Node.js', 'MongoDB'];</div>
                  <div className="code-line">  const projects = ['RideIt', 'CampIndia'];</div>
                  <div className="code-line">  return &#123; skills, projects &#125;;</div>
                  <div className="code-line">&#125;</div>
                  <div className="code-line">console.log('Building the future!');</div>
                  <div className="code-line">const passion = 'coding';</div>
                  <div className="code-line">const expertise = 'full-stack';</div>
                  <div className="code-line">if (passion === 'coding') &#123;</div>
                  <div className="code-line">  buildAmazingThings();</div>
                  <div className="code-line">  solveProblemsThatMatter();</div>
                  <div className="code-line">&#125;</div>
                  <div className="code-line">async function fetchProjects() &#123;</div>
                  <div className="code-line">  const response = await api.get('/projects');</div>
                  <div className="code-line">  return response.data;</div>
                  <div className="code-line">&#125;</div>
                  <div className="code-line">const technologies = [</div>
                  <div className="code-line">  'React', 'Express', 'MongoDB',</div>
                  <div className="code-line">  'Node.js', 'JavaScript', 'Python'</div>
                  <div className="code-line">];</div>
                  <div className="code-line">// Always learning, always growing</div>
                  <div className="code-line">class Portfolio extends React.Component &#123;</div>
                  <div className="code-line">  constructor(props) &#123;</div>
                  <div className="code-line">    super(props);</div>
                  <div className="code-line">    this.state = &#123; loading: false &#125;;</div>
                  <div className="code-line">  &#125;</div>
                  <div className="code-line">  render() &#123;</div>
                  <div className="code-line">    return &lt;div&gt;Amazing Portfolio&lt;/div&gt;;</div>
                  <div className="code-line">  &#125;</div>
                  <div className="code-line">&#125;</div>
                  <div className="code-line">export &#123; Portfolio &#125;;</div>
                  <div className="code-line">// Code with purpose, build with passion</div>
                </div>
              </div>
              
              {/* Profile image */}
              <div className="profile-image">
                <img 
                  src="/portfolio/images/myImage.png" 
                  alt="Annuj Kumar - Software Engineer" 
                  className="profile-photo"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
