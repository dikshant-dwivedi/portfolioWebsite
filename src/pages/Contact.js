import React from "react"
import { motion } from "framer-motion"
import { pageVariants, pageTransition } from "../config/pageTransitions"

function Contact() {
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
      style={{
        width: "500px",
        backgroundColor: "blue",
        height: "400px",
      }}
    >
      this is contact page
    </motion.div>
  )
}

export default Contact
