import { motion } from 'framer-motion'
import '../styles/sections.css'

export default function Projects() {
  const projects = [
    {
      title: 'File Search Engine',
      tech: 'Java • File I/O • HashMap • DFS',
      description: 'A file search application with recursive directory traversal and efficient indexing using hash-based data structures for fast file lookup.'
    },
    {
      title: 'Data Analysis System',
      tech: 'Java • CSV Parsing • Collections',
      description: 'Data processing & analysis tool for extracting insights, computing aggregates, and identifying trends in structured datasets.'
    },
    {
      title: 'AI/ML Model Development',
      tech: 'Python • Scikit-learn • ML Algorithms',
      description: 'Hands-on exploration of machine learning algorithms and model training for predictive analytics and pattern recognition.'
    },
    {
      title: 'Full Stack Web Applications',
      tech: 'React • Node.js • MongoDB • REST APIs',
      description: 'Modern web applications combining React frontend with Node.js backend and database integration for seamless user experiences.'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            >
              <h3>{project.title}</h3>
              <p className="tech-stack">{project.tech}</p>
              <p className="description">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
