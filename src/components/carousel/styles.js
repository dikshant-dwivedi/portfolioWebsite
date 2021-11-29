import styled from "styled-components/macro"
import { motion } from "framer-motion"

export const Container = styled.div`
  background-color: white;

  max-width: 100%;
  aspect-ratio: 2.4/1;

  display: flex;
  flex-direction: row;
  align-items: center;

  overflow: hidden;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    aspect-ratio: none;
  }
`

export const PrimaryContainer = styled.div`
  height: 100%;
  flex: 3;

  position: relative;

  @media screen and (max-width: 650px) {
    height: none;
    width: 100%;
  }
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

  @media screen and (max-width: 650px) {
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

  //padding: 2rem;

  top: 0;
  left: 0;
`

export const SecondaryImageContainer = styled(motion.div)`
  flex: 1;

  width: 100%;
  min-height: 25%;

  background-color: ${({ bgColor }) => "#" + bgColor};
  cursor: pointer;

  //padding: 2rem;

  @media screen and (max-width: 650px) {
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
