import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled(motion.div)`
  width: 95%;
  margin: auto;
  background-color: #ffeedb;
  height: calc(100vh - 51px);
  position: relative;
  overflow-y: scroll;
  -ms-overflow-style: none;
  perspective: 50px;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
  //scroll-snap-type: y mandatory;
`

export const Section1 = styled.div`
  height: calc(100vh - 50px);
  background-image: url("/assets/images/contactFormBg.jpg");
  background-attachment: fixed;
  background-color: #a53860;
  scroll-snap-align: start;
  @media screen and (max-width: 780px) {
    height: calc(2 * (100vh - 51px));
  }
`

export const Section2 = styled.div`
  height: 100vh;
  background-color: #61c9a8;
  scroll-snap-align: start;

  @media screen and (max-width: 780px) {
    height: calc(2 * (100vh - 51px));
  }
`

export const Section3 = styled.div`
  height: 100vh;
  background-color: #4c3b4d;
  scroll-snap-align: start;

  @media screen and (max-width: 780px) {
    height: calc(2 * (100vh - 51px));
  }
`
