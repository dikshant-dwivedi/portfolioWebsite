import React, { useState, useEffect } from "react"
import SoundBar from "./SoundBar"
import {
  Nav,
  NavLink,
  NavChangeThemeSwitch,
  NavChangeThemeSwitchHandle,
  NavHamburger,
  NavHamburgerContainer,
  NavMenu,
  NavMenuButtons,
  SideBar,
  NavLinkSideBar,
  SideBarNavContainer,
  Overlay,
} from "./styles"
import { ROUTE_NAV } from "../../constants/routes"

const Navbar = ({ toggleTheme, theme }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    if (theme === "light") {
      setIsOn(false)
    } else {
      setIsOn(true)
    }
  }, [theme])

  return (
    <>
      <Overlay
        openMenu={openMenu}
        onClick={() => {
          setOpenMenu(false)
        }}
      />
      <Nav>
        <NavMenu>
          {ROUTE_NAV.map(({ link_name, path }) => (
            <NavLink to={path} key={link_name + path}>
              {link_name}
            </NavLink>
          ))}
        </NavMenu>
        <NavMenuButtons>
          <NavHamburgerContainer
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setOpenMenu((prev) => !prev)
            }}
          >
            <NavHamburger openMenu={openMenu}></NavHamburger>
          </NavHamburgerContainer>
          {/*<NavPlayButton>ddfsf</NavPlayButton>*/}
          <SoundBar />
          <NavChangeThemeSwitch
            isOn={isOn}
            onClick={() => {
              setIsOn((prev) => !prev)
              toggleTheme()
            }}
          >
            <NavChangeThemeSwitchHandle
              className='handle'
              layout
              transition={spring}
            />
          </NavChangeThemeSwitch>
        </NavMenuButtons>
      </Nav>
      <SideBar openMenu={openMenu}>
        <SideBarNavContainer>
          {ROUTE_NAV.map(({ link_name, path }) => (
            <NavLinkSideBar
              to={path}
              key={link_name + path}
              onClick={() => setOpenMenu(false)}
            >
              {link_name}
            </NavLinkSideBar>
          ))}
        </SideBarNavContainer>
      </SideBar>
    </>
  )
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
}

export default Navbar
