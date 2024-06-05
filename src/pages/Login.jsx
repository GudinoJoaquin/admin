import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { Context } from "../App";
import { setCookie } from "../assets/utils/cookie";
import { RUTAS, COOKIE_INFO, USUARIO } from "../assets/utils/constants";
import Verificacion from "./Verification";

export default function Login() {
  const { setSignedIn } = useContext(Context);
  const [showVerification, setShowVerification] = useState(false);
  const [user, setUser] = useState()
  const [attempts, setAttempts] = useState(0);
  const navigate = useNavigate();
  const isFetching = useRef(false)
  const { home } = RUTAS;
  const { name, value } = COOKIE_INFO;

  

  const submit = (e) => {
    e.preventDefault(); 
    const inputUser = document.querySelector("input[name='user']").value;
    const inputPass = document.querySelector("input[name='pass']").value;

    if (inputUser === user,name && inputPass === user.pass) {
      setShowVerification(true);
    } else {
      setSignedIn(false);
      setAttempts((prevAttempts) => prevAttempts + 1);
      if (attempts >= 10) {
        setTimeout(() => {
          setAttempts(0);
        }, 30000);
      }
    }
  };

  const handleVerificationSubmit = (verificationCode) => {
    // Aquí debes implementar la lógica para verificar el código
    // Suponiendo que el código es correcto
    setSignedIn(true);
    setCookie(name, value, 3); // Establece la expiración en 3 horas
    navigate(home);
  };

  if (showVerification) {
    return <Verificacion onSubmit={handleVerificationSubmit} />;
  }

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
