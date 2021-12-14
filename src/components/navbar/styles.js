import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"
import { motion } from "framer-motion"

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.navBarbgBody};
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0.5rem 5vw;
  z-index: 15;
`

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.txt};
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: color ease-in 0.2s, border-color ease-in 0.2s;
  border-bottom: 2px solid transparent;
  z-index: 15;

  &.active {
    color: ${({ theme }) => theme.linkActive};
    border-bottom: 2px solid ${({ theme }) => theme.linkActive};
  }

  &:hover {
    color: ${({ theme }) => theme.linkActive};
    border-bottom: 2px solid ${({ theme }) => theme.linkActive};
  }
`

export const NavPlayButton = styled.button`
  padding: 0 1rem;
  min-width: 0;
`

export const NavChangeThemeSwitch = styled.div`
  box-sizing: content-box;
  width: 50px;
  height: 25px;
  background-color: ${({ theme }) => theme.swtch};
  display: flex;
  justify-content: ${({ isOn }) => (!isOn ? "flex-start" : "flex-end")};
  border-radius: 40px;
  padding: 5px;
  cursor: pointer;
  z-index: 15;
`

export const NavChangeThemeSwitchHandle = styled(motion.div)`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.txt};
  border-radius: 20px;
  z-index: 15;
`

export const NavHamburgerContainer = styled(motion.div)`
  display: none;
  position: relative;
  right: 10px;

  @media screen and (max-width: 780px) {
    color: ${({ theme }) => theme.txt};
    display: flex;
    padding: 1em;

    align-items: center;
    cursor: pointer;
    transition: color ease-in 0.2s;
    z-index: 15;

    &:hover {
      color: ${({ theme }) => theme.linkActive};
    }
  }
`

export const NavHamburger = styled.div`
  background: ${({ theme }) => theme.txt};
  height: 3px;
  width: 1.75em;
  border-radius: 3px;
  transition: all ease-in-out 500ms;

  ::before {
    content: "";
    display: block;
    background: ${({ theme }) => theme.txt};
    height: 3px;
    width: 1.75em;
    border-radius: 3px;
    transform: translateY(-6px);
    transition: all ease-in-out 500ms;
  }

  ::after {
    content: "";
    display: block;
    background: ${({ theme }) => theme.txt};
    height: 3.5px;
    width: 1.75em;
    border-radius: 3px;
    transform: translateY(3px);
    transition: all ease-in-out 500ms;
  }

  ${({ openMenu }) =>
    openMenu &&
    `
    transform: rotate(45deg);

    ::before{
      opacity: 0;
    }

    ::after{
      transform: translateY(-3px) rotate(-90deg);
    }

  `}
`

export const NavMenu = styled.div`
  width: 35vw;
  min-width: 453px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    display: none;
  }
`

export const NavMenuButtons = styled.div`
  width: 10vw;
  min-width: 143px;
  //position: relative;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    width: 100vw;
  }
`

export const NavLinkSideBar = styled(Link)`
  color: ${({ theme }) => theme.txt};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 0.5rem;
  cursor: pointer;
  transition: color ease-in 0.2s, border-color ease-in 0.2s;
  border-bottom: 2px solid transparent;

  &.active {
    color: ${({ theme }) => theme.linkActive};
    border-bottom: 2px solid ${({ theme }) => theme.linkActive};
  }

  &:hover {
    color: ${({ theme }) => theme.linkActive};
    border-bottom: 2px solid ${({ theme }) => theme.linkActive};
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }

    75% {
      opacity: 0.2;
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translateX(0);
    }

    75% {
      opacity: 0;
    }

    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
`
export const Overlay = styled.div`
  display: ${({ openMenu }) => (openMenu ? "block" : "none")};
  z-index: 10;
  width: 100%;
  height: 100%;
  position: absolute;
`

export const SideBar = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("/assets/images/sideBarImg.jpg");
  background-color: ${({ theme }) => theme.bgSideBar};
  height: 100vh;
  clip-path: ${({ openMenu }) =>
    openMenu ? "circle(150% at top left)" : "circle(0px at top left)"};
  /*height: ${({ openMenu }) => (openMenu ? "100vh" : "0px")};
  overflow: ${({ openMenu }) => (openMenu ? "default" : "hidden")};*/

  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.bgSideBar};
  background-size: cover;
  padding: 0 5rem;
  top: 0;
  left: 0;
  transition: all 0.4s ease-in-out;
  transition-delay: ${({ openMenu }) => (openMenu ? "0s" : "250ms")};
  z-index: 11;

  ${({ openMenu }) =>
    openMenu
      ? `

    ${NavLinkSideBar} {
      opacity: 0;
      animation: fadeIn cubic-bezier(0.53, 0.01, 0.26, 1.01) 400ms forwards;
    }

    ${NavLinkSideBar}:nth-child(1) {
      animation-delay: 0s;
    } 
    ${NavLinkSideBar}:nth-child(2) {
      animation-delay: 100ms;
    } 
    ${NavLinkSideBar}:nth-child(3) {
      animation-delay: 200ms;
    } 
    ${NavLinkSideBar}:nth-child(4) {
      animation-delay: 300ms;
    } 
    ${NavLinkSideBar}:nth-child(5) {
      animation-delay: 400ms;
    } 
      
  `
      : `

        ${NavLinkSideBar} {
          opacity: 1;
          animation: fadeOut cubic-bezier(0.53, 0.01, 0.26, 1.01) 200ms forwards;    
        }

    ${NavLinkSideBar}:nth-child(5) {
      animation-delay: 0s;
    } 
    ${NavLinkSideBar}:nth-child(4) {
      animation-delay: 50ms;
    } 
    ${NavLinkSideBar}:nth-child(3) {
      animation-delay: 100ms;
    } 
    ${NavLinkSideBar}:nth-child(2) {
      animation-delay: 150ms;
    } 
    ${NavLinkSideBar}:nth-child(1) {
      animation-delay: 200ms;
    } 

  `}
`

export const SideBarNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-between;
`
