import { Routes, Route, useLocation } from "react-router-dom"
import * as ROUTES from "./constants/routes"
import { Home, Contact, Blog, Experience, Project } from "./pages"
import Navbar from "./components/navbar/index"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./constants/themes"
import GlobalStyle from "./global-styles"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Particles from "react-tsparticles"
import { configDark } from "./config/particleJsBg"

function App() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const location = useLocation()

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      {/*<Particles params={configDark} />*/}
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
          <Route path={ROUTES.PROJECT} element={<Project />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
