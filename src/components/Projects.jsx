import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, ArrowRight, Calendar, Code, Database, Server, Brain } from 'lucide-react'
import ProjectDetail from './ProjectDetail'

const Projects = ({ onProjectSelect }) => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "RideIt – MERN Stack Ride Booking Platform",
      description: "A real-time ride booking app with live geolocation, instant captain updates, and smart fare estimation.",
      image: "RideIt Platform",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "JWT", "Google Maps API", "GSAP", "TailwindCSS"],
      category: "fullstack",
      github: "https://github.com/AnnujKumar/RideIt.git",
      live: "",
      features: [
        "Role-Based Dashboards (GSAP + TailwindCSS): Built distinct, interactive interfaces for riders and captains with smooth transitions and mobile-first responsiveness.",
        "Authentication & Role System (JWT + MongoDB): Developed secure login flows for both riders and captains, supporting ride state persistence.",
        "Real-Time Backend (Socket.IO): Enabled live ride status, captain availability updates, and booking acknowledgments with WebSocket-based messaging.",
        "Maps Integration (Google Maps API): Implemented dynamic route tracking and location sharing with fare calculation based on distance and time."
      ]
    },
    {
      id: 2,
      title: "Diabetic Retinopathy Detection (ViT + CBAM)",
      description: "Transformer-based deep learning model for retinal disease classification with advanced attention mechanisms.",
      image: "AI Medical Detection",
      technologies: ["Python", "PyTorch", "torchvision", "scikit-learn", "Matplotlib", "Vision Transformer (ViT)", "CBAM", "Focal Loss"],
      category: "ai",
      github: "https://github.com/AnnujKumar/Diabetic-Retinopathy-Detection-Vision-Transformer-",
      live: "",
      features: [
        "Vision Transformer (ViT): Constructed a patch-embedding transformer architecture with class tokens and positional encoding for high-resolution fundus image classification.",
        "CBAM Module: Integrated Channel and Spatial Attention mechanisms to improve feature refinement in fundus scans before transformer processing.",
        "Focal Loss Optimization: Applied Focal Loss to handle class imbalance and improve model focus on minority classes.",
        "Augmentation & Sampling: Used advanced augmentations (flip, rotate, color jitter) and WeightedRandomSampler to oversample minority classes.",
        "Metrics & Logging: Tracked accuracy, precision, recall, and F1 score across training and validation sets, and implemented dynamic learning rate scheduling."
      ]
    },
    {
      id: 3,
      title: "CampIndia – Campground Management Web App",
      description: "A full-stack platform for campground listings, user reviews, and profile management.",
      image: "CampIndia Platform",
      technologies: ["MongoDB", "Express.js", "Node.js", "EJS", "Bootstrap", "Cloudinary", "JWT"],
      category: "fullstack",
      github: "https://github.com/AnnujKumar/CampIndia.git",
      live: "",
      features: [
        "Full CRUD Functionality: Developed complete Create, Read, Update, and Delete operations for campgrounds and review components to support dynamic user-generated content.",
        "Media Upload Integration: Used the Cloudinary API to enable secure, scalable image uploads and optimized hosting for campground media.",
        "Authentication & Access Control: Implemented a secure JWT-based authentication system and designed role-based access for Admins and regular users.",
        "Responsive Frontend: Designed a mobile-friendly, interactive UI using Bootstrap and server-side rendering with EJS templates.",
        "Enhanced User Experience: Integrated real-time form validation and robust error-handling middleware to ensure smooth user interaction and feedback."
      ]
    },
    {
      id: 4,
      title: "Task Manager API – Backend Collaboration System",
      description: "A production-ready REST API for managing tasks, projects, and team collaboration using Node.js and MongoDB.",
      image: "Task Manager API",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
      category: "backend",
      github: "https://github.com/AnnujKumar/Taskmanager",
      live: "",
      features: [
        "Modular Architecture: Followed clean architectural principles with well-separated concerns across routes, controllers, models, and middleware layers.",
        "Authentication & Authorization: Enabled secure, scalable user management through JWT authentication and role-based access control.",
        "Collaboration Features: Built features for task sharing, workspace collaboration, and fine-grained permission handling with user-level audit trails.",
        "Analytics & Insights: Developed endpoints to track productivity metrics, task status, overdue counts, and category-based analytics.",
        "Advanced Functionality: Implemented recurring tasks, dependency linking between tasks, deep filtering, and powerful search capabilities.",
        "File Handling: Added support for avatar and attachment uploads using Multer with strict file validation and secure, persistent storage."
      ]
    },
    {
      id: 5,
      title: "Delhi Transit – Smart Route Management System",
      description: "Hackathon team project addressing DTC's resource management challenges. I led frontend development using React.js and designed core scheduling algorithms to create a comprehensive transit management system with intelligent crew scheduling and route optimization for Delhi's public transportation.",
      image: "Delhi Transit System",
      technologies: ["React.js", "Flask", "MySQL", "Python", "Algorithm Design", "Route Optimization", "Chart.js", "CSS3"],
      category: "hackathon",
      github: "https://github.com/AnnujKumar/Delhi-Transit-",
      live: "",
      problemStatement: "Delhi Transport Corporation (DTC) manages a massive fleet of buses with thousands of crew members, routes, and scheduling conflicts. The challenge was to develop efficient scheduling algorithms to optimize resource allocation, minimize operational costs, and ensure seamless public transportation service across Delhi's extensive network.",
      myRole: "Frontend Development Lead & Algorithm Designer - Responsible for complete React.js frontend architecture and design of all core scheduling algorithms including linked/unlinked duty scheduling, route optimization, and resource allocation systems.",
      features: [
        "Algorithm Design & Frontend Leadership: Designed core scheduling algorithms (linked/unlinked duty scheduling, route optimization) while leading complete React.js frontend development with responsive design principles.",
        "Scheduling Algorithm Development: Created efficient algorithms for crew-to-bus assignment, duty cycle monitoring, rest period management, and resource reallocation to handle DTC's large-scale operations.",
        "Interactive Route Visualization: Built dynamic route mapping components with real-time visual representations of bus networks using Chart.js and custom CSS animations for algorithm output display.",
        "Resource Management Interface: Developed comprehensive dashboards for managing thousands of crew members, buses, and routes with drag-drop functionality and real-time status updates.",
        "Algorithm Optimization Tools: Created interactive interfaces for route planning with automatic overlap detection algorithms, allowing planners to visualize conflicts and optimize network efficiency.",
        "Performance-Optimized Frontend: Applied React optimization techniques including component memoization, efficient state management, and lazy loading to handle large-scale transit data seamlessly."
      ],
      highlights: [
        "🏆 Hackathon Development: Built complete solution within tight deadline constraints while maintaining code quality and user experience standards",
        "🎨 Frontend Architecture: Designed modular React component structure enabling easy maintenance and feature expansion",
        "📊 Data Visualization: Created compelling visual representations of complex transit data making system insights accessible to non-technical users",
        "🔄 Real-time Updates: Implemented live data synchronization between frontend and backend for immediate reflection of scheduling changes"
      ],
      technicalImplementation: [
        "Scheduling Algorithm Design: Developed core algorithms for linked duty scheduling (crew-to-bus assignment with full cycle tracking), unlinked duty scheduling (handover management with rest optimization), and resource allocation for large-scale operations.",
        "Route Optimization Algorithms: Created algorithms for route overlap detection, conflict resolution, and network efficiency optimization to handle DTC's extensive route network with minimal congestion.",
        "React.js Architecture: Built scalable frontend with functional components using React Hooks (useState, useEffect, useContext), implemented custom hooks for algorithm data management and API calls.",
        "Algorithm Visualization: Integrated Chart.js for dynamic visualization of scheduling algorithm outputs, route optimization results, and real-time resource allocation dashboards.",
        "State Management: Utilized React Context API for global state management of algorithm results, scheduling data, and user interactions with local component state for UI responsiveness.",
        "Flask REST API Integration: Developed comprehensive API layer connecting algorithm outputs with frontend, implemented error handling, loading states, and data validation for complex scheduling operations.",
        "MySQL Database Design: Collaborated on normalized database schema optimized for algorithm queries, route data, crew information, and scheduling constraints with efficient indexing.",
        "Performance Optimization: Applied React.memo for algorithm result components, lazy loading for route visualization, debounced search for large datasets, and memoization for expensive algorithm calculations.",
        "Responsive Algorithm UI: Implemented CSS Grid and Flexbox layouts ensuring algorithm interfaces work seamlessly across devices with touch-friendly controls for mobile scheduling.",
        "Real-time Algorithm Sync: Developed polling mechanism for live updates of algorithm outputs, crew assignments, and route optimizations with efficient state synchronization across components."
      ],
      challengesAndSolutions: [
        "Large-Scale Resource Optimization: The primary challenge was optimizing the scheduling process for thousands of buses, conductors, drivers, and support staff across Delhi's massive transportation network while ensuring no resource is over-exploited or sitting idle.",
        "Balanced Workload Distribution: Developed efficient and reliable algorithms to distribute workload evenly among drivers and conductors, preventing burnout while maximizing resource utilization and operational efficiency.",
        "Mandatory Rest Period Management: Created sophisticated algorithms to ensure proper rest periods for drivers and conductors as per labor regulations, while maintaining continuous service coverage across all routes.",
        "Dynamic Resource Reallocation: Implemented real-time algorithms to handle unexpected situations like vehicle breakdowns, staff unavailability, or route changes, ensuring seamless service continuation without compromising worker welfare."
      ]
    },
    {
      id: 6,
      title: "PawnGold – Pawn Jewellery Retail Management System",
      description: "Comprehensive pawn jewellery management system for retail shops with multi-branch operations. Backend is robustly built with efficient algorithm optimizations, while frontend is currently in development (50% complete).",
      image: "PawnGold Management System",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "RESTful APIs", "React.js", "Algorithm Optimization", "Security & Compliance"],
      category: "backend",
      github: "https://github.com/AnnujKumar/PawnGold",
      live: "",
      problemStatement: "Pawn jewellery retail shops needed a comprehensive management system to handle gold loans across multiple branches with role-based access for owners, branch heads, and customers. The challenge was creating a secure, scalable system for loan management, interest calculations, and customer engagement.",
      myRole: "Backend Development Lead & System Architect - Responsible for designing and implementing the complete backend architecture, database schema, authentication systems, and algorithm optimizations for loan calculations and multi-branch operations.",
      features: [
        "Robust Backend Architecture: Built structured and scalable Node.js backend with Express.js framework, implementing efficient algorithms for loan calculations, interest management, and multi-branch data synchronization.",
        "Multi-Branch Management System: Developed comprehensive branch management with role-based access control for owners, branch heads, managers, and employees with secure authentication using JWT tokens.",
        "Gold Loan Management Engine: Created sophisticated loan processing system handling gold weight valuation, loan amount calculations, monthly interest tracking, and automated payment processing with closure workflows.",
        "Advanced Security Implementation: Implemented AES-256 data encryption, multi-factor authentication, audit logs for all transactions, and secure API endpoints following industry best practices.",
        "Customer Management APIs: Developed RESTful APIs for customer registration, OTP verification, loan tracking, payment history, and KYC document processing with automated verification workflows.",
        "Reports & Analytics Backend: Built powerful reporting engine with branch-wise analytics, customer transaction tracking, interest collection monitoring, and exportable report generation in multiple formats.",
        "Frontend Development Status: React.js frontend is currently in active development (50% complete) with modern UI components and responsive design patterns being implemented."
      ],
      highlights: [
        "🏗️ Enterprise-Grade Architecture: Designed scalable backend system capable of handling multiple branches and thousands of concurrent users",
        "🔐 Advanced Security: Implemented comprehensive security measures including data encryption, secure authentication, and audit logging",
        "📊 Algorithm Optimization: Developed efficient algorithms for interest calculations, loan processing, and multi-branch data synchronization",
        "🌐 API-First Design: Created robust RESTful API architecture supporting both web admin panel and mobile applications"
      ],
      technicalImplementation: [
        "Backend Architecture: Built modular Node.js application with Express.js framework, implementing clean architecture principles with separated concerns across routes, controllers, services, and data access layers.",
        "Database Design: Designed MongoDB database schema optimized for multi-branch operations, loan tracking, customer management, and transaction processing with efficient indexing and aggregation pipelines.",
        "Authentication & Authorization: Implemented JWT-based authentication system with role-based access control (RBAC) supporting multiple user roles including owners, branch heads, managers, and customers.",
        "Loan Algorithm Engine: Developed sophisticated algorithms for gold valuation, loan amount calculations, compound interest computations, EMI scheduling, and automated payment processing workflows.",
        "Security Implementation: Applied AES-256 encryption for sensitive data, implemented secure API endpoints with rate limiting, input validation, and comprehensive audit logging for compliance requirements.",
        "Payment Integration Architecture: Designed payment gateway integration framework with support for multiple payment methods, transaction reconciliation, and automated receipt generation.",
        "KYC Processing System: Built automated KYC verification system with document upload handling, verification workflows, and integration points for external KYC API services.",
        "Report Generation Engine: Created dynamic reporting system with MongoDB aggregation pipelines, data processing algorithms, and export functionality supporting Excel/PDF formats.",
        "API Documentation: Developed comprehensive RESTful API documentation with proper versioning, error handling, and response standardization for frontend integration.",
        "Performance Optimization: Implemented caching strategies with Redis, MongoDB query optimization, connection pooling, and efficient data serialization for high-performance operations."
      ],
      challengesAndSolutions: [
        "Complex Multi-Branch Data Synchronization: Challenge was ensuring real-time data consistency across multiple branches with different access levels. Solution: Implemented MongoDB replica sets with proper read/write concerns and event-driven architecture for real-time updates.",
        "Sophisticated Interest Calculation Algorithms: Developing accurate compound interest calculations for varying loan terms and payment schedules. Solution: Created modular algorithm engine with configurable interest rates, grace periods, and penalty calculations with automated testing.",
        "Secure Financial Data Management: Handling sensitive customer and financial data while maintaining performance. Solution: Implemented multi-layer security with AES-256 encryption, secure token management, and audit trails for all financial transactions.",
        "Role-Based Access Control Complexity: Managing permissions across owners, branch heads, managers, and customers with different access levels. Solution: Developed flexible RBAC system with hierarchical permissions and dynamic role assignment capabilities.",
        "Scalable Loan Processing Workflow: Handling high-volume loan applications with automated approval workflows. Solution: Built asynchronous processing system with queue management and automated decision engines for faster loan processing.",
        "Frontend Development Coordination: Ensuring seamless API integration while frontend is under development. Solution: Created comprehensive API documentation, mock endpoints, and standardized response formats for smooth frontend integration once completed."
      ]
    }
  ]

  const categories = ['all', 'frontend', 'backend', 'fullstack', 'ai', 'hackathon']

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'fullstack':
        return <Server size={16} />
      case 'backend':
        return <Database size={16} />
      case 'frontend':
        return <Code size={16} />
      case 'ai':
        return <Brain size={16} />
      case 'hackathon':
        return <Code size={16} />
      default:
        return <Code size={16} />
    }
  }

  const getCategoryColor = (category) => {
    // All categories use yellow color for consistency
    return '#FFD700'
  }

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <p>Some of my recent work</p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card enhanced"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              {/* Project Category Badge */}
              <div className="project-category-badge" style={{ backgroundColor: getCategoryColor(project.category) }}>
                {getCategoryIcon(project.category)}
                <span>{project.category.toUpperCase()}</span>
              </div>

              {/* Project Image */}
              <div className="project-header-section">
                <div className="project-title-box">
                  <h3 className="project-name">{project.title.split('–')[0].trim()}</h3>
                  {project.title.includes('–') && (
                    <p className="project-subtitle">{project.title.split('–')[1].trim()}</p>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="project-content enhanced">
                <p className="project-description">{project.description}</p>
                
                {/* Key Features Preview */}
                <div className="features-preview">
                  <h5>Key Features:</h5>
                  <ul>
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature.split(':')[0]}</li>
                    ))}
                  </ul>
                </div>

                {/* Project Action Button */}
                <div className="project-action-bottom">
                  <button 
                    className="view-project-btn"
                    onClick={() => onProjectSelect && onProjectSelect(project)}
                  >
                    <span>View Project Details</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
