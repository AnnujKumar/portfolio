import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Download } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Using your actual Formspree endpoint
      const formspreeResponse = await fetch('https://formspree.io/f/mgvzkgpr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      if (formspreeResponse.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully. I will get back to you soon!')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Formspree failed')
      }
    } catch (error) {
      // Fallback to mailto
      try {
        const subject = formData.subject || 'Portfolio Contact Form'
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        
        const mailtoLink = `mailto:annujinsan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        
        window.open(mailtoLink, '_blank')
        
        setSubmitMessage('Your email client will open. Please send the email to complete your message.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } catch (mailtoError) {
        setSubmitMessage('Please send your message directly to: annujinsan@gmail.com')
      }
    } finally {
      setIsSubmitting(false)
      // Hide message after 7 seconds
      setTimeout(() => setSubmitMessage(''), 7000)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      info: "annujinsan@gmail.com",
      link: "mailto:annujinsan@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      info: "+91 9518438756",
      link: "tel:+919518438756"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      info: "Delhi, India",
      link: "https://maps.google.com"
    }
  ]

  const socialLinks = [
    { icon: <Github size={24} />, link: "https://github.com/annujkumar", label: "GitHub" },
    { icon: <Linkedin size={24} />, link: "https://linkedin.com/in/annuj-kumar", label: "LinkedIn" },
    { icon: <Twitter size={24} />, link: "https://twitter.com/annujkumar", label: "Twitter" }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Let's talk about everything!</h3>
            <p>
              Don't like forms? Send me an email. 👋 I'm always excited to work on 
              new projects and collaborate with amazing people.
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <span>{item.info}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow me on:</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div className="cv-download">
              <a 
                href="https://drive.google.com/file/d/1d8YReInB5Zgf11LY2wMuilCk81adWi0a/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cv-download-btn"
              >
                <Download size={18} />
                Download My CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn primary"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitMessage && (
                <motion.div
                  className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
