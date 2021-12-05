import styled from "styled-components/macro"
import { motion } from "framer-motion"

const ar = "7/5"

export const MobileContainer = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: white;
`

export const Container = styled.div`
  background-color: white;

  max-width: 100%;
  aspect-ratio: 2.4/1;

  display: flex;
  flex-direction: row;
  align-items: center;

  overflow: hidden;

  @media (max-aspect-ratio: ${ar}) {
    flex-direction: column;
    aspect-ratio: 1.8/1;
  }
`

export const PrimaryContainer = styled.div`
  height: 100%;
  flex: 3;

  position: relative;

  @media (max-aspect-ratio: ${ar}) {
    height: none;
    width: 100%;
  } ;
`

export const SecondaryContainer = styled.div`
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;

  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-aspect-ratio: ${ar}) {
    height: none;
    width: 100%;
    flex-direction: row;
  }
`

export const PrimaryImageContainer = styled(motion.div)`
  width: 100%;
  height: 100%;

  background-color: ${({ bgColor }) => "#" + bgColor};

  position: absolute;

  top: 0;
  left: 0;
`

export const TextContainerDesktop = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: blue;
  position: absolute;

  bottom: 0;
  left: 0;

  @media (max-aspect-ratio: ${ar}) {
    display: none;
  }
`
export const TextContainerMobile = styled.div`
  width: 100%;
  min-height: 75px;
  background-color: blue;
  display: none;

  @media (max-aspect-ratio: ${ar}) {
    display: block;
  }
`

export const ProjectHeading = styled(motion.h2)`
  margin: 0;
  color: white;
`

export const ProjectDescription = styled(motion.p)`
  margin: 0;
  color: white;
`

export const SecondaryImageContainer = styled(motion.div)`
  flex: 1;

  width: 100%;
  min-height: 25%;

  background-color: ${({ bgColor }) => "#" + bgColor};
  cursor: pointer;

  @media (max-aspect-ratio: ${ar}) {
    height: 100%;
    min-width: 25%;
    width: none;
    min-height: none;
    flex-direction: row;
  }
`

export const Image = styled(motion.div)`
  width: 100%;
  height: 100%;
`
