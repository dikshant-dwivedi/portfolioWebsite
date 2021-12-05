import React, { useEffect, useState } from "react"
import { Loader } from "./../../components/loader/index"
import { pageVariants, pageTransition } from "../../config/pageTransitions"
import { AnimatePresence } from "framer-motion"
import {
  Container,
  Section1,
  Section2,
  Section3,
  ShapeDivider1,
  ShapeDivider2,
} from "./styles"

function Home() {
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
        <LeftIntro></LeftIntro>
      </Section1>
      <Section2>
        <ShapeDivider1>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
              class='shape-fill'
            ></path>
          </svg>
        </ShapeDivider1>
        <ShapeDivider2>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
              class='shape-fill'
            ></path>
          </svg>
          sssss
        </ShapeDivider2>
      </Section2>
      <Section3></Section3>
    </Container>
  )
}

export default Home
