import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface FadeInSectionProps {
  children: ReactNode
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  })

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInSection
