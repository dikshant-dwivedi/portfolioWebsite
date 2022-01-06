import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled(motion.div)`
  width: 95%;
  margin: auto;
  background-color: #ffeedb;
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
  //background-color: #a53860;
  background-image: ${({ theme }) => theme.contactFormBg};
  //background-image: url("/assets/svgs/pattern.svg");
  scroll-snap-align: start;

  padding: 2rem;

  @media (max-aspect-ratio: 7/5) {
    padding: 1rem;
  }
`

export const Section2 = styled.div`
  height: calc(100vh - 50px);
  scroll-snap-align: start;
  padding: 10px;
  background-image: url("/assets/images/projectListBg.jpg");
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.skillsSectionImageBg};
  background-attachment: fixed;
  background-size: cover;
`

export const Section3 = styled.div`
  height: 100vh;
  background-color: #4c3b4d;
  scroll-snap-align: start;

  @media screen and (max-width: 780px) {
    height: calc(2 * (100vh - 51px));
  }
`
