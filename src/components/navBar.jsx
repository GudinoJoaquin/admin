import React from "react";
import { Link } from "react-router-dom";
import { RUTAS } from "../assets/utils/constants";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Nav() {
  const { home, crear, configurar } = RUTAS;

  return (
    <nav className="dark:text-slate-200 p-4 flex justify-between items-center">
      <div className="flex justify-between items-center gap-10 p-4">
        <Link
          to={home}
          className="hover:text-sky-600 scale-[1.2] font-semibold text-[15px] transition duration-[.3s] text-wht"
        >
          Inicio
        </Link>
        <Link
          to={crear}
          className="hover:text-emerald-600 scale-[1.2] font-semibold text-[15px] transition duration-[.3s] text-wht"
        >
          Crear Anuncio
        </Link>
        <Link
          to={configurar}
          className="hover:text-purple-700 scale-[1.2] font-semibold text-[15px] transition duration-[.3s] text-wht"
        >
          Configurar
        </Link>
      </div>
      <div className="flex items-center">
        <ThemeSwitch />
      </div>
    </nav>
  );
}
