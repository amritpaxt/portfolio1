import { motion } from 'framer-motion'
import '../styles/sections.css'

export default function Experience() {
  const experiences = [
    {
      role: 'GirlScript Summer of Code Contributor',
      company: 'GirlScript Foundation',
      period: 'September 2025 - January 2026',
      description: 'Contributing to open-source projects in AI/ML and full-stack development. Collaborating with developers worldwide on real-world applications.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <motion.div
          className="experience-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              className="experience-item"
              variants={itemVariants}
              whileHover={{ x: 5, boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}
            >
              <div className="exp-header">
                <div>
                  <h3>{exp.role}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <span className="date">{exp.period}</span>
              </div>
              <p className="description">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
