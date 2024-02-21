import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Portfolio from "./pages/PortFolio";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <Portfolio>
          <Home />
        </Portfolio>}
      />
      <Route path="/education" element={
        <Portfolio>
          <Education />
        </Portfolio>}
      />
      <Route path="/skills" element={
        <Portfolio>
          <Skills />
        </Portfolio>}
      />
      <Route path="/projects" element={
        <Portfolio>
          <Projects />
        </Portfolio>}
      />
      <Route path="/contact" element={
        <Portfolio>
          <Contact />
        </Portfolio>}
      />
    </Routes>
  )
}

export default MainRoutes;