import { motion } from 'framer-motion'
import '../styles/floating-elements.css'

export default function FloatingElements() {
  const elements = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    size: Math.random() * 50 + 20,
    duration: Math.random() * 5 + 10,
    delay: Math.random() * 2,
    x: Math.random() * 100,
  }))

  return (
    <div className="floating-elements">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="floating-blob"
          style={{
            width: el.size,
            height: el.size,
            left: `${el.x}%`,
            opacity: 0.1,
          }}
          animate={{
            y: [0, -100, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
