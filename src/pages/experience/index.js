import React, { useEffect, useState } from "react"
import { Loader } from "./../../components/loader/index"
import { AnimatePresence } from "framer-motion"
import { pageVariants, pageTransition } from "../../config/pageTransitions"
import { Container, Section1, Section2 } from "./styles"
import Timeline from "../../components/timeline/index"
import ImageSlider from "../../components/imageSlider/index"

function Experience() {
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
            <Timeline />
          </Section1>
          <Section2>
            <ImageSlider />
          </Section2>
        </>
      )}
      {/*loading ? (
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
        )*/}
    </Container>
  )
}

export default Experience
