import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"
import { motion } from "framer-motion"

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.bg}; //black
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0.5rem 5vw;
  z-index: 10;
`

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.txt}; //white
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  transition: color ease-in 0.2s, border-color ease-in 0.2s;

  &.active {
    color: #15cdfc;
    border-bottom: 2px solid #15cdfc;
  }

  &:hover {
    color: #15cdfc;
    border-bottom: 2px solid #15cdfc;
  }
`

export const NavPlayButton = styled.button`
  padding: 0 1rem;
  min-width: 0;
`

export const NavChangeThemeSwitch = styled.div`
  width: 70px;
  height: 35px;
  background-color: ${({ theme }) => theme.swtch};
  display: flex;
  justify-content: ${({ isOn }) => (!isOn ? "flex-start" : "flex-end")};
  border-radius: 40px;
  padding: 5px;
  cursor: pointer;
`

export const NavChangeThemeSwitchHandle = styled(motion.div)`
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.txt}; //white
  border-radius: 20px;
`

export const NavHamburder = styled.div`
  display: none;

  @media screen and (max-width: 780px) {
    color: ${({ theme }) => theme.txt}; //white
    display: flex;
    font-size: 2rem;
    align-items: center;
    cursor: pointer;
    transition: color ease-in 0.2s;
    z-index: 15;
  }

  &:hover {
    color: #15cdfc;
  }
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
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    width: 100vw;
  }
`

export const SideBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.bg}; //black
  height: 100vh;
  position: absolute;
  padding: 0 5rem;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 11;
  transform: ${({ openMenu }) =>
    openMenu ? "translateX(0)" : "translateX(-100%)"};
`

export const NavLinkSideBar = styled(Link)`
  color: ${({ theme }) => theme.txt}; //#fff
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 0.5rem;
  cursor: pointer;
  transition: color ease-in 0.2s, border-color ease-in 0.2s;

  &.active {
    color: #15cdfc;
    border-bottom: 2px solid #15cdfc;
  }

  &:hover {
    color: #15cdfc;
    border-bottom: 2px solid #15cdfc;
  }
`

export const SideBarNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-between;
`
