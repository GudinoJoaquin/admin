import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import ThemeSwitch from "../components/ThemeSwitch";
import { RUTAS } from "../assets/utils/constants";
import ModalConfirmacion from "../components/modal";
import Nav from "../components/navBar";

export default function Configurar() {
  const { home, enviarEditar, crear } = RUTAS;
  const usser = "DiegoAdmin";
  const pass = "EESTN5admin";
  const cookie = "baidwabdiuabwdiuawbiudbawiudb";

  const [showModal, setShowModal] = useState(false);
  const handleCambiarClick = (event) => {
    event.preventDefault();
    setShowModal(true);
  };
  const confirmarCambiar = () => {
    // Aquí puedes agregar la lógica para enviar el formulario si es necesario.
    // Por ahora, solo cerramos el modal.
    setShowModal(false);
  };
  const cancelarCambiar = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 h-[100.2vh] mt-[-2px] mb-[-2px]">
      <Nav/>
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-200 dark:bg-slate-950 p-8 rounded-lg shadow-md mt-[60px]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-200 mb-6 text-center">
          Configuracion
        </h2>

        <form method="post" action={enviarEditar}>
          <Input
            label="Usuario"
            type="text"
            name="usser"
            value={usser}
            placeholder=""
          />

          <input type="hidden" name="anuncioID" value="" />

          <Input
            label="Contraseña"
            type="text"
            name="pass"
            placeholder=""
            value={pass}
          />

          <Input
            label="Cookie"
            type="text"
            name="cookie"
            placeholder=""
            value={cookie}
          />

          <div className="flex justify-center mt-[20px]">
            <button
              className="bg-gray-900 border text-gray-200 px-4 py-2 font-bold rounded-md hover:bg-gray-300 hover:text-gray-900 hover:border border-gray-900 transition duration-[.3s]"
              onClick={handleCambiarClick}
            >
              Cambiar
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <ModalConfirmacion
          mensaje="¿Estás seguro de que deseas realizar estos cambios en la configuracio?"
          botonColor="bg-purple-700"
          textoBoton="Confirmar"
          onConfirm={confirmarCambiar}
          onCancel={cancelarCambiar}
        />
      )}
    </div>
  );
}
