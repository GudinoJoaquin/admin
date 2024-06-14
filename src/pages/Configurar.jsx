import { useState, useEffect } from "react";
import { SERVER_KEY } from "../config/serverKey"; // Importa la API key
import { USUARIO } from "../assets/utils/usserObj"; // Importa el nombre y contraseña del usuario
import { COOKIE_INFO } from "../config/cookieInfo";
import Input from "../components/Input";
import Nav from "../components/navBar";

export default function Configurar() {
  const [newCookie, setNewCookie] = useState(COOKIE_INFO.value);

  const generarCookie = (e) => {
    e.preventDefault();
    const ABCDARIO =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 720; i++) {
      result += ABCDARIO[Math.floor(Math.random() * ABCDARIO.length)];
    }
    setNewCookie(result);
  };

  return (
    <div className="bg-white dark:bg-slate-900 h-[100.2vh] mt-[-2px] mb-[-2px]">
      <Nav />
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-200 dark:bg-slate-950 p-8 rounded-lg shadow-md mt-[60px]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-200 mb-6 text-center">
          Configuración
        </h2>

        <form method="POST" action="http://anuncios.vercel.app/updateUsuario">
          <Input type="hidden" value={SERVER_KEY} name="api" />

          <Input
            label="Usuario"
            type="text"
            name="user"
            placeholder={USUARIO.user}
          />

          <Input
            label="Contraseña"
            type="text"
            name="pass"
            placeholder={USUARIO.pass}
          />

          <button
            onClick={generarCookie}
            className="dark:text-slate-200 bg-slate-900 p-[20px]"
          >
            Regenerar cookie
          </button>

          <input type="hidden" value={newCookie} defaultValue={COOKIE_INFO.value} name="cookie" />

          <div className="flex justify-center mt-[20px]">
            <button
              className="bg-gray-900 border text-gray-200 px-4 py-2 font-bold rounded-md hover:bg-gray-300 hover:text-gray-900 hover:border border-gray-900 transition duration-[.3s]"
              type="submit"
            >
              Cambiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
