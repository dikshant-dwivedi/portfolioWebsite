import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"
import { motion } from "framer-motion"
import sideBarImg from "./../../assets/images/sideBarImg.jpg"

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.navBarbgBody};
  display: flex;
  height: 35px;
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

export const NavHamburder = styled.div`
  display: none;

  @media screen and (max-width: 780px) {
    color: ${({ theme }) => theme.txt};
    display: flex;
    font-size: 2rem;
    align-items: center;
    cursor: pointer;
    transition: color ease-in 0.2s;
    z-index: 15;
  }

  &:hover {
    color: ${({ theme }) => theme.linkActive};
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
  background-image: url(${sideBarImg});
  background-color: ${({ theme }) => theme.bgSideBar};
  height: 100vh;
  box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.bgSideBar};
  background-size: cover;
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
`

export const SideBarNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-between;
`
