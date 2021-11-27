import React from "react"
import { pageVariants, pageTransition } from "../../config/pageTransitions"
import { Container, Section1, Section2, Section3 } from "./styles"

function Blog() {
  return (
    <Container
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
    >
      <Section1>dfsdffsdf</Section1>
      <Section2>sdadsadsadd</Section2>
      <Section3>sddasdsadas</Section3>
    </Container>
  )
}

export default Blog
