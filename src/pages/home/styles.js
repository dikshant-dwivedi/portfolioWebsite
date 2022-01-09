import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled(motion.div)`
  width: 95%;
  margin: auto;
  background-color: ${({ theme }) => theme.containerBg}; //
  height: calc(100vh - 50px);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-type: y mandatory;

  @media screen and (max-width: 1080px) {
    scroll-snap-type: unset;
  }
`

export const Section1 = styled.div`
  height: calc(100vh - 50px);
  scroll-snap-align: start;

  background-image: url("/assets/images/homePageBg.jpg");
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.skillsSectionImageBg};
  background-position: center;
  background-attachment: fixed;

  display: flex;
`

export const LeftContainer = styled.div`
  flex: 1;
`

export const RightContainer = styled.div`
  flex: 1;
`

export const HeadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-weight: 500;
  color: ${({ theme }) => theme.txt};
  //padding-left: 50px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
`
export const HeadingMain = styled.h1`
  font-size: 50px;
  margin 10px 0px;
`
export const HeadingSecondary = styled.h2`
  font-size: 35px;
  margin: 0px;
`
export const HeadingTertiary = styled.h3`
  font-size: 30px;
  margin: 0px;

  span {
    color: ${({ theme }) => theme.homePageHeading};
  }

  .ityped-cursor {
    animation: blink 1s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
export const DownArrow = styled.div`
  font-size: 6rem;
  text-align: center;
  position: absolute;
  bottom: 5px;
  color: ${({ theme }) => theme.txt};
  left: calc(50% - 3rem);
  animation: arrowBlink 2s infinite;

  @keyframes arrowBlink {
    100% {
      opacity: 0;
    }
  }

  a {
    color: ${({ theme }) => theme.txt};
  }
`

export const Section2 = styled.div`
  height: calc(100vh - 50px);
  background-image: url("/assets/images/cloudBg.jpg");
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.skillsSectionImageBg};
  background-attachment: fixed;
  background-size: cover;
  scroll-snap-align: start;

  @media screen and (max-width: 1080px) {
    height: calc(100vh - 50px + 250px);
  }

  @media screen and (max-width: 700px) {
    height: calc(100vh - 50px + 4 * 100px);
  }

  @media screen and (max-width: 530px) {
    height: calc(100vh - 50px + 4 * 240px);
  }
`

export const Section3 = styled.div`
  height: calc(100vh - 50px);
  //background-color: #4c3b4d;
  background-image: url("/assets/svgs/Waimakariri.svg");
  scroll-snap-align: start;
  padding: 10px;
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.skillsSectionImageBg};
  background-attachment: fixed;
  background-size: cover;
  @media screen and (max-width: 780px) {
    height: 190vh;
  }
`

export const Section4 = styled.div`
  height: 100vh;
  background-color: #4c3b4d;
  scroll-snap-align: start;
  position: relative;

  @media screen and (max-width: 780px) {
    height: calc(2 * (100vh - 51px));
  }
`
