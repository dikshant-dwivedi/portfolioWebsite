import React, { useState, useEffect } from "react"
import SoundBar from "./SoundBar"
import {
  Nav,
  NavLink,
  NavChangeThemeSwitch,
  NavChangeThemeSwitchHandle,
  NavHamburder,
  NavMenu,
  NavMenuButtons,
  SideBar,
  NavLinkSideBar,
  SideBarNavContainer,
} from "./styles"
import { CgMenu, CgClose } from "react-icons/cg"
import ClickAwayListener from "react-click-away-listener"
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
      <Nav>
        <NavMenu>
          {ROUTE_NAV.map(({ link_name, path }) => (
            <NavLink to={path} key={link_name + path}>
              {link_name}
            </NavLink>
          ))}
        </NavMenu>
        <NavMenuButtons>
          <NavHamburder onClick={() => setOpenMenu((prev) => !prev)}>
            {openMenu ? <CgClose /> : <CgMenu />}
          </NavHamburder>
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
      <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
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
      </ClickAwayListener>
    </>
  )
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
}

export default Navbar
