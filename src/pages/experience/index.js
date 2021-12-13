import React, { useEffect, useState } from "react"
import { Loader } from "./../../components/loader/index"
import { AnimatePresence } from "framer-motion"
import { pageVariants, pageTransition } from "../../config/pageTransitions"
import { Container, Section1, Section2 } from "./styles"
import Timeline from "../../components/timeline/index"
import ImageSlider from "../../components/imageSlider/index"

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
        {loading ? (
          <Loader key='loader' />
        ) : (
          <>
            <Section1>
              <Timeline />
            </Section1>
            <Section2>
              <ImageSlider />
            </Section2>
          </>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default Experience
