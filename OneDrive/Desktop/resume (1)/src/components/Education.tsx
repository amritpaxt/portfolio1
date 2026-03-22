import { motion } from 'framer-motion'
import '../styles/sections.css'

export default function Education() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        
        <motion.div
          className="content-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="education-item"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}
          >
            <div className="edu-header">
              <h3>BTech CSE (AI & ML)</h3>
              <span className="date">2024 - 2028</span>
            </div>
            <p className="institution">GD Goenka University, Delhi</p>
            <p className="details">CGPA: 9.59/10 • 3rd Semester</p>
            <p className="description">
              Pursuing B.Tech in Computer Science with specialization in AI & Machine Learning.
              Strong focus on Data Structures & Algorithms, AI/ML applications, and practical project work.
            </p>
          </motion.div>

          <motion.div 
            className="education-item"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}
          >
            <div className="edu-header">
              <h3>XII (CBSE)</h3>
              <span className="date">2024</span>
            </div>
            <p className="institution">RD International School, Delhi</p>
            <p className="details">Strong academic foundation</p>
          </motion.div>

          <motion.div 
            className="education-item"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}
          >
            <div className="edu-header">
              <h3>X (CBSE)</h3>
              <span className="date">2022</span>
            </div>
            <p className="institution">Shiv Ashish World School</p>
            <p className="details">Percentage: 93.94%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
