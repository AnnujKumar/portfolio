import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
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
      {/* Chat Button - Black outlined chat symbol on yellow background */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99999,
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
