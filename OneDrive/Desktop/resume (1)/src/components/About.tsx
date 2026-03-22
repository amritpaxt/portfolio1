import { motion } from 'framer-motion'
import '../styles/sections.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I'm a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning 
            at GD Goenka University. With a strong academic foundation (CGPA: 9.59/10) and hands-on experience 
            in full-stack development, I'm passionate about building practical solutions that combine clean UI 
            with solid logic.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Currently in my 3rd semester, I'm focused on strengthening my Data Structures & Algorithms knowledge, 
            exploring AI/ML applications, and contributing to real-world projects through platforms like GirlScript 
            Summer of Code. I have hands-on experience with Java, Python, JavaScript, React, Node.js, and various 
            databases.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I'm interested in internships and opportunities where I can apply my technical skills to solve real problems 
            while continuing to learn and grow as a developer.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
