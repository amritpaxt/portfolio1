import { motion } from 'framer-motion'
import '../styles/footer.css'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>Let's Connect</motion.h2>
          
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="contact-item"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <span className="label">Email</span>
              <a href="mailto:yadamrita936@gmail.com">yadamrita936@gmail.com</a>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <span className="label">LinkedIn</span>
              <a href="https://www.linkedin.com/in/amrita-yadav-804593324/" target="_blank" rel="noopener noreferrer">
                in/amrita-yadav-804593324
              </a>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <span className="label">GitHub</span>
              <a href="https://github.com/amritpaxt" target="_blank" rel="noopener noreferrer">
                github.com/amritpaxt
              </a>
            </motion.div>
          </motion.div>

          <motion.p 
            className="footer-text"
            variants={itemVariants}
          >
            Open to opportunities, ideas, and interesting work. Always happy to chat!
          </motion.p>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2026 Amrita Yadav. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
