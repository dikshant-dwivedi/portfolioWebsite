import React, { useEffect, useState } from "react"
import { Loader } from "./../../components/loader/index"
import { AnimatePresence } from "framer-motion"
import { pageVariants, pageTransition } from "../../config/pageTransitions"
import { Container, Section1, Section2 } from "./styles"
import Carousel from "../../components/carousel/index"
import ProjectListContainer from "../../containers/projectsListContainer"

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
          <Section2>
            <ProjectListContainer />
          </Section2>
        </>
      )}
    </Container>
  )
}

export default Project
