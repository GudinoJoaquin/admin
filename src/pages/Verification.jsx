import React, { useState, useEffect, useRef } from "react";
import { setCookie } from "../assets/utils/cookie";
import { COOKIE_INFO } from "../assets/utils/constants";

export default function Verificacion() {
  const [userCode, setUserCode] = useState("");
  const [serverCode, setServerCode] = useState("");
  const [cookieGenerated, setCookieGenerated] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const isFetching = useRef(false);

  useEffect(() => {
    const fetchCode = async () => {
      if (!isFetching.current) {
        isFetching.current = true;
        try {
          const response = await fetch("https://anuncios.vercel.app/resend", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "api-key": "CBuW$66aWU!MbZ41h^JH^nLAw%^^sh%JfJmp82#ud*YX91Fx5N6%t6%!udFF" // Aquí estableces la clave API correspondiente a usuarios no verificados
            }
          });
          if (!response.ok) {
            throw new Error("Error al obtener el código del servidor");
          }
          const data = await response.text();
          setServerCode(data.trim());
        } catch (error) {
          console.error("Error al obtener el código del servidor:", error);
        }
      }
    };
    fetchCode();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userCode === serverCode) {
      setCookie(COOKIE_INFO.name, COOKIE_INFO.value, 3);
      setCookieGenerated(true);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      setFailedAttempts((prevAttempts) => prevAttempts + 1);
    }
  };

  const handleChange = (event) => {
    setUserCode(event.target.value);
  };

  useEffect(() => {
    if (failedAttempts >= 3) {
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
