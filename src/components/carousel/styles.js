import styled from "styled-components/macro"
import { motion } from "framer-motion"

const ar = "13/10"

export const MobileContainer = styled.div`
  vertical-align: middle;
  max-width: 70%;
  min-width: 807px;
  margin: auto;

  height: auto;
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.contactFormImgBg};
  padding: ;

  @media (max-aspect-ratio: ${ar}) {
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  @media screen and (max-width: 890px) {
    max-width: 100%;
    min-width: unset;
  }
`

export const Container = styled.div`
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

  border: 2px solid ${({ theme }) => theme.txt};

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-aspect-ratio: ${ar}) {
    height: none;
    width: 100%;
    flex-direction: row;
  }
`

export const TextContainerDesktop = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: ${({ theme }) => theme.bgBody};
  transition: ease-in-out 0.3s;
  border-top: 2px solid ${({ theme }) => theme.txt};
  padding: 15px;
  position: absolute;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  opacity: 0;

  bottom: 0;
  left: 0;

  @media (max-aspect-ratio: ${ar}) {
    display: none;
  }
`
export const TextContainerMobile = styled.div`
  width: 100%;
  min-height: 75px;
  background-color: ${({ theme }) => theme.bgBody};
  transition: background-color ease-in-out 0.3s;
  overflow: scroll;
  padding: 15px;
  display: none;
  border: 2px solid ${({ theme }) => theme.txt};
  border-top: none;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;

  @media (max-aspect-ratio: ${ar}) {
    display: block;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const PrimaryImageContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.txt};
  background-color: ${({ theme }) => theme.bgBody};
  transition: background-color ease-in-out 0.3s;

  position: absolute;

  top: 0;
  left: 0;

  cursor: pointer;

  :hover ${TextContainerDesktop} {
    opacity: 1;
  }

  /*::after {
    animation: shine 2s ease-in-out infinite;
    animation-fill-mode: forwards;
    content: "";
    position: absolute;
    top: -110%;
    left: -210%;
    width: 200%;
    height: 200%;
    opacity: 0;
    transform: rotate(30deg);

    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  :active::after {
    opacity: 0;
  }

  @keyframes shine{
  10% {
    opacity: 1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }
  100% {
    opacity: 0;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
  }*/
`

export const ProjectHeading = styled(motion.h2)`
  margin: 0;
  margin-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.txt};
  color: ${({ theme }) => theme.txt};
`

export const ProjectDescription = styled(motion.p)`
  color: ${({ theme }) => theme.txt};
  font-size: 0.9rem;
  font-weight: 300;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.txt};
  object-fit: cover;
  box-shadow: ${({ showShadow }) =>
    showShadow ? "2px 2px 2px 2px #888888" : "none"};
`

export const SecondaryImageContainer = styled(motion.div)`
  flex: 1;
  padding: 5px 5px 0px 5px;
  width: 100%;
  min-height: 25%;
  position: relative;

  background-color: ${({ theme }) => theme.bgBody};
  cursor: pointer;

  :last-child {
    padding-bottom: 5px;
  }

  ::after {
    content: "${({ content }) => content}";
    background-color: ${({ theme }) => theme.carouselSecondaryContainerBg};
    transition: background-color ease-in-out 0.3s;
    color: ${({ theme }) => theme.txt};
    clip-path: polygon(35% 0, 100% 0, 100% 50%, 65% 100%, 0 100%, 0% 50%);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
    font-size: 1.5vw;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: row;
    opacity: 0;
    transition: 0.5s ease;
  }

  :hover::after {
    opacity: 1;
  }

  @media (max-aspect-ratio: ${ar}) {
    height: 100%;
    min-width: 25%;
    width: none;
    min-height: none;
    flex-direction: row;

    padding: 5px 5px 5px 0px;

    :first-child {
      padding-left: 5px;
    }

    ::after {
      font-size: 2vw;
    }
  }
`
