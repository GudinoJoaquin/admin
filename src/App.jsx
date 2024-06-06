import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Anuncios from "./pages/Anuncios.jsx";
import CrearAnuncio from "./pages/CrearAnuncio.jsx";
import ModificarAnuncios from "./pages/ModificarAnuncios.jsx";
import Login from "./pages/Login.jsx";
import Configurar from "./pages/Configurar.jsx";
import { getCookie } from "./assets/utils/cookieFunctios.js";
import { COOKIE_INFO } from "./config/cookieInfo.js";
import { RUTAS } from "./config/routes.js";

export const Context = React.createContext();

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  const { home, crear, editar, login, configurar } = RUTAS;
  const { name, value } = COOKIE_INFO

  useEffect(() => {
    const cookie = getCookie(name); // Lee la cookie
    if (cookie === value) {
      setSignedIn(true);
    }
  }, []); // Ejecutar solo una vez al cargar la aplicación

  return (
    <Context.Provider value={{ signedIn, setSignedIn }}>
      {/* Aca se definen las rutas de cada pagina */}
      <Router>
        <Routes>
          <Route path={home} element={signedIn ? <Anuncios /> : <Login />} />
          <Route path={login} element={<Login />} />
          <Route
            path={crear}
            element={signedIn ? <CrearAnuncio /> : <Login />}
          />
          <Route
            path={editar}
            element={signedIn ? <ModificarAnuncios /> : <Login />}
          />
          <Route
            path={configurar}
            element={signedIn ? <Configurar /> : <Login />}
          />
        </Routes>
      </Router>
    </Context.Provider>
  );
}
