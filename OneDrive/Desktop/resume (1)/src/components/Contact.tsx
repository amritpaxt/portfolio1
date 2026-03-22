import { motion } from 'framer-motion'
import '../styles/contact.css'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const contacts = [
    { icon: '📧', label: 'Email', value: 'yadamrita936@gmail.com', link: 'mailto:yadamrita936@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'in/amrita-yadav-804593324', link: 'https://www.linkedin.com/in/amrita-yadav-804593324/' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/amritpaxt', link: 'https://github.com/amritpaxt' },
    { icon: '🎓', label: 'University', value: 'GD Goenka University', link: '#' },
  ]

  return (
    <section className="contact">
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Let's Create Something Extraordinary
        </motion.h2>

        <motion.p variants={itemVariants} className="contact-subtitle">
          I'm always excited to collaborate on mind-bending projects
        </motion.p>

        <motion.div className="contact-grid" variants={containerVariants}>
          {contacts.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              className="contact-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 40px rgba(0, 255, 136, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="contact-icon">{contact.icon}</div>
              <div className="contact-info">
                <h4>{contact.label}</h4>
                <p>{contact.value}</p>
              </div>
              <motion.div
                className="contact-arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="footer-text">
          <p>© 2025 Amrita Yadav. Built with exaggeration and passion. 🚀</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
