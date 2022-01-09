import React, { useEffect, useState, useRef } from "react"
import { Loader } from "./../../components/loader/index"
import { pageVariants, pageTransition } from "../../config/pageTransitions"
import { AnimatePresence } from "framer-motion"
import { MdKeyboardArrowDown } from "react-icons/md"
import { init } from "ityped"
import {
  Container,
  Section1,
  Section2,
  /*Section3,
  LeftContainer,*/
  RightContainer,
  HeadingWrapper,
  HeadingMain,
  HeadingSecondary,
  HeadingTertiary,
  DownArrow,
} from "./styles"
import SkillsContainer from "../../containers/skillsContainer"
//import AccordionContainer from "../../containers/accordionContainer"

function Home() {
  const textRef = useRef()
  const [loading, setLoading] = useState(true)
  const [startRendering, setStartRendering] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2500)
      setStartRendering(true)
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Developer", "Designer", "Content Creater"],
      })
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
          <Section1 id='section1'>
            {/*<LeftContainer></LeftContainer>*/}
            <RightContainer>
              <HeadingWrapper>
                <HeadingSecondary>Hi There, I'm</HeadingSecondary>
                <HeadingMain>Dikshant Dwivedi</HeadingMain>
                <HeadingTertiary>
                  <span ref={textRef}></span>
                </HeadingTertiary>
                <DownArrow>
                  <a href='#section2'>
                    <MdKeyboardArrowDown />
                  </a>
                </DownArrow>
              </HeadingWrapper>
            </RightContainer>
          </Section1>
          <Section2 id='section2'>
            <SkillsContainer />
          </Section2>
          {/*<Section3 id='section3'>
            <AccordionContainer />
      </Section3>*/}
        </>
      )}
    </Container>
  )
}

export default Home
