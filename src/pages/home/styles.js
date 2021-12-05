import styled from "styled-components"
import { motion } from "framer-motion"
import layerSvg from "./layer1.svg"

export const Container = styled(motion.div)`
  width: 95%;
  margin: auto;
  //background-color: #ffeedb;
  height: calc(100vh - 51px);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-type: y mandatory;
`

export const Section1 = styled.div`
  height: calc(100vh - 50px);
  background-color: #a53860;
  scroll-snap-align: start;
  position: relative;

  @media screen and (max-width: 780px) {
    height: calc(2 * (100vh - 51px));
  }
`

export const Section2 = styled.div`
  height: 100vh;
  //background-color: #61c9a8;
  //background-color: transparent;
  scroll-snap-align: start;
  position: relative;

  /*@media screen and (max-width: 780px) {
    height: calc(2 * (100vh - 51px));
  }*/
`

export const Section3 = styled.div`
  height: 100vh;
  background-color: #4c3b4d;
  scroll-snap-align: start;

  @media screen and (max-width: 780px) {
    height: calc(2 * (100vh - 51px));
  }
`
export const ShapeDivider1 = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: calc(40vh);
  }

  .shape-fill {
    fill: #61c9a8;
  }
`
export const ShapeDivider2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: calc(40vh);
  }

  .shape-fill {
    fill: #61c9a8;
  }
`
export const ShapeDivider3 = styled.div`
  //aspect-ratio: 900/600;
  //width: 100%;
  width: 100%;
  height: 400px;
  background-image: ${layerSvg};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
