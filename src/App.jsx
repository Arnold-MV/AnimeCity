import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categorias from "./pages/Categorias";
import NuevoVideo from "./pages/NuevoVideo";
import InfoTable from "./pages/InfoTablet";
function App() {
  return (
    <div className="h-full grid-cols-6 gap-2 text-white font-font-custom 2xl:h-full">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/video/:categoria" element={<Categorias />} />
          <Route path="/nuevo-video" element={<NuevoVideo />} />
          <Route path="/editar" element={<InfoTable />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
{
  /* MAIN className="col-start-1 row-start-6" */
}
{
  /* FOOTER className="row-start-7" */
}
