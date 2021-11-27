import React from "react"
import { motion } from "framer-motion"
import { pageVariants, pageTransition } from "../config/pageTransitions"

function Project() {
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
      style={{
        width: "500px",
        backgroundColor: "red",
        height: "400px",
      }}
    >
      this is project page
    </motion.div>
  )
}

export default Project
