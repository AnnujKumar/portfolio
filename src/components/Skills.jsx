import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 92 },
        { name: "Java", level: 93 },
        { name: "JavaScript", level: 94 },
        { name: "HTML", level: 96 },
        { name: "CSS", level: 95 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 94 },
        { name: "Express.js", level: 93 },
        { name: "MongoDB", level: 92 },
        { name: "Mongoose", level: 91 },
        { name: "REST APIs", level: 95 },
        { name: "JWT", level: 90 },
        { name: "Redis", level: 91 },
        { name: "BullMQ", level: 90 },
        { name: "JOI", level: 92 },
        { name: "Passport.js", level: 91 },
        { name: "PostgreSQL", level: 93 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TailwindCSS", level: 93 },
        { name: "Bootstrap", level: 94 },
        { name: "Material UI", level: 92 },
        { name: "CoreUI", level: 91 },
        { name: "EJS", level: 93 },
        { name: "GSAP", level: 90 }
      ]
    },
    {
      title: "AI/ML & Tools",
      skills: [
        { name: "CNN Models", level: 92 },
        { name: "RNN Models", level: 91 },
        { name: "NLP", level: 90 },
        { name: "ViT", level: 90 },
        { name: "CBAM", level: 90 },
        { name: "Transformers", level: 91 },
        { name: "Data Augmentation", level: 93 },
        { name: "Weighted Sampling", level: 92 },
        { name: "Git", level: 96 },
        { name: "GitHub", level: 95 },
        { name: "Postman", level: 94 },
        { name: "Cloudinary", level: 92 },
        { name: "Maptiles", level: 91 },
        { name: "Google Maps API", level: 93 },
        { name: "ServiceNow", level: 90 },
        { name: "Visual Studio Code", level: 97 }
      ]
    },
    {
      title: "Operating Systems & Frameworks",
      skills: [
        { name: "Linux", level: 93 },
        { name: "Windows", level: 96 },
        { name: "MacOS", level: 90 },
        { name: "ITIL v4", level: 91 }
      ]
    },
    {
      title: "Academic Coursework",
      skills: [
        { name: "Data Structures and Algorithms", level: 95 },
        { name: "OOPS", level: 94 },
        { name: "Operating System", level: 93 },
        { name: "DBMS", level: 95 },
        { name: "Computer Networks", level: 92 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Technologies</h2>
          <p>Technologies I work with</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
