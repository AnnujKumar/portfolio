import React from 'react'
import { motion } from 'framer-motion'
import { Code, Award, Trophy, Star, ExternalLink, Target } from 'lucide-react'

const About = () => {
  const achievements = [
    { 
      icon: <Trophy />, 
      title: "Global Programming Rank", 
      value: "#1269", 
      description: "TOP 5% out of 24,900 participants in CodeChef contest",
      highlight: true,
      link: "https://www.codechef.com/START196D"
    },
    { 
      icon: <Code />, 
      title: "DSA Mastery", 
      value: "400+", 
      description: "Problems solved across major competitive programming platforms",
      highlight: true
    },
    { 
      icon: <Award />, 
      title: "Academic Excellence", 
      value: "9.09", 
      description: "Current CGPA at VIT Chennai",
      highlight: true
    },
    { 
      icon: <Star />, 
      title: "Peak Performance", 
      value: "9.47", 
      description: "Highest GPA achieved",
      highlight: true
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Passionate full-stack developer with proven track record</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Full-Stack Developer & Problem Solver</h3>
            <p>
              I'm a passionate Computer Science student at VIT Chennai with a strong foundation in modern web technologies 
              and a proven track record of delivering impactful software solutions. Currently maintaining a stellar 9.09 CGPA, 
              I combine academic excellence with practical industry experience.
            </p>
            
            <p>
              During my internship at <strong>Ziga Infotech Ventures</strong>, I architected and developed a comprehensive 
              survey builder platform, working with cutting-edge technologies like React 19, Material UI, Redux Toolkit, 
              and implementing real-time collaboration features with Socket.IO. My backend expertise includes designing 
              scalable systems using Node.js, Express, Prisma ORM, and managing multiple databases (PostgreSQL, MongoDB, Redis).
            </p>

            <p>
              My technical versatility shines through diverse projects: from building a MERN stack ride-booking platform 
              with real-time geolocation to developing AI-powered medical detection systems using Vision Transformers and 
              attention mechanisms. I've also created full-stack web applications with comprehensive CRUD operations, 
              authentication systems, and cloud integrations.
            </p>
          </motion.div>

          <motion.div
            className="achievements-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Global Rank Highlight Banner */}
            <h3>Key Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={`achievement-card ${achievement.highlight ? 'highlighted' : ''}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <div className="achievement-value">{achievement.value}</div>
                    <div className="achievement-title">{achievement.title}</div>
                    <div className="achievement-description">{achievement.description}</div>
                    {achievement.link && (
                      <a 
                        href={achievement.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="achievement-link"
                      >
                        <ExternalLink size={14} />
                        View Contest
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
