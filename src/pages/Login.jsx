import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { Context } from "../App";
import { USUARIO } from "../assets/utils/constants";
import { setCookie, deleteCookie } from "../assets/utils/cookie";
import { RUTAS, COOKIE_INFO } from "../assets/utils/constants";
import { setCodigo } from "../assets/utils/functions";

export default function Login() {
  const { setSignedIn } = useContext(Context);
  const navigate = useNavigate();
  const { home } = RUTAS;
  const { name, value } = COOKIE_INFO;

  const submit = (e) => {
    e.preventDefault();
    const { user, pass } = USUARIO;
    const inputUser = document.querySelector("input[name='user']").value;
    const inputPass = document.querySelector("input[name='pass']").value;

    if (inputUser === user && inputPass === pass) {
      setSignedIn(true);
      setCookie(name, value, 3); // Establece la expiración en 3 horas
      navigate(home);
    } else {
      setSignedIn(false);
    }
  };

  return (
    <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-200 p-8 rounded-lg shadow-md mt-[60px]">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Iniciar sesión
      </h2>

      <form method="post" onSubmit={submit}>
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
