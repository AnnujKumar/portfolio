import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Vellore Institute of Technology",
      location: "Chennai, India",
      duration: "Aug 2023 - May 2027",
      cgpa: "9.09",
      description: "Comprehensive program covering advanced computer science concepts, software engineering, artificial intelligence, machine learning, and modern web technologies.",
      subjects: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming (OOPS)",
        "Operating Systems",
        "Database Management Systems (DBMS)",
        "Computer Networks",
        "Artificial Intelligence & Machine Learning",
        "Software Engineering",
        "Web Development Technologies"
      ]
    },
    {
      degree: "Intermediate - Central Board of Secondary Education",
      institution: "Rishikul Vidyapeeth School",
      location: "India",
      duration: "Apr 2022 - May 2023",
      percentage: "86.7%",
      description: "Completed higher secondary education with focus on Science stream, building strong foundation in Mathematics, Physics, and Chemistry.",
      subjects: [
        "Mathematics",
        "Physics", 
        "Chemistry",
        "Computer Science",
        "English"
      ]
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Education</h2>
          <p>Academic background and qualifications</p>
        </motion.div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="education-icon">
                <GraduationCap size={40} />
              </div>
              
              <div className="education-content">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <div className="education-meta">
                    <div className="education-info">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="education-info">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="education-info">
                        <span style={{color: '#FFD700', fontWeight: 'bold'}}>CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                    {edu.percentage && (
                      <div className="education-info">
                        <span style={{color: '#FFD700', fontWeight: 'bold'}}>Percentage: {edu.percentage}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <h4>{edu.institution}</h4>
                <p>{edu.description}</p>
                
                <div className="subjects">
                  <h5>Key Subjects:</h5>
                  <div className="subjects-grid">
                    {edu.subjects.map((subject, subIndex) => (
                      <span key={subIndex} className="subject-tag">
                        {subject}
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

export default Education
