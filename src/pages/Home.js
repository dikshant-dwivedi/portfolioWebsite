import React from "react"
import { motion } from "framer-motion"
import { pageVariants, pageTransition } from "../config/pageTransitions"

function Home() {
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
    >
      this is home page
    </motion.div>
  )
}

export default Home
