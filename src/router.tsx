import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/PortFolio";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <Portfolio>
          <Home />
        </Portfolio>}
      />
    </Routes>
  )
}

export default MainRoutes;