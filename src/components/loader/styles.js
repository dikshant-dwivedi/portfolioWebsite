import styled from "styled-components/macro"
import { motion } from "framer-motion"

export const Container = styled(motion.div)`
  width: 100%;
  height: calc(100vh - 51px);
  margin: auto;
  background: ${({ theme }) => theme.loaderBg};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`

export const LoadingContainer = styled(motion.div)`
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: calc(50% - 3.5rem);
  left: calc(50% - 3.5rem);
`

export const LoadingCircle = styled(motion.span)`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.txt};
  border-radius: 0.75rem;
`
