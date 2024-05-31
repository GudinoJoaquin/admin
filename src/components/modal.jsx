import React from "react";

export default function ModalConfirmacion({
  mensaje,
  botonColor,
  textoBoton,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-950 p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-800 dark:text-slate-200 mb-4">
          {mensaje}
        </p>
        <div className="flex justify-center">
          <button
            onClick={onConfirm}
            className={`${botonColor} text-white px-4 py-2 rounded-md mr-4 hover:bg-${botonColor}-700`}
          >
            {textoBoton}
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-400 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-500"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
