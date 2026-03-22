import { motion } from 'framer-motion'
import '../styles/sections.css'

export default function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'HTML', 'CSS', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Backend & Database',
      skills: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'MySQL']
    },
    {
      category: 'AI/ML & APIs',
      skills: ['Machine Learning', 'REST APIs', 'CRUD Operations', 'Web3', 'DApps']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git & GitHub', 'Full Stack Development', 'GSOC Contributor']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skillGroup) => (
            <motion.div 
              key={skillGroup.category} 
              className="skill-group"
              variants={categoryVariants}
            >
              <h3>{skillGroup.category}</h3>
              <motion.div 
                className="skill-tags"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillGroup.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    variants={skillVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
