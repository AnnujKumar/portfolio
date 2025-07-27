import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2024",
      description: "Completed a comprehensive 74 hours long course covering React, HTML, CSS, JavaScript, Node.js, MongoDB, and more.",
      skills: ["React.js", "HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      credentialUrl: "https://ude.my/UC-920eac8c-7266-41a3-b003-f3f4a3f777e2"
    },
    {
      title: "Data Structures and Algorithms (DSA)",
      issuer: "Udemy",
      date: "2024",
      description: "In-depth training covering arrays, trees, graphs, and dynamic programming with practical problem-solving.",
      skills: ["Data Structures", "Algorithms", "Dynamic Programming", "Problem Solving"],
      credentialUrl: "https://ude.my/UC-09d15358-4e08-48bc-a9b0-a61987449fdc"
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Certifications</h2>
          <p>Professional certifications and achievements</p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="certification-header">
                <div className="certification-icon">
                  <Award size={24} />
                </div>
                <div className="certification-date">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>
              
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <h4>{cert.issuer}</h4>
                <p>{cert.description}</p>
                
                <div className="certification-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="cert-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="certification-action-bottom">
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-certificate-btn"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
