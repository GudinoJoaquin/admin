import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Anuncios from "./pages/Anuncios.jsx";
import CrearAnuncio from "./pages/CrearAnuncio.jsx";
import ModificarAnuncios from "./pages/ModificarAnuncios.jsx";
import Login from "./pages/Login.jsx";
import { getCookie } from "./assets/utils/cookie.js";
import { RUTAS } from "./assets/utils/constants.js";
import { aux, auc} from './pages/Login.jsx'

export const Context = React.createContext();

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [codigo, setCodigoState] = useState();
  const { home, crear, editar, login } = RUTAS;
  // const {name, value} = COOKIE_INFO

  useEffect(() => {
    const isAdminCookie = getCookie(aux); // Leer la cookie 'isAdmin'
    if (isAdminCookie === auc) {
      setSignedIn(true);
    }
  }, [aux, auc]); // Ejecutar solo una vez al cargar la aplicación

  return (
    <Context.Provider value={{ signedIn, setSignedIn, codigo, setCodigo: setCodigoState }}>
      <Router>
        <Routes>
          <Route path={home} element={signedIn ? <Anuncios /> : <Login />} />
          <Route path={login} element={<Login />} />
          <Route path={crear} element={signedIn ? <CrearAnuncio /> : <Login />} />
          <Route path={editar} element={signedIn ? <ModificarAnuncios /> : <Login />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}
