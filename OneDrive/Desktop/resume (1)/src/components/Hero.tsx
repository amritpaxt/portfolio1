import { motion } from 'framer-motion'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-elements">
        <motion.div 
          className="bg-sphere sphere-1"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="bg-sphere sphere-2"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="hero-content">
        <motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-tagline"
          >
            AI/ML ENTHUSIAST • FULL STACK DEVELOPER • PROBLEM SOLVER
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            <h1>Welcome to the portfolio of</h1>
            <motion.h1 
              className="highlight"
              animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Amrita Yadav
            </motion.h1>
          </motion.div>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Science undergraduate at GD Goenka University specializing in AI/ML.
            Building innovative solutions combining clean UI with solid logic.
            Currently exploring AI/ML applications and contributing to real-world projects.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="#contact" 
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a 
              href="https://github.com/amritpaxt" 
              target="_blank" 
              className="btn-secondary"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              View GitHub
            </motion.a>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            Scroll to explore
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="profile-image-wrapper">
            <img 
              src="/images/profile.jpg" 
              alt="Amrita Yadav" 
              className="profile-image"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="profile-placeholder" style={{display: 'none'}}>📸</div>
            <div className="tech-sticker react">⚛</div>
            <div className="tech-sticker js">✨</div>
            <div className="tech-sticker python">🐍</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

