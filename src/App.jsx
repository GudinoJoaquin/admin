import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Anuncios from "./pages/Anuncios.jsx";
import CrearAnuncio from './pages/CrearAnuncio.jsx'
import ModificarAnuncios from './pages/ModificarAnuncios.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Anuncios />} />
        <Route path="/crear" element={<CrearAnuncio />} />
        <Route path="/editar" element={<ModificarAnuncios />} />
      </Routes>
    </Router>
  );
}
