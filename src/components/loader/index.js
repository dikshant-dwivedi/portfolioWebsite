import React from "react"
import { LoadingContainer, LoadingCircle, Container } from "./styles.js"

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
}

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
}

export const Loader = () => {
  return (
    <Container
      key='loader'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoadingContainer
        variants={loadingContainerVariants}
        initial='start'
        animate='end'
      >
        <LoadingCircle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <LoadingCircle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <LoadingCircle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <LoadingCircle
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </LoadingContainer>
    </Container>
  )
}

export default Loader
