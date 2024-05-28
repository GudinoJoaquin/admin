import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { Context } from "../App";
import { USUARIO } from "../assets/constants/constants";
import { setCookie } from "../assets/utils/cookie";

export default function Login() {
  const [signedIn, setSignedIn] = useContext(Context);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const { user, pass } = USUARIO;
    const inputUser = document.querySelector("input[name='user']").value;
    const inputPass = document.querySelector("input[name='pass']").value;

    if (inputUser === user && inputPass === pass) {
      setSignedIn(true);
      setCookie('isAdmin', true, 3); // Crear cookie para el usuario admin por 3 horas
      navigate('/');
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
