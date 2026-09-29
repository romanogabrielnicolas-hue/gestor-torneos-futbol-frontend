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
      <Navbar setPagina={setPagina} />

      {pagina === "inicio" && <Inicio setPagina={setPagina} />}
      {pagina === "equipos" && <Equipos />}
      {pagina === "jugadores" && <Jugadores />}
      {pagina === "partidos" && <Partidos />}

      <Footer />
    </>
  );
}

export default App;
