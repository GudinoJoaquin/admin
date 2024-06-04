import React, { useState, useEffect, useRef } from "react";
import { setCookie } from "../assets/utils/cookie";
import { COOKIE_INFO } from "../assets/utils/constants";

export default function Verificacion() {
  // Estado para almacenar el código ingresado por el usuario
  const [userCode, setUserCode] = useState("");

  // Estado para almacenar el código obtenido del servidor
  const [serverCode, setServerCode] = useState("");

  // Estado para rastrear si se ha generado la cookie
  const [cookieGenerated, setCookieGenerated] = useState(false);

  // Estado para rastrear los intentos fallidos de verificación
  const [failedAttempts, setFailedAttempts] = useState(0);

  // Referencia mutable para rastrear si se está realizando una solicitud al servidor
  const isFetching = useRef(false);

  // Efecto para obtener el código del servidor al montar el componente
  useEffect(() => {
    const fetchCode = async () => {
      if (!isFetching.current) {
        isFetching.current = true;
        try {
          // Realizar una solicitud al servidor para obtener el código de verificación
          const data = await (await fetch("https://anuncios.vercel.app/resend")).text();
          // Establecer el código obtenido del servidor en el estado correspondiente
          setServerCode(data.trim());
        } catch (error) {
          console.error("Error al obtener el código del servidor:", error);
        }
      }
    };
    fetchCode();
  }, []);

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userCode === serverCode) {
      // Si el código ingresado coincide con el código del servidor, generar una cookie
      setCookie(COOKIE_INFO.name, COOKIE_INFO.value, 3);
      // Establecer el estado para indicar que se ha generado la cookie
      setCookieGenerated(true);
      // Recargar la página después de 0.5 segundos
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      // Si el código ingresado no coincide con el código del servidor, incrementar los intentos fallidos
      setFailedAttempts((prevAttempts) => prevAttempts + 1);
    }
  };

  // Manejar el cambio en el campo de entrada del usuario
  const handleChange = (event) => {
    setUserCode(event.target.value);
  };

  // Efecto para recargar la página si se exceden los 3 intentos fallidos
  useEffect(() => {
    if (failedAttempts >= 3) {
      // Recargar la página después de 0.2 segundos si se exceden los 3 intentos fallidos
      setTimeout(() => {
        window.location.reload();
      }, 200);
    }
  }, [failedAttempts]);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <div className="max-w-md w-full bg-gray-200 dark:bg-slate-950 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-200 mb-6 text-center">
          Verificación de Código
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 dark:text-slate-200 mb-2 text-center">
              Ingrese su código de verificación
            </label>
            <input
              type="text"
              value={userCode}
              onChange={handleChange}
              maxLength="6"
              className="w-full px-4 py-2 text-xl border border-gray-300 rounded-md bg-slate-900 dark:bg-slate-700 text-white dark:text-slate-200"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-gray-900 text-gray-200 px-4 py-2 font-bold rounded-md hover:bg-gray-400 hover:text-gray-900 transition duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
        {cookieGenerated && (
          <p className="text-green-500 text-sm mt-4 text-center">
            ¡Verificación realizada con éxito!
          </p>
        )}
      </div>
    </div>
  );
}
