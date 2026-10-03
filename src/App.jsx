import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <div className="flex-grow-1">
          <AppRoutes />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
