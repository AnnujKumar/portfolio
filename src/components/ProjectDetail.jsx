import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code, Database, Server, Brain } from 'lucide-react'
import ProjectCarousel from './ProjectCarousel'
import './ProjectCarousel.css'

const ProjectDetail = ({ project, onBack }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'fullstack':
        return <Server size={24} />
      case 'backend':
        return <Database size={24} />
      case 'frontend':
        return <Code size={24} />
      case 'ai':
        return <Brain size={24} />
      default:
        return <Code size={24} />
    }
  }

  const getCategoryColor = (category) => {
    // All categories use yellow color
    return '#FFD700'
  }

  if (!project) return null

  return (
    <div className="project-detail-page">
      <motion.div
        className="project-detail-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="project-detail-page-header">
          <div className="container">
            <button className="back-button-page" onClick={onBack}>
              <ArrowLeft size={20} />
              Back to Projects
            </button>
            
            <div className="project-detail-page-title">
              <div className="project-category-page" style={{ borderColor: getCategoryColor(project.category) }}>
                {getCategoryIcon(project.category)}
                <span style={{ color: getCategoryColor(project.category) }}>
                  {project.category.toUpperCase()}
                </span>
              </div>
              <h1>{project.title}</h1>
              <p className="project-subtitle-page">{project.description}</p>
            </div>

            <div className="project-links-page">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-page github">
                <Github size={20} />
                View Code
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-page live">
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="project-detail-page-content">
          <div className="container">
            {/* Project Image Carousel */}
            <ProjectCarousel projectName={project.title} />

            {/* Project Info */}
            <div className="project-info-grid-page">
              {/* Problem Statement */}
              {project.problemStatement && (
                <motion.div 
                  className="info-section-page"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  <h3>Problem Statement</h3>
                  <div className="problem-statement-page">
                    <p>{project.problemStatement}</p>
                  </div>
                </motion.div>
              )}

              {/* My Role */}
              {project.myRole && (
                <motion.div 
                  className="info-section-page"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3>My Role</h3>
                  <div className="my-role-page">
                    <p>{project.myRole}</p>
                  </div>
                </motion.div>
              )}

              {/* Tech Stack */}
              <motion.div 
                className="info-section-page"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3>Tech Stack</h3>
                <div className="tech-stack-detailed-page">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge-page">{tech}</span>
                  ))}
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div 
                className="info-section-page"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3>Key Features & Implementation</h3>
                <div className="features-detailed-page">
                  {project.features.map((feature, index) => {
                    const [title, description] = feature.split(': ')
                    return (
                      <div key={index} className="feature-item-page">
                        <h4>{title}</h4>
                        <p>{description}</p>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Project Highlights */}
              <motion.div 
                className="info-section-page"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3>Project Highlights</h3>
                <div className="highlights-page">
                  {project.highlights?.map((highlight, index) => (
                    <div key={index} className="highlight-item-page">
                      <span className="highlight-icon-page">⭐</span>
                      <span>{highlight}</span>
                    </div>
                  )) || getProjectHighlights(project).map((highlight, index) => (
                    <div key={index} className="highlight-item-page">
                      <span className="highlight-icon-page">⭐</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technical Details */}
              <motion.div 
                className="info-section-page"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3>Technical Implementation</h3>
                <div className="technical-details-page">
                  {project.technicalImplementation ? 
                    project.technicalImplementation.map((detail, index) => (
                      <div key={index} className="technical-item-page">
                        <div className="technical-icon-page">
                          <Code size={20} />
                        </div>
                        <div className="technical-content-page">
                          <p>{detail}</p>
                        </div>
                      </div>
                    ))
                    :
                    getProjectTechnicalDetails(project).map((detail, index) => (
                      <div key={index} className="technical-item-page">
                        <div className="technical-icon-page">
                          {detail.icon}
                        </div>
                        <div className="technical-content-page">
                          <h5>{detail.title}</h5>
                          <p>{detail.description}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </motion.div>

              {/* Challenges & Solutions */}
              <motion.div 
                className="info-section-page"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3>Challenges & Solutions</h3>
                <div className="challenges-page">
                  {project.challengesAndSolutions ? 
                    project.challengesAndSolutions.map((challenge, index) => (
                      <div key={index} className="challenge-item-page">
                        <div className="challenge-icon-page">
                          <span>⚡</span>
                        </div>
                        <div className="challenge-content-page">
                          <p>{challenge}</p>
                        </div>
                      </div>
                    ))
                    :
                    getProjectChallenges(project).map((challenge, index) => (
                      <div key={index} className="challenge-item-page">
                        <div className="challenge-icon-page">
                          <span>⚡</span>
                        </div>
                        <div className="challenge-content-page">
                          <h5>{challenge.title}</h5>
                          <p>{challenge.description}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Helper function to get project highlights
const getProjectHighlights = (project) => {
  const highlights = {
    1: [
      "Real-time ride tracking with live geolocation updates",
      "Smart fare estimation based on distance and time calculations",
      "Dual role-based dashboards for riders and captains with GSAP animations",
      "WebSocket-based instant messaging and booking acknowledgments",
      "Google Maps API integration for dynamic route tracking and location sharing",
      "Mobile-first responsive design with TailwindCSS"
    ],
    2: [
      "Vision Transformer (ViT) with patch-embedding architecture for high-resolution fundus images",
      "CBAM (Convolutional Block Attention Module) for enhanced feature refinement",
      "Focal Loss optimization to handle severe class imbalance in medical data",
      "Advanced data augmentation with WeightedRandomSampler for minority class oversampling",
      "Dynamic learning rate scheduling with ReduceLROnPlateau for optimal convergence",
      "Comprehensive metrics tracking with precision, recall, and F1 score evaluation"
    ],
    3: [
      "Full CRUD operations for campgrounds and user reviews with dynamic content management",
      "Cloudinary API integration for secure, scalable image uploads and optimized hosting",
      "JWT-based authentication with role-based access control for Admins and users",
      "Server-side rendering with EJS templates and Bootstrap responsive design",
      "Real-time form validation with robust error-handling middleware",
      "Enhanced user experience with interactive UI components"
    ],
    4: [
      "Production-ready REST API following clean architectural principles",
      "Modular MVC architecture with separated concerns across all layers",
      "Advanced collaboration features with task sharing and workspace management",
      "Analytics endpoints for productivity metrics and task status tracking",
      "Recurring tasks and dependency linking with deep filtering capabilities",
      "Multer-based file handling with avatar and attachment upload support"
    ]
  }
  return highlights[project.id] || []
}

// Helper function to get technical implementation details
const getProjectTechnicalDetails = (project) => {
  const details = {
    1: [
      {
        icon: <Server size={20} />,
        title: "Real-time Communication & WebSocket Implementation",
        description: "Socket.IO implementation for live ride status updates, captain availability tracking, and instant messaging between riders and captains with real-time booking acknowledgments."
      },
      {
        icon: <Database size={20} />,
        title: "Secure Authentication & Role Management",
        description: "JWT-based authentication system with MongoDB session persistence, supporting dual role flows for riders and captains with secure login state management."
      },
      {
        icon: <Code size={20} />,
        title: "Interactive Frontend & Geolocation",
        description: "GSAP animations with TailwindCSS for smooth transitions, Google Maps API integration for dynamic route tracking, and mobile-first responsive design."
      }
    ],
    2: [
      {
        icon: <Brain size={20} />,
        title: "Vision Transformer Architecture",
        description: "Custom ViT implementation with patch-embedding, class tokens, and positional encoding specifically designed for high-resolution fundus image classification."
      },
      {
        icon: <Database size={20} />,
        title: "Advanced Attention Mechanisms",
        description: "CBAM (Convolutional Block Attention Module) integration for channel and spatial attention refinement before transformer processing, enhancing feature extraction."
      },
      {
        icon: <Code size={20} />,
        title: "Optimized Training Pipeline",
        description: "Focal Loss for class imbalance handling, WeightedRandomSampler for minority class oversampling, and ReduceLROnPlateau scheduler for dynamic learning rate adjustment."
      }
    ],
    3: [
      {
        icon: <Server size={20} />,
        title: "Full-Stack CRUD Architecture",
        description: "Complete MERN stack implementation with EJS server-side rendering, supporting dynamic campground and review management with real-time content updates."
      },
      {
        icon: <Database size={20} />,
        title: "Cloud Media Management",
        description: "Cloudinary API integration for secure, scalable image uploads with automatic optimization, transformation, and CDN delivery for campground media."
      },
      {
        icon: <Code size={20} />,
        title: "Enhanced User Experience",
        description: "Bootstrap responsive design with real-time form validation, comprehensive error handling middleware, and role-based access control for seamless user interaction."
      }
    ],
    4: [
      {
        icon: <Server size={20} />,
        title: "Production-Ready API Design",
        description: "Clean MVC architecture with modular design, separated concerns across routes, controllers, models, and middleware layers for scalable backend development."
      },
      {
        icon: <Database size={20} />,
        title: "Advanced Data Operations",
        description: "MongoDB aggregation pipelines for analytics, productivity metrics tracking, and complex queries with deep filtering and search capabilities."
      },
      {
        icon: <Code size={20} />,
        title: "Collaboration & File Management",
        description: "Multer-based file handling for avatars and attachments, task dependency linking, recurring task management, and workspace collaboration features."
      }
    ]
  }
  return details[project.id] || []
}

// Helper function to get project challenges
const getProjectChallenges = (project) => {
  const challenges = {
    1: [
      {
        title: "Real-time State Synchronization",
        description: "Managing consistent state across multiple connected clients (riders, captains) while handling network interruptions and ensuring data integrity."
      },
      {
        title: "Geolocation Accuracy & Performance",
        description: "Implementing precise location tracking while optimizing battery usage and handling GPS signal variations in different environments."
      },
      {
        title: "Scalable WebSocket Architecture",
        description: "Designing Socket.IO implementation that can handle concurrent connections while maintaining low latency for real-time updates."
      }
    ],
    2: [
      {
        title: "Medical Data Class Imbalance",
        description: "Handling severely imbalanced datasets where healthy cases vastly outnumber diabetic retinopathy cases, requiring specialized sampling techniques."
      },
      {
        title: "High-Resolution Image Processing",
        description: "Processing large fundus images while maintaining computational efficiency and avoiding memory overflow during batch training."
      },
      {
        title: "Attention Mechanism Integration",
        description: "Successfully combining CBAM with Vision Transformer architecture without degrading performance or causing gradient flow issues."
      }
    ],
    3: [
      {
        title: "Image Upload Optimization",
        description: "Implementing efficient image compression and upload workflows while maintaining quality and handling various file formats securely."
      },
      {
        title: "Role-Based Access Control",
        description: "Designing flexible permission systems that allow different user roles while maintaining security and preventing unauthorized access."
      },
      {
        title: "Server-Side Rendering Performance",
        description: "Optimizing EJS template rendering and database queries to maintain fast page load times as data grows."
      }
    ],
    4: [
      {
        title: "Complex Task Dependencies",
        description: "Implementing task dependency graphs that prevent circular dependencies while allowing flexible project management workflows."
      },
      {
        title: "Scalable Analytics Pipeline",
        description: "Building efficient aggregation queries for real-time analytics without impacting API performance as data volume increases."
      },
      {
        title: "Concurrent File Operations",
        description: "Managing simultaneous file uploads and processing while ensuring data consistency and preventing conflicts in shared workspaces."
      }
    ]
  }
  return challenges[project.id] || []
}

export default ProjectDetail
