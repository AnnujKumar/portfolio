import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: "Ziga Infotech Ventures Pvt. Ltd.",
      position: "Software Development Intern",
      duration: "May 2025 -- July 2025",
      location: "Remote",
      achievements: [
        "Survey Builder Platform: Built a full-stack platform for CSAT, ESAT, and NPS surveys.",
        "Frontend Engineering: Developed drag-and-drop interface using React 19, Material UI, Redux Toolkit, and DND Kit.",
        "Advanced Features: Implemented conditional logic, multi-page navigation, and responsive validation.",
        "Collaboration: Enabled real-time collaboration with Socket.IO, data sync, and conflict resolution.",
        "Backend Architecture: Designed backend using Node.js, Express, Prisma ORM, PostgreSQL, MongoDB, Redis, and BullMQ.",
        "Optimization: Optimized large surveys using efficient state management and rendering techniques."
      ],
      technologies: ["React 19", "Material UI", "Redux Toolkit", "DND Kit", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "MongoDB", "Redis", "BullMQ", "Socket.IO"]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Experience</h2>
          <p>Professional work experience and achievements</p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <Briefcase size={24} />
                </div>
                <div className="experience-meta">
                  <div className="experience-duration">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="experience-location">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="experience-content">
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                
                <div className="experience-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>
                        <ChevronRight size={16} className="achievement-icon" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
