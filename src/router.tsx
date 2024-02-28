import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/home" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default MainRoutes;