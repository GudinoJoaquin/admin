import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Anuncios from "./pages/Anuncios.jsx";
import CrearAnuncio from "./pages/CrearAnuncio.jsx";
import ModificarAnuncios from "./pages/ModificarAnuncios.jsx";
import Login from "./pages/Login.jsx";
import { getCookie } from "./assets/utils/cookie.js";
import { RUTAS, COOKIE_INFO } from "./assets/utils/constants.js";

export const Context = React.createContext();

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  const { home, crear, editar, login } = RUTAS;
  // const { name, value } = COOKIE_INFO

  // useEffect(() => {
  //   const cookie = getCookie(name); // Lee la cookie
  //   if (cookie === value) {
  //     setSignedIn(true);
  //   }
  // }, []); // Ejecutar solo una vez al cargar la aplicación

  return (
    <Context.Provider value={{ signedIn, setSignedIn }}>
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
        </Routes>
      </Router>
    </Context.Provider>
  );
}
