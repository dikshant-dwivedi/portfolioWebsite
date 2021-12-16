import React, { useEffect, useState } from "react"
import { Loader } from "./../../components/loader/index"
import { AnimatePresence } from "framer-motion"
import { pageVariants, pageTransition } from "../../config/pageTransitions"
import { Container, Section1, Section2, Section3 } from "./styles"

function Blog() {
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
          {/*<Parallax bgImage='/assets/images/contactFormBg.jpg' strength={500}>
            <div style={{ height: 540 }}>
              <div style={inlineStyle}>HTML inside the parallax</div>
            </div>
          </Parallax>*/}
          <Section1>dfsdffsdf</Section1>
          <Section2>sdadsadsadd</Section2>
          <Section3>sddasdsadas</Section3>
        </>
      )}
    </Container>
  )
}

export default Blog
