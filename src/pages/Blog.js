import React from "react"
import { motion } from "framer-motion"
import {
  pageStyle,
  pageVariants,
  pageTransition,
} from "../config/pageTransitions"

function Blog() {
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
      style={{
        width: "500px",
        backgroundColor: "yellow",
        height: "400px",
      }}
    >
      this is blog page
    </motion.div>
  )
}

export default Blog
