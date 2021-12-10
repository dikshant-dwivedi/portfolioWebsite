import React, { useEffect, useState } from "react"
import { Loader } from "./../../components/loader/index"
import { AnimatePresence } from "framer-motion"
import { pageVariants, pageTransition } from "../../config/pageTransitions"
import { Container, Section1 } from "./styles"
import Timeline from "../../components/timeline/index"

function Experience() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <Container
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
    >
      <AnimatePresence exitBeforeEnter>
        {loading && <Loader key='loader' />}
      </AnimatePresence>
      <Section1>
        <Timeline /*offsetY={offsetY}*/ />
      </Section1>
    </Container>
  )
}

export default Experience
