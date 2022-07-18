import styled from "styled-components"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"

export const Container = styled(motion.div)`
  width: 95%;
  margin: auto;
  background-color: #ffeedb;
  height: calc(100vh - 51px);
  overflow-y: scroll;
  -ms-overflow-style: none;
  perspective: 50px;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Heading = styled.h1`
  padding: 0;
  margin: 0;
  padding: 20px;
  text-align: center;
  background-image: url("/assets/images/treeBg.jpg");
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.skillsSectionImageBg};
  background-attachment: fixed;
  background-position: center;
  font-size: 2.8rem;
  span {
    font-size: 4rem;
  }
`

export const Section1 = styled.div`
  height: 312vh;
  position: relative;

  @media screen and (max-width: 800px) {
    height: 491vh;
  }
`

export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/images/blogSectionBg.jpg");
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.skillsSectionImageBg};
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
  background-attachment: fixed;
  background-size: cover;
  position: absolute;
`

export const Banner2 = styled.div`
  width: 100%;
  height: 100vh;
  top: 71vh;
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 80%);
  position: absolute;

  video {
    background-attachment: fixed;
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
`

export const Banner3 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/images/blogSectionBg2.jpg");
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.skillsSectionImageBg};
  background-attachment: fixed;
  clip-path: polygon(0 0, 100% 20%, 100% 80%, 0% 100%);
  top: 151vh;
  background-size: cover;
  position: absolute;
`

export const Banner4 = styled.div`
  width: 100%;
  height: 85vh;
  top: 231vh;
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
  position: absolute;

  video {
    background-attachment: fixed;
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  @media screen and (max-width: 800px) {
    height: 100vh;
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 80%);
  }
`

export const Banner5 = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    width: 100%;
    height: 100vh;
    background-image: url("/assets/images/blogSectionBg4.jpg");
    box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.skillsSectionImageBg};
    background-attachment: fixed;
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0% 100%);
    top: 311vh;
    background-size: cover;
    position: absolute;
  }
`

export const Banner6 = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    width: 100%;
    height: 100vh;
    background-image: url("/assets/images/blogSectionBg3.jpg");
    background-attachment: fixed;
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
    top: 391vh;
    background-size: cover;
    position: absolute;
  }
`

export const Section2 = styled.div`
  height: 80vh;
  position: relative;
  background-image: ${({ theme }) => theme.contactFormBg};
`

export const Section3 = styled.div`
  height: 100vh;
  background-color: #4c3b4d;
`

export const ImgInMiddle = styled.div`
  clip-path: polygon(0 50%, 100% 0%, 100% 50%, 0% 100%);
  background: white;
  width: 100%;
  height: 70vh;
  bottom: 105px;
  position: absolute;
  background-image: url("/assets/images/seamless.jpg");
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.skillsSectionImageBg};
  background-attachment: fixed;
  background-size: cover;
`

export const OverLay = styled.div`
  width: 100%;
  padding: 20px 0px;
  height: 312vh;
  position: absolute;
  overflow: hidden;
  top: 0;

  @media screen and (max-width: 800px) {
    height: 491vh;
  }
`

export const CardContainer = styled.div`
  height: 100%;
  margin: auto;

  display: grid;
  grid-auto-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    "card1 ."
    "card1 card2"
    "card3 card2"
    "card3 card4"
    "card5 card4"
    "card5 card6"
    ". card6";

  max-width: 1000px;
  padding: 10px;

  :nth-child(even) {
    justify-self: end;
  }

  @media screen and (min-width: 1300px) {
    max-width: 1400px;
  }

  @media screen and (max-width: 1050px) {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "card1 card2"
      "card1 card2"
      "card3 card4"
      "card3 card4"
      "card5 card6"
      "card5 card6";
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "card1"
      "card2"
      "card3"
      "card4"
      "card5"
      "card6";
  }
`

export const Card = styled(Tilt)`
  width: 90%;
  height: 90%;
  background: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.5);
  border-left-color: rgba(255, 255, 255, 0.5);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);

  :hover {
    backdrop-filter: blur(15px);
  }

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 4fr 2fr 1fr;
  grid-template-areas: "image" "body" "tags" "status";

  @media screen and (max-width: 1050px) {
    width: 95%;
    height: 95%;
    max-height: 550px;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    width: 95%;
    height: 95%;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 4fr 2fr 1fr;
    grid-template-areas:
      "image body"
      "image tags"
      "image status";
  }
`

export const Card1 = styled(Card)`
  grid-area: card1;
  @media screen and (max-width: 1050px) {
    justify-self: center;
  }
`

export const Card2 = styled(Card)`
  grid-area: card2;
  justify-self: end;
  @media screen and (max-width: 1050px) {
    justify-self: center;
  }
`

export const Card3 = styled(Card)`
  grid-area: card3;
  @media screen and (max-width: 1050px) {
    justify-self: center;
  }
`

export const Card4 = styled(Card)`
  grid-area: card4;
  justify-self: end;
  @media screen and (max-width: 1050px) {
    justify-self: center;
  }
`

export const Card5 = styled(Card)`
  grid-area: card5;
  @media screen and (max-width: 1050px) {
    justify-self: center;
  }
`

export const Card6 = styled(Card)`
  grid-area: card6;
  justify-self: end;
  @media screen and (max-width: 1050px) {
    justify-self: center;
  }
`
export const Image = styled.div`
  grid-area: image;
  background: url("${({ url }) => url}");
  background-size: cover;
  background-position: center;
`

export const Title = styled.h2`
  margin: 0;
  padding: 0;

  a{
    color: ${({ theme }) => theme.timelineItemTxt};
    text-decoration: none;

    :hover{
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`

export const Description = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 5px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.timelineItemTxt};

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`

export const Body = styled.div`
  grid-area: body;
  margin: 5px;
  //border: 1px solid ${({ theme }) => theme.txt};
  background: ${({ theme }) => theme.timelineItemBg};
  padding: 5px;
`

export const Tags = styled.div`
  text-align: center;
  grid-area: tags;
  padding: 5px 10px;

  @media screen and (max-width: 320px) {
    padding: 3px 5px;
  }
`

export const Status = styled.div`
  grid-area: status;
  font-size: 0.9rem;
  text-align: center;
  font-weight: 600;
  background: ${({ theme }) => theme.timelineItemBg};
  padding-top: 10px;
`

export const Tag = styled.div`
  display: inline-block;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.cardTagColor};
  margin: 0px 10px;
  margin-bottom: 5px;
  white-space: nowrap;
  background: #0089e0;
  padding: 5px 10px 5px 12px;
  //border-bottom-right-radius: 10px;
  //border-top-right-radius: 10px;
  position: relative;
  transition: background 0.3s ease-in-out;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: -9px;
    z-index: -1;
    transform: rotate(45deg);
    top: 4px;
    width: 17.4px;
    height: 17.4px;
  }

  :after {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: ${({ theme }) => theme.cardTagColor};
    box-shadow: -2px -2px 3px #004977;
  }

  :nth-child(1) {
    background: ${({ theme }) => theme.cardTagBg1};
    :before {
      background: ${({ theme }) => theme.cardTagBg1};
    }
  }

  :nth-child(2) {
    background: ${({ theme }) => theme.cardTagBg2};
    :before {
      background: ${({ theme }) => theme.cardTagBg2};
    }
  }

  :nth-child(3) {
    background: ${({ theme }) => theme.cardTagBg3};
    :before {
      background: ${({ theme }) => theme.cardTagBg3};
    }
  }

  :nth-child(4) {
    background: ${({ theme }) => theme.cardTagBg4};
    :before {
      background: ${({ theme }) => theme.cardTagBg4};
    }
  }

  @media screen and (max-width: 320px) {
    font-size: 0.75rem;
    margin: 0px 5px;
    margin-bottom: 5px;
  }
`
