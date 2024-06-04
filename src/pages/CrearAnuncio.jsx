import { useState } from "react";
import Input from "../components/Input";
import ModalConfirmacion from "../components/modal";
import Nav from "../components/navBar";
import { RUTAS } from "../assets/utils/constants";

export default function CrearAnuncio() {
  const { enviar } = RUTAS;

  const [showModal, setShowModal] = useState(false);

  const handleCambiarClick = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const confirmarCambiar = () => {
    setShowModal(false);
    document.getElementById("crearAnuncioForm").submit();
  };

  const cancelarCambiar = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 h-[110vh]">
      <Nav/>
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-200 dark:bg-slate-950 p-8 rounded-lg shadow-2xl mt-[40px]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-200 mb-6 text-center">
          Crear anuncio
        </h2>

        <form id="crearAnuncioForm" method="post" action={`${enviar}?apiKey=v`}>
          {/* Resto del formulario */}
        </form>
      </div>
      {showModal && (
        <ModalConfirmacion
          mensaje="¿Estás seguro de que deseas crear este anuncio?"
          botonColor="bg-emerald-900"
          textoBoton="Confirmar"
          onConfirm={confirmarCambiar}
          onCancel={cancelarCambiar}
        />
      )}
    </div>
  );
}
