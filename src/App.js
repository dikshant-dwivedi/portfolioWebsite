import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import * as ROUTES from "./constants/routes"
import { Home, Contact, Blog, Experience, Project } from "./pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.CONTACT} element={<Contact />} />
        <Route exact path={ROUTES.BLOG} element={<Blog />} />
        <Route exact path={ROUTES.EXPERIENCE} element={<Experience />} />
        <Route exact path={ROUTES.PROJECT} element={<Project />} />
      </Routes>
    </Router>
  )
}

export default App
