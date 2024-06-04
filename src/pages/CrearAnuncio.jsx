import { useState } from "react";
import Input from "../components/Input";
import { RUTAS } from "../assets/utils/constants";
import ModalConfirmacion from "../components/modal"; 
import Nav from "../components/navBar";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(enviar, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "nv" // Aquí estableces la clave API correspondiente
        },
        body: JSON.stringify({
          titulo: event.target.titulo.value,
          mensaje: event.target.mensaje.value,
          imagen: event.target.imagen.value,
          adjunto: event.target.adjunto.value
        })
      });

      if (!response.ok) {
        throw new Error("Error al crear el anuncio");
      }

      // Aquí puedes manejar la respuesta si es necesaria
    } catch (error) {
      console.error("Error al crear el anuncio:", error);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 h-[110vh]">
      <Nav/>
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-200 dark:bg-slate-950 p-8 rounded-lg shadow-2xl mt-[40px]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-200 mb-6 text-center">
          Crear anuncio
        </h2>

        <form id="crearAnuncioForm" onSubmit={handleSubmit}>
          <Input label="Titulo" type="text" name="titulo" />

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-900 dark:text-slate-200"
              htmlFor="bio"
            >
              Mensaje
            </label>
            <textarea
              className="mt-1 p-2 w-full bg-gray-300 dark:bg-slate-900 dark:text-slate-200 border-none focus:outline-none rounded-md text-gray-900 resize-none"
              rows="3"
              name="mensaje"
              id="bio"
            ></textarea>
          </div>
          <Input
            label="Imagen"
            type="text"
            name="imagen"
            placeholder="Ingresar url de la imagen"
          />
          <Input
            label="Contenido adjunto"
            type="text"
            name="adjunto"
            placeholder="Enlace del contenido adjunto"
          />

          <div className="flex justify-center mt-[20px]">
            <button
              className="bg-gray-900 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-slate-950 dark:hover:text-slate-200 dark:hover:border-2 dark:hover:border-slate-200 border text-gray-200 px-4 py-2 font-bold rounded-md hover:bg-gray-300 hover:text-gray-900 hover:border border-gray-900 transition duration-[.3s]"
              onClick={handleCambiarClick}
            >
              Enviar
            </button>
          </div>
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
