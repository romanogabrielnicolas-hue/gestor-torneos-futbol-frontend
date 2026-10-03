import { Routes, Route } from "react-router-dom";

import Inicio from "../pages/Inicio";
import Equipos from "../pages/Equipos";
import Jugadores from "../pages/Jugadores";
import Partidos from "../pages/Partidos";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/equipos" element={<Equipos />} />
      <Route path="/jugadores" element={<Jugadores />} />
      <Route path="/partidos" element={<Partidos />} />
    </Routes>
  );
}

export default AppRoutes;
