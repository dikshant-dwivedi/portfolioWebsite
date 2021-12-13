import React, { useEffect, useState } from "react"
import { Loader } from "./../../components/loader/index"
import { AnimatePresence } from "framer-motion"
import { pageVariants, pageTransition } from "../../config/pageTransitions"
import { Container, Section1, Section2, Section3 } from "./styles"
import Carousel from "../../components/carousel/index"

function Project() {
  const [loading, setLoading] = useState(true)
  const [startRendering, setStartRendering] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2500)
      setStartRendering(true)
    }, 1000)
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
      {startRendering && (
        <>
          <Section1>
            <Carousel />
          </Section1>
          <Section2>sdadsadsadd</Section2>
          <Section3>sddasdsadas</Section3>
        </>
      )}
    </Container>
  )
}

export default Project
