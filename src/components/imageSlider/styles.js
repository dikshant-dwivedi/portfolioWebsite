import styled from "styled-components/macro"
import {
  BiRightArrow,
  BiLeftArrow,
  /*FaArrowAltCircleRight,
  FaArrowAltCircleLeft,*/
} from "react-icons/bi"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"

export const SliderContainer = styled.div`
  position: relative;
  width: 50vw;
  aspect-ratio: 7/5;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-aspect-ratio: 7/5) {
    width: 80vw;
  }
`

export const LeftArrow = styled(motion.div)`
  width: 50px;
  height: 50px;
  text-align: center;
  background-color: ${({ theme }) => theme.bgBody};
  border-radius: 50%;
  position: absolute;
  font-weight: bold;
  top: calc(50% - 1.25rem);
  padding-top: 3px;
  left: -100px;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.txt};
  z-index: 500;
  cursor: pointer;
  user-select: none;
  box-shadow: 5px 5px 50px 0px ${({ theme }) => theme.txt};
  -webkit-box-shadow: 5px 5px 50px 0px ${({ theme }) => theme.txt};
  -moz-box-shadow: 5px 5px 50px 0px ${({ theme }) => theme.txt};
  @media (max-aspect-ratio: 7/5) {
    left: 5%;
  }
`

export const RightArrow = styled(motion.div)`
  width: 50px;
  height: 50px;
  text-align: center;
  background-color: ${({ theme }) => theme.bgBody};
  font-weight: bold;
  border-radius: 50%;
  padding-top: 3px;
  position: absolute;
  top: calc(50% - 1.25rem);
  right: -100px;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.txt};
  z-index: 500;
  cursor: pointer;
  user-select: none;
  box-shadow: 5px 5px 50px 0px ${({ theme }) => theme.txt};
  -webkit-box-shadow: 5px 5px 50px 0px ${({ theme }) => theme.txt};
  -moz-box-shadow: 5px 5px 50px 0px ${({ theme }) => theme.txt};

  @media (max-aspect-ratio: 7/5) {
    right: 5%;
  }
`
export const CardTextContainer = styled.div`
  width: 100%;
  min-height: 20%;
  background-color: ${({ theme }) => theme.bgBody};
  position: absolute;
  border-radius: 10px;
  border-top: 2px solid ${({ theme }) => theme.txt};
  bottom: 0;
  opacity: 0;
  transition: ease-in 0.5s;
  padding: 10px 20px;
`
export const CardTitle = styled.h2`
  transform: translateZ(155px);
`

export const Card = styled.div`
  width: 100%;
  height: 100%;
  transform: translateZ(55px);
  position: relative;
  border-radius: 10px;

  :hover ${CardTextContainer} {
    opacity: 1;
  }
`
export const ImageContainer = styled.div`
  opacity: 0;
  transition-duration: 1s ease;
  width: 100%;
  height: 100%;
  transform: scale(0.9);
  position: absolute;

  ${({ isSlideActive }) =>
    isSlideActive &&
    `
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1);
    z-index: 400;
  `}
`

export const TiltContainer = styled(Tilt)`
  width: 100%;
  height: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: crisp-edges;
  transform: translateZ(25px);
  border: 2px solid ${({ theme }) => theme.txt};
  border-radius: 10px;
  -webkit-box-shadow: 0 10px 6px -6px ${({ theme }) => theme.bgBody};
  -moz-box-shadow: 0 10px 6px -6px ${({ theme }) => theme.bgBody};
  box-shadow: 0 10px 6px -6px ${({ theme }) => theme.bgBody};
`
