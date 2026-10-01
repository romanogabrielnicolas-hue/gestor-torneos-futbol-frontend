import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Inicio from "./pages/Inicio";
import Equipos from "./pages/Equipos";
import Jugadores from "./pages/Jugadores";
import Partidos from "./pages/Partidos";

function App() {
  const [pagina, setPagina] = useState("inicio");

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar setPagina={setPagina} />
        <div className="flex-grow-1">
          {pagina === "inicio" && <Inicio setPagina={setPagina} />}
          {pagina === "equipos" && <Equipos setPagina={setPagina} />}
          {pagina === "jugadores" && <Jugadores setPagina={setPagina} />}
          {pagina === "partidos" && <Partidos setPagina={setPagina} />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
