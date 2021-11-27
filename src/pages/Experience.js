import React from "react"
import { motion } from "framer-motion"
import { pageVariants, pageTransition } from "../config/pageTransitions"

function Experience() {
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
      style={{
        width: "500px",
        backgroundColor: "green",
        height: "400px",
      }}
    >
      this is experience page
    </motion.div>
  )
}

export default Experience
