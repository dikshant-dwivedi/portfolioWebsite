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
`

export const Section1 = styled.div`
  height: auto;
  background-image: url("/assets/images/treeBg.jpg");
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.skillsSectionImageBg};
  background-attachment: fixed;

  padding: 1rem;

  /*@media (max-aspect-ratio: 7/5) {
    padding: 1rem;
  }*/
`

export const Section2 = styled.div`
  height: calc(100vh - 50px);
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

export const Header = styled.div``

export const Heading = styled.h1`
  min-width: 810px;
  max-width: 70%;
  font-size: 2rem;
  margin: auto;
  padding: 0px 10px;
  text-align: center;
  @media screen and (max-width: 890px) {
    max-width: 100%;
    min-width: unset;
  }
`

export const SubHeading = styled.p`
  font-size: 1rem;
  min-width: 810px;
  font-weight: 700;
  max-width: 70%;
  margin: auto;
  padding: 10px;
  text-align: center;

  @media screen and (max-width: 890px) {
    max-width: 100%;
    min-width: unset;
  }
`

export const SectionTitle = styled.h2`
  background: ${({ theme }) => theme.bgBody};
  border: 2px solid ${({ theme }) => theme.txt};
  border-bottom: none;
  min-width: 810px;
  font-weight: 700;
  max-width: 70%;
  margin: auto;
  padding: 10px;
  text-align: center;

  @media screen and (max-width: 890px) {
    max-width: 100%;
    min-width: unset;
  }
`
