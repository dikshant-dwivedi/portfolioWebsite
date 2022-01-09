import React, { useEffect, useState } from "react"
import { Loader } from "./../../components/loader/index"
import { AnimatePresence } from "framer-motion"
import { pageVariants, pageTransition } from "../../config/pageTransitions"
import {
  Container,
  Section1,
  Section2,
  Heading,
  SubHeading,
  Header,
  SectionTitle,
} from "./styles"
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
            <Header>
              <Heading>Projects</Heading>
              <SubHeading>
                The projects I completed during my B. Tech. degree are evidence
                of my experience. It demonstrates my skill set, my eagerness to
                broaden my horizons and think beyond the obvious, and, most
                importantly, my potential to be better than I am now.
              </SubHeading>
              <SectionTitle>Featured Projects</SectionTitle>
            </Header>
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
