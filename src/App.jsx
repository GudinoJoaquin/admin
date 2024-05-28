import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Anuncios from "./pages/Anuncios.jsx";
import CrearAnuncio from "./pages/CrearAnuncio.jsx";
import ModificarAnuncios from "./pages/ModificarAnuncios.jsx";
import Login from "./pages/Login.jsx";
import { getCookie } from './assets/utils/cookie.js'; // Importar la función para leer cookies

export const Context = React.createContext();

export default function App() {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const isAdminCookie = getCookie('isAdmin'); // Leer la cookie 'isAdmin'
    if (isAdminCookie === 'true') {
      setSignedIn(true);
    }
  }, []); // Ejecutar solo una vez al cargar la aplicación

  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      <Router>
        <Routes>
          <Route path="/" element={signedIn ? <Anuncios /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/crear"
            element={signedIn ? <CrearAnuncio /> : <Login />}
          />
          <Route
            path="/editar"
            element={signedIn ? <ModificarAnuncios /> : <Login />}
          />
        </Routes>
      </Router>
    </Context.Provider>
  );
}
