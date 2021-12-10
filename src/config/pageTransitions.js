/*export const pageVariants = {
  initial: {
    scaleY: 0,
  },
  in: {
    scaleY: 1,
  },
  out: {
    scaleY: 0,
  },
}*/

export const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
    //scale: 0.9,
  },
  in: {
    opacity: 1,
    y: 0,
    //scale: 1,
  },
  out: {
    opacity: 0,
    y: "100vh",
    //scale: 1,
  },
}

/*{
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1,
  },
}*/

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
}
