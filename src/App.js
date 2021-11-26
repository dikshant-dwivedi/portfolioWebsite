import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import * as ROUTES from "./constants/routes"
import { Home, Contact, Blog, Experience, Project } from "./pages"
import Navbar from "./components/navbar/index"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./constants/themes"
import GlobalStyle from "./global-styles"
import { useState } from "react"

function App() {
  //const [theme, toggleTheme] = useTheme()
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home />} />
          <Route exact path={ROUTES.CONTACT} element={<Contact />} />
          <Route exact path={ROUTES.BLOG} element={<Blog />} />
          <Route exact path={ROUTES.EXPERIENCE} element={<Experience />} />
          <Route exact path={ROUTES.PROJECT} element={<Project />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
