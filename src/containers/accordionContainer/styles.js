import styled from "styled-components/macro"
import { IoIosArrowDropdownCircle as Arrow } from "react-icons/io"
//import { IoMdArrowDropdownCircle as Arrow } from "react-icons/io"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`

export const LeftSide = styled.div`
  flex: 1.7;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    //border: ${({ theme }) => theme.bgBody} 2px solid;
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.txt};

    :hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 780px) {
    height: unset;
    width: 100%;
    flex: 1;
  }
`

export const RightSide = styled.div`
  //background: blue;
  flex: 2;
  height: 100%;
  @media screen and (max-width: 780px) {
    height: unset;
    width: 100%;
    flex: 1;
  }
`

let plusContainerDim = 30

export const PlusContainer = styled.div`
  height: ${plusContainerDim + `px`};
  width: ${plusContainerDim + `px`};
  padding-top: calc(${plusContainerDim / 2 - plusContainerDim / 20 + `px`});
`

export const Plus = styled.div`
  background: white;
  height: ${plusContainerDim / 10 + `px`};
  width: ${plusContainerDim + `px`};

  ::after {
    content: "";
    display: block;
    background: white;
    height: ${plusContainerDim / 10 + `px`};
    width: ${plusContainerDim + `px`};
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(-90deg)")};
  }
`

export const Item = styled.div`
  border-radius: ${({ open }) => (open ? "10px" : "20px")};
  width: 100%;
  max-height: ${({ open }) => (open ? "400px" : "70px")};
  transition: all 0.5s ease-in-out;
  margin: 7px 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.txt};
  background: rgba(255, 255, 255, 0.1);
  background-image: ${({ theme }) => theme.accordionItemBg};
  box-shadow: 6px 6px 5px ${({ theme }) => theme.shadow};
  backface-visibility: hidden;

  :hover {
    backdrop-filter: blur(15px);
  }

  :active {
    transform: scale(0.95);
  }
`
export const Header = styled.div`
  border-bottom-right-radius: ${({ open }) => (open ? "10px" : "0px")};
  border-bottom-left-radius: ${({ open }) => (open ? "10px" : "0px")};
  padding: 10px;
  cursor: pointer;
  width: 100%;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.txt};
  border-bottom-color: ${({ open }) =>
    open ? `${({ theme }) => theme.txt}` : "transparent"};
`
export const Content = styled.div`
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: ${({ open }) => (open ? "10px" : `0px`)};
  opacity: ${({ open }) => (open ? "1" : `0`)};
  overflow-y: scroll;
  width: 100%;
  transition: opacity 0.5s ease-in-out, padding 0.5s ease-in-out;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.txt};

    :hover {
      cursor: pointer;
    }
  }
`
export const Title = styled.h3`
  color: ${({ theme }) => theme.txt};
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;

  @media screen and (max-width: 780px) {
    font-size: 1rem;
  }
`

export const ArrowIcon = styled(Arrow)`
  color: ${({ theme }) => theme.txt};
  min-width: 30px;
  font-size: 1.8rem;
  transform: ${({ open }) => (open ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: transform 0.5s ease-in-out;
`
