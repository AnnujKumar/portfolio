import React, { useEffect, useRef } from 'react'
import './ParticleBackground.css'

const ParticleBackground = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])
  const shootingStarsRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.2 + 0.3 // Smaller dots (0.3-1.5px)
        this.opacity = Math.random() * 0.6 + 0.3 // Reduced opacity (0.3-0.9)
        this.speedX = (Math.random() - 0.5) * 0.6
        this.speedY = (Math.random() - 0.5) * 0.6
        this.blinkSpeed = Math.random() * 0.008 + 0.003 // Slower blinking
        this.blinkDirection = 1
        this.maxOpacity = Math.random() * 0.4 + 0.6 // Lower max opacity (0.6-1.0)
        this.minOpacity = Math.random() * 0.15 + 0.2 // Lower min opacity (0.2-0.35)
        this.type = Math.random() < 0.85 ? 'dot' : 'star' // More dots, fewer stars
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.008
      }

      update() {
        // Move particle
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        // Blinking effect
        this.opacity += this.blinkSpeed * this.blinkDirection
        if (this.opacity >= this.maxOpacity || this.opacity <= this.minOpacity) {
          this.blinkDirection *= -1
        }

        // Rotate stars
        if (this.type === 'star') {
          this.rotation += this.rotationSpeed
        }
      }

      drawStar(centerX, centerY, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3
        let x = centerX
        let y = centerY
        const step = Math.PI / spikes

        ctx.beginPath()
        ctx.moveTo(centerX, centerY - outerRadius)

        for (let i = 0; i < spikes; i++) {
          x = centerX + Math.cos(rot) * outerRadius
          y = centerY + Math.sin(rot) * outerRadius
          ctx.lineTo(x, y)
          rot += step

          x = centerX + Math.cos(rot) * innerRadius
          y = centerY + Math.sin(rot) * innerRadius
          ctx.lineTo(x, y)
          rot += step
        }

        ctx.lineTo(centerX, centerY - outerRadius)
        ctx.closePath()
      }

      draw() {
        ctx.save()
        
        if (this.type === 'star') {
          // Draw star
          ctx.translate(this.x, this.y)
          ctx.rotate(this.rotation)
          
          this.drawStar(0, 0, 4, this.size * 1.5, this.size * 0.7)
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
          ctx.fill()
          
          // Star glow
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 3)
          gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.15})`)
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
          
          this.drawStar(0, 0, 4, this.size * 3, this.size * 1.5)
          ctx.fillStyle = gradient
          ctx.fill()
        } else {
          // Draw dot
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
          ctx.fill()
          
          // Add a subtle glow effect
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 2
          )
          gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.2})`)
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
          
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()
        }
        
        ctx.restore()
      }
    }

    // Shooting Star class
    class ShootingStar {
      constructor() {
        this.reset()
        this.trailPoints = []
        this.maxTrailLength = 12 // Shorter tail
      }

      reset() {
        // Start from random edge of screen
        const side = Math.floor(Math.random() * 4)
        switch(side) {
          case 0: // Top
            this.x = Math.random() * canvas.width
            this.y = -20
            this.speedX = (Math.random() - 0.5) * 4
            this.speedY = Math.random() * 3 + 2
            break
          case 1: // Right
            this.x = canvas.width + 20
            this.y = Math.random() * canvas.height
            this.speedX = -(Math.random() * 3 + 2)
            this.speedY = (Math.random() - 0.5) * 4
            break
          case 2: // Bottom
            this.x = Math.random() * canvas.width
            this.y = canvas.height + 20
            this.speedX = (Math.random() - 0.5) * 4
            this.speedY = -(Math.random() * 3 + 2)
            break
          case 3: // Left
            this.x = -20
            this.y = Math.random() * canvas.height
            this.speedX = Math.random() * 3 + 2
            this.speedY = (Math.random() - 0.5) * 4
            break
        }
        
        this.size = 1 // Same size as dots
        this.opacity = 0
        this.life = 0
        this.maxLife = Math.random() * 80 + 60 // Longer life for fade effect
        this.fadeInDuration = 15 // Frames to fade in
        this.fadeOutStart = this.maxLife - 20 // When to start fading out
        this.trailPoints = []
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life++

        // Fade in effect
        if (this.life < this.fadeInDuration) {
          this.opacity = (this.life / this.fadeInDuration) * 0.8
        } 
        // Fade out effect
        else if (this.life > this.fadeOutStart) {
          const fadeOutProgress = (this.life - this.fadeOutStart) / (this.maxLife - this.fadeOutStart)
          this.opacity = 0.8 * (1 - fadeOutProgress)
        } 
        // Full visibility
        else {
          this.opacity = 0.8
        }

        // Add current position to trail
        this.trailPoints.push({
          x: this.x,
          y: this.y,
          opacity: this.opacity
        })

        // Remove old trail points
        if (this.trailPoints.length > this.maxTrailLength) {
          this.trailPoints.shift()
        }

        // Reset if out of bounds or life ended
        if (this.life >= this.maxLife || 
            this.x < -50 || this.x > canvas.width + 50 ||
            this.y < -50 || this.y > canvas.height + 50) {
          this.reset()
        }
      }

      draw() {
        if (this.trailPoints.length < 2) return

        ctx.save()
        
        // Draw subtle tail
        for (let i = 1; i < this.trailPoints.length; i++) {
          const point = this.trailPoints[i]
          const prevPoint = this.trailPoints[i - 1]
          
          // Calculate fade based on position in trail
          const trailOpacity = (i / this.trailPoints.length) * this.opacity * 0.6
          
          ctx.beginPath()
          ctx.moveTo(prevPoint.x, prevPoint.y)
          ctx.lineTo(point.x, point.y)
          ctx.strokeStyle = `rgba(255, 255, 255, ${trailOpacity})`
          ctx.lineWidth = this.size * 0.8 // Slightly smaller than the head
          ctx.lineCap = 'round'
          ctx.stroke()
        }

        // Draw star head (same size as dots)
        const currentPoint = this.trailPoints[this.trailPoints.length - 1]
        if (currentPoint) {
          // Subtle glow
          const gradient = ctx.createRadialGradient(
            currentPoint.x, currentPoint.y, 0,
            currentPoint.x, currentPoint.y, this.size * 2
          )
          gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`)
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
          
          ctx.beginPath()
          ctx.arc(currentPoint.x, currentPoint.y, this.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()

          // Star center (same size as regular dots)
          ctx.beginPath()
          ctx.arc(currentPoint.x, currentPoint.y, this.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
          ctx.fill()
        }
        
        ctx.restore()
      }
    }

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000) // Reduced density
      particlesRef.current = []
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle())
      }
    }

    // Create shooting stars
    const createShootingStars = () => {
      shootingStarsRef.current = []
      // Have 4-6 shooting stars
      const shootingStarCount = Math.floor(Math.random() * 3) + 4
      
      for (let i = 0; i < shootingStarCount; i++) {
        shootingStarsRef.current.push(new ShootingStar())
      }
    }

    // Occasionally add new shooting stars
    const addRandomShootingStar = () => {
      if (Math.random() < 0.01 && shootingStarsRef.current.length < 8) { // Low chance, max 8 stars
        shootingStarsRef.current.push(new ShootingStar())
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Update and draw shooting stars
      shootingStarsRef.current.forEach(star => {
        star.update()
        star.draw()
      })

      // Occasionally add new shooting stars
      addRandomShootingStar()

      // Draw connections between nearby particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.1
            ctx.beginPath()
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})` // White connections
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    createParticles()
    createShootingStars()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-background" />
}

export default ParticleBackground
