import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'

const DogAnimation = ({ isPlaying, onComplete }) => {
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(onComplete, 4000) // Extended animation duration
      return () => clearTimeout(timer)
    }
  }, [isPlaying, onComplete])

  if (!isPlaying) return null

  return (
    <motion.div
      initial={{ scale: 0, rotate: 0, y: 50 }}
      animate={{ 
        scale: [0, 1.3, 1.1, 1.2, 1, 0.9, 0],
        rotate: [0, 15, -10, 8, -5, 3, 0],
        y: [50, -80, -100, -85, -70, -50, 20]
      }}
      transition={{ 
        duration: 4,
        times: [0, 0.25, 0.4, 0.6, 0.75, 0.9, 1],
        ease: "easeInOut"
      }}
      style={{
        position: 'absolute',
        bottom: '70px',
        right: '-10px',
        width: '100px',
        height: '100px',
        zIndex: 100000,
        pointerEvents: 'none'
      }}
    >
      {/* Enhanced 3D Dog Body */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(20deg) rotateY(-20deg)'
      }}>
        {/* Dog Head - Enhanced */}
        <motion.div
          animate={{
            rotateY: [0, 20, -20, 15, -15, 10, 0],
            scaleX: [1, 1.15, 0.85, 1.1, 0.9, 1.05, 1],
            rotateZ: [0, 5, -5, 3, -3, 0]
          }}
          transition={{
            duration: 4,
            times: [0, 0.3, 0.45, 0.6, 0.75, 0.85, 1],
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '5px',
            left: '25px',
            width: '50px',
            height: '45px',
            backgroundColor: '#FFD700',
            borderRadius: '60% 60% 45% 45%',
            border: '3px solid #000',
            boxShadow: '0 6px 12px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.3)',
            transform: 'translateZ(8px)',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FFB300 100%)'
          }}
        >
          {/* Enhanced Eyes with pupils */}
          <motion.div
            animate={{
              scaleY: [1, 0.1, 1, 0.3, 1],
              scaleX: [1, 1.2, 1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              times: [0, 0.3, 0.35, 0.7, 1]
            }}
            style={{
              position: 'absolute',
              top: '12px',
              left: '10px',
              width: '8px',
              height: '8px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              border: '2px solid #000'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '1px',
              left: '1px',
              width: '4px',
              height: '4px',
              backgroundColor: '#000',
              borderRadius: '50%'
            }} />
          </motion.div>
          
          <motion.div
            animate={{
              scaleY: [1, 0.1, 1, 0.3, 1],
              scaleX: [1, 1.2, 1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              times: [0, 0.3, 0.35, 0.7, 1]
            }}
            style={{
              position: 'absolute',
              top: '12px',
              right: '10px',
              width: '8px',
              height: '8px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              border: '2px solid #000'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '1px',
              left: '1px',
              width: '4px',
              height: '4px',
              backgroundColor: '#000',
              borderRadius: '50%'
            }} />
          </motion.div>
          
          {/* Enhanced Nose */}
          <motion.div
            animate={{
              scale: [1, 1.3, 0.8, 1.2, 0.9, 1],
              rotateZ: [0, 10, -10, 5, 0]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '22px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '6px',
              height: '5px',
              backgroundColor: '#000',
              borderRadius: '50%',
              boxShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}
          />
          
          {/* Mouth */}
          <motion.div
            animate={{
              scaleY: [1, 1.8, 0.5, 1.5, 0.7, 1],
              scaleX: [1, 1.2, 0.8, 1.1, 0.9, 1]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '28px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '12px',
              height: '4px',
              border: '2px solid #000',
              borderTop: 'none',
              borderRadius: '0 0 10px 10px'
            }}
          />
          
          {/* Enhanced Ears with inner detail */}
          <motion.div
            animate={{
              rotateZ: [-25, -35, -15, -30, -20, -25],
              scaleY: [1, 1.2, 0.9, 1.1, 1]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '-8px',
              left: '2px',
              width: '16px',
              height: '20px',
              backgroundColor: '#FFC107',
              borderRadius: '60% 60% 0% 80%',
              border: '2px solid #000',
              transform: 'rotate(-25deg)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '3px',
              left: '3px',
              width: '8px',
              height: '10px',
              backgroundColor: '#FFB300',
              borderRadius: '50% 50% 0% 70%',
              border: '1px solid #000'
            }} />
          </motion.div>
          
          <motion.div
            animate={{
              rotateZ: [25, 35, 15, 30, 20, 25],
              scaleY: [1, 1.2, 0.9, 1.1, 1]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '-8px',
              right: '2px',
              width: '16px',
              height: '20px',
              backgroundColor: '#FFC107',
              borderRadius: '60% 60% 80% 0%',
              border: '2px solid #000',
              transform: 'rotate(25deg)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '3px',
              right: '3px',
              width: '8px',
              height: '10px',
              backgroundColor: '#FFB300',
              borderRadius: '50% 50% 70% 0%',
              border: '1px solid #000'
            }} />
          </motion.div>
        </motion.div>

        {/* Enhanced Dog Body */}
        <motion.div
          animate={{
            scaleY: [1, 1.1, 0.9, 1.05, 0.95, 1],
            rotateZ: [0, 3, -3, 2, -1, 0]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '40px',
            left: '15px',
            width: '60px',
            height: '35px',
            backgroundColor: '#FFD700',
            borderRadius: '25px',
            border: '3px solid #000',
            boxShadow: '0 6px 12px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.2)',
            transform: 'translateZ(4px)',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 70%, #FFB300 100%)'
          }}
        >
          {/* Chest marking */}
          <div style={{
            position: 'absolute',
            top: '8px',
            left: '15px',
            width: '30px',
            height: '15px',
            backgroundColor: '#FFF8DC',
            borderRadius: '50%',
            border: '1px solid #000',
            opacity: 0.7
          }} />
        </motion.div>

        {/* Enhanced Legs with paws */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{
              scaleY: [1, 0.7, 1.3, 0.8, 1.1, 1],
              rotateZ: [0, (i % 2 ? 5 : -5), (i % 2 ? -3 : 3), 0]
            }}
            transition={{
              duration: 4,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: '65px',
              left: `${22 + (i * 12)}px`,
              width: '8px',
              height: '20px',
              backgroundColor: '#FFD700',
              borderRadius: '4px 4px 6px 6px',
              border: '2px solid #000',
              transformOrigin: 'top',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
              background: 'linear-gradient(180deg, #FFD700 0%, #FFC107 100%)'
            }}
          >
            {/* Paw */}
            <div style={{
              position: 'absolute',
              bottom: '-3px',
              left: '-2px',
              width: '12px',
              height: '8px',
              backgroundColor: '#000',
              borderRadius: '6px',
              border: '1px solid #333'
            }} />
          </motion.div>
        ))}

        {/* Enhanced Tail with curve */}
        <motion.div
          animate={{
            rotateZ: [15, 45, -10, 35, -5, 25, 15],
            scaleX: [1, 1.3, 0.8, 1.2, 0.9, 1.1, 1],
            rotateY: [0, 20, -10, 15, 0]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '45px',
            right: '-5px',
            width: '25px',
            height: '6px',
            backgroundColor: '#FFD700',
            borderRadius: '3px 8px 8px 3px',
            border: '2px solid #000',
            transformOrigin: 'left center',
            transform: 'rotate(15deg)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
            background: 'linear-gradient(90deg, #FFD700 0%, #FFC107 100%)'
          }}
        >
          {/* Tail tip */}
          <div style={{
            position: 'absolute',
            right: '-3px',
            top: '-1px',
            width: '8px',
            height: '8px',
            backgroundColor: '#FFF8DC',
            borderRadius: '50%',
            border: '1px solid #000'
          }} />
        </motion.div>

        {/* Enhanced Bark Effect - Left Side */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 0 }}
          animate={{
            scale: [0, 1.2, 1, 1.1, 0],
            opacity: [0, 1, 1, 1, 0],
            x: [0, -25, -45, -65, -85],
            y: [0, -5, -10, -5, 0]
          }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            repeat: 2,
            repeatDelay: 0.6
          }}
          style={{
            position: 'absolute',
            top: '-5px',
            left: '-90px',
            padding: '8px 12px',
            backgroundColor: '#fff',
            border: '3px solid #000',
            borderRadius: '20px 20px 20px 5px',
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#000',
            whiteSpace: 'nowrap',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            transform: 'translateZ(10px)'
          }}
        >
          WOOF! 🐕
        </motion.div>

        {/* Greeting Text - Left Side */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 0 }}
          animate={{
            scale: [0, 1, 1, 1, 0],
            opacity: [0, 1, 1, 1, 0],
            x: [0, -30, -50, -70, -90],
            y: [20, 15, 10, 5, 0]
          }}
          transition={{
            duration: 1.5,
            delay: 2.5
          }}
          style={{
            position: 'absolute',
            top: '20px',
            left: '-120px',
            padding: '6px 10px',
            backgroundColor: '#FFD700',
            border: '2px solid #000',
            borderRadius: '15px 15px 15px 3px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#000',
            whiteSpace: 'nowrap',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 3px 6px rgba(0,0,0,0.3)',
            transform: 'translateZ(10px)'
          }}
        >
          Hi! Ask me anything! 💬
        </motion.div>
      </div>
    </motion.div>
  )
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDogPlaying, setIsDogPlaying] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Annuj's AI assistant. I can tell you about his projects, skills, achievements, and more. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  // Auto-play dog animation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) { // Only play when chat is closed
        setIsDogPlaying(true)
      }
    }, 10000) // Every 10 seconds

    return () => clearInterval(interval)
  }, [isOpen])

  const handleChatButtonClick = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      // Play dog animation when opening chat
      setIsDogPlaying(true)
    }
  }

  const handleDogAnimationComplete = () => {
    setIsDogPlaying(false)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Advanced response generation with comprehensive knowledge
  const generateAdvancedResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    // Greetings
    if (message.match(/\b(hi|hello|hey|greetings)\b/)) {
      const greetings = [
        "Hello! 🙌 I'm Annuj's comprehensive AI assistant with detailed knowledge about his journey from achieving Global Rank 2 in CODEGODA 2024 to his impressive full-stack projects. What interests you most?",
        "Hi there! 👋 I can provide in-depth information about Annuj Kumar - his CGPA of 9.09 at VIT Chennai, competitive programming excellence, and detailed project breakdowns. How can I help?",
        "Welcome! ✨ I'm here to share insights about Annuj's technical journey, from his Delhi Transit transportation system to his secure PawnGold platform. What would you like to explore?"
      ]
      return greetings[Math.floor(Math.random() * greetings.length)]
    }

    // Contact information
    if (message.match(/\b(contact|email|phone|reach|hire|linkedin|github)\b/)) {
      return "📞 **Contact Annuj Kumar:**\n\n📧 Email: annujkumar@example.com\n📱 Phone: +91-XXXXXXXXXX\n💼 LinkedIn: [LinkedIn Profile]\n🐙 GitHub: [GitHub Profile]\n📍 Location: Chennai, India\n\n💼 Available for full-time opportunities and exciting internships!"
    }

    // Projects - Delhi Transit
    if (message.match(/\b(delhi|transit|bus|transport|tracking)\b/)) {
      return "🚌 **Delhi Transit - Real-time Bus Tracking System**\n\n🎯 **Overview:** Revolutionary public transportation solution for Delhi\n\n💻 **Tech Stack:**\n• Frontend: React.js, TailwindCSS\n• Backend: Node.js, Express.js\n• Database: MongoDB\n• APIs: Google Maps API, Real-time GPS\n\n🚀 **Key Features:**\n• Live bus location tracking\n• Route optimization algorithms\n• Fare calculation system\n• Real-time arrival predictions\n• User-friendly mobile interface\n\n🏆 **Impact:** Improving daily commute for thousands of Delhi residents!"
    }

    // Projects - PawnGold
    if (message.match(/\b(pawn|gold|trading|security|authentication)\b/)) {
      return "🥇 **PawnGold - Secure Digital Gold Trading Platform**\n\n🎯 **Overview:** Enterprise-grade secure platform for digital gold transactions\n\n💻 **Tech Stack:**\n• Backend: Node.js, Express.js\n• Database: MongoDB with Redis caching\n• Security: JWT tokens, bcrypt encryption\n• Payments: Razorpay integration\n\n🔒 **Security Features:**\n• Multi-layer authentication system\n• Encrypted transaction processing\n• Real-time fraud detection\n• Secure payment gateway integration\n• Session management with Redis\n\n💰 **Business Impact:** Enabling safe and efficient gold trading for modern investors!"
    }

    // General Projects
    if (message.match(/\b(project|projects|work|portfolio|development)\b/)) {
      return "🚀 **Annuj's Project Portfolio:**\n\n🌟 **Featured Projects:**\n\n1️⃣ **Delhi Transit** - Real-time Bus Tracking\n• React.js + Node.js + MongoDB\n• Google Maps API integration\n• Live GPS tracking & route optimization\n\n2️⃣ **PawnGold** - Secure Gold Trading Platform\n• Enterprise-grade security architecture\n• Multi-layer authentication\n• Payment gateway integration\n\n🎯 **Project Highlights:**\n• Full-stack development expertise\n• Real-world problem solving\n• Scalable architecture design\n• Modern tech stack implementation\n\nWant to know more about any specific project?"
    }

    // Technical Skills
    if (message.match(/\b(skill|skills|technology|technologies|programming|languages|tech|stack)\b/)) {
      return "💻 **Annuj's Technical Expertise:**\n\n🌟 **Programming Languages:**\n• Python (95% proficiency) - AI/ML, Backend\n• JavaScript (94% proficiency) - Full-stack web\n• C++ (92% proficiency) - Competitive programming\n• Java (93% proficiency) - Enterprise applications\n\n🎨 **Frontend Technologies:**\n• React.js - Modern component-based UIs\n• TailwindCSS - Responsive design systems\n• Bootstrap - Rapid prototyping\n• HTML5/CSS3 - Semantic web development\n\n⚡ **Backend Technologies:**\n• Node.js & Express.js - Scalable server architecture\n• MongoDB - NoSQL database design\n• PostgreSQL - Relational database management\n• Redis - Caching and session management\n\n🤖 **AI/ML Expertise:**\n• CNN & RNN - Deep learning models\n• Transformers - Advanced NLP\n• Natural Language Processing\n• Machine Learning algorithms\n\n🛠️ **Development Tools:**\n• Git & GitHub - Version control\n• VS Code - IDE optimization\n• Postman - API testing\n• Docker - Containerization\n\nStrong foundation in both frontend and backend development!"
    }

    // Achievements
    if (message.match(/\b(achievement|achievements|rank|ranking|codegoda|goldman|sachs|competition|competitive)\b/)) {
      return "🏆 **Annuj's Major Achievements:**\n\n🥈 **Global Rank 2 in CODEGODA 2024**\n• Organized by Goldman Sachs\n• Competed against thousands of global programmers\n• Demonstrated exceptional algorithmic thinking\n• Top 0.1% worldwide performance\n\n🎓 **Academic Excellence:**\n• CGPA: 9.09 at VIT Chennai\n• Consistent top performer\n• Strong theoretical and practical knowledge\n\n💡 **Technical Recognition:**\n• Advanced problem-solving capabilities\n• Expertise in competitive programming\n• Recognition for innovative project development\n\n🌟 **Leadership & Impact:**\n• Mentoring junior developers\n• Contributing to open-source projects\n• Building solutions for real-world problems\n\nThis achievement showcases his exceptional programming abilities and algorithmic thinking!"
    }

    // Education
    if (message.match(/\b(education|college|university|vit|chennai|cgpa|academic|degree|btech)\b/)) {
      return "🎓 **Educational Background:**\n\n🏫 **VIT Chennai (Vellore Institute of Technology)**\n• Program: B.Tech in Computer Science\n• Duration: 2022-2026\n• CGPA: 9.09 (Excellent Performance)\n\n📚 **Academic Highlights:**\n• Consistent top performer across semesters\n• Strong foundation in computer science fundamentals\n• Practical project-based learning approach\n• Active participation in coding competitions\n\n🧠 **Key Subjects Mastered:**\n• Data Structures & Algorithms\n• Database Management Systems\n• Software Engineering\n• Machine Learning & AI\n• Web Technologies\n• Computer Networks\n\n🎯 **Academic Philosophy:**\nCombining theoretical knowledge with practical implementation through real-world projects!"
    }

    // Experience and Career
    if (message.match(/\b(experience|career|internship|job|work|professional|hire|hiring)\b/)) {
      return "💼 **Professional Journey & Opportunities:**\n\n🚀 **Current Status:**\n• Final year B.Tech student (2022-2026)\n• Actively seeking internships and full-time opportunities\n• Open to both remote and on-site positions\n\n💡 **Professional Strengths:**\n• Full-stack development expertise\n• Problem-solving mindset\n• Strong algorithmic foundation\n• Team collaboration skills\n• Continuous learning attitude\n\n🎯 **Career Interests:**\n• Software Development Engineer roles\n• Full-stack development positions\n• AI/ML engineering opportunities\n• Product development teams\n• Startup environments\n\n📋 **What I Bring:**\n• Proven track record (Global Rank 2 CODEGODA)\n• Real-world project experience\n• Academic excellence (CGPA 9.09)\n• Modern technology stack proficiency\n\n📞 Ready to contribute to innovative teams and impactful projects!"
    }

    // AI and Machine Learning
    if (message.match(/\b(ai|artificial|intelligence|machine|learning|ml|deep|neural|cnn|rnn|transformer)\b/)) {
      return "🤖 **AI/ML Expertise:**\n\n🧠 **Core Technologies:**\n• Convolutional Neural Networks (CNN)\n• Recurrent Neural Networks (RNN)\n• Transformer architectures\n• Natural Language Processing (NLP)\n\n📊 **Specializations:**\n• Deep Learning model development\n• Computer Vision applications\n• Text processing and analysis\n• Predictive modeling\n\n🛠️ **Tools & Frameworks:**\n• TensorFlow & PyTorch\n• Scikit-learn\n• Pandas & NumPy\n• Jupyter Notebooks\n\n🎯 **Applications:**\n• Intelligent chatbot development\n• Image recognition systems\n• Natural language understanding\n• Data-driven decision making\n\nCombining AI expertise with full-stack development for innovative solutions!"
    }

    // Default response with comprehensive options
    return "I can help you learn about Annuj Kumar! Ask me about:\n\n🚀 **Projects:**\n• Delhi Transit (Real-time bus tracking)\n• PawnGold (Secure gold trading platform)\n\n💻 **Technical Skills:**\n• Programming languages (Python, JavaScript, C++, Java)\n• Full-stack development (React, Node.js, MongoDB)\n• AI/ML technologies (CNN, RNN, Transformers)\n\n🏆 **Achievements:**\n• Global Rank 2 in CODEGODA 2024 (Goldman Sachs)\n• Academic excellence (CGPA 9.09 at VIT Chennai)\n\n🎓 **Education & Career:**\n• B.Tech Computer Science at VIT Chennai\n• Professional opportunities and experience\n\n📧 **Contact Information:**\n• How to reach him for opportunities\n\nWhat interests you most? Feel free to ask specific questions! 😊"
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentInput = inputMessage
    setInputMessage('')
    setIsTyping(true)

    // Realistic typing simulation
    const responseText = generateAdvancedResponse(currentInput)
    const typingDelay = Math.min(1000 + (responseText.length / 50), 3000)

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: responseText,
        isBot: true,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, typingDelay)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Dog Animation */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 99999 }}>
        <DogAnimation 
          isPlaying={isDogPlaying} 
          onComplete={handleDogAnimationComplete}
        />
      </div>

      {/* Chat Button - Black outlined chat symbol on yellow background */}
      <div
        onClick={handleChatButtonClick}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99998,
          width: '64px',
          height: '64px',
          backgroundColor: '#facc15',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          border: '3px solid #000',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)'
          e.target.style.backgroundColor = '#fbbf24'
          // Trigger dog animation on hover
          if (!isDogPlaying) {
            setIsDogPlaying(true)
          }
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)'
          e.target.style.backgroundColor = '#facc15'
        }}
      >
        <MessageCircle size={32} color="#000" strokeWidth={2.5} />
      </div>
    </>
  )
}

export default Chatbot
