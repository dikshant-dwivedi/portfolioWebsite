export const pageVariants = {
  initial: {
    scaleY: 0,
  },
  in: {
    scaleY: 1,
  },
  out: {
    scaleY: 0,
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
