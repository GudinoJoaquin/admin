import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { RUTAS } from "../assets/utils/constants";
import ModalConfirmacion from "../components/modal";

export default function AdminCard({
  id,
  imagen: img,
  titulo,
  mensaje,
  fecha,
  contenido_adjunto: adjunto,
}) {
  const [showModal, setShowModal] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { home, editar, eliminar } = RUTAS;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleEliminarClick = () => {
    setShowModal(true);
  };

  const confirmarEliminar = () => {
    console.log(`Eliminando anuncio con id: ${id}`);
    fetch(`${eliminar}${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log("Respuesta del servidor:", response);
      })
      .then((data) => {
        console.log("Datos recibidos del servidor:", data);
        toast.success("Anuncio eliminado correctamente");
        setTimeout(() => {
          toast.loading("Volviendo al inicio");
          setTimeout(() => {
            window.location.href = home;
          }, 1000);
        }, 500);
      })
      .catch((error) => {
        console.error("Error al eliminar el anuncio:", error);
        toast.error("Error al eliminar el anuncio");
      });
  };

  const cancelarEliminar = () => {
    setShowModal(false);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength && screenWidth <= 430) {
      return text.substring(0, 134) + "...";
    } else if (text.length > maxLength && screenWidth > 430) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="flex justify-center items-center mt-[100px] overflow-x-hidden bg-white dark:bg-[#1D1D1D]">
      <Toaster richColors closeButton />
      <div className="relative w-full xl:h-64 max-w-[400px] xl:w-full xl:max-w-[90vw] mx-4 flex xl:flex-row flex-col rounded-xl bg-white dark:bg-[#2D2D2D] dark:text-slate-200 bg-clip-border text-gray-700 shadow-xl">
        <div className="relative xl:flex-2 h-40 xl:h-64 xl:w-[30%] overflow-hidden xl:rounded-l-xl xl:rounded-r-none rounded-t-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img className="size-full" src={img} alt={titulo} />
        </div>
        <div className="p-6 xl:flex-1">
          <div className="flex">
            <div className="flex-1 mr-[20px]">
              <div className="flex justify-between">
                <h5 className="font-bold text-[30px]">{titulo}</h5>
                <h5 className="font-semibold text-[20px] ml-[20px] mt-[10px] text-black dark:text-white flex justify-end">
                  {fecha}
                </h5>
              </div>
              <p className="font-sans font-light leading-relaxed text-wrap flex-1">
                {truncateText(mensaje, 400)}
              </p>
              <div className="flex gap-[50px] ml-[20px] mt-[10px]">
                <Link
                  data-ripple-light="true"
                  type="button"
                  className="select-none mt-[10px] ml-[-20px] rounded-lg bg-blue-500 py-[10px] px-[10px] text-center text-nowrap align-middle font-sans text-[14px] font-bold uppercase text-white shadow-md shadow-blue-500/20 dark:shadow-slate-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 dark:hover:shadow-slate-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  to={adjunto}
                >
                  Saber más
                </Link>
                <Link
                  // onClick={handleModificarClick}
                  to={`${editar}?id=${id}&titulo=${encodeURIComponent(titulo)}`}
                  data-ripple-light="true"
                  type="button"
                  className="select-none mt-[10px] ml-[-20px] rounded-lg border-2 border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white py-[10px] px-[10px] text-center text-nowrap align-middle font-sans text-[14px] font-semibold uppercase shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Modificar
                </Link>
                <button
                  onClick={handleEliminarClick}
                  data-ripple-light="true"
                  type="button"
                  className="select-none mt-[10px] ml-[-20px] rounded-lg border-dashed border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white py-[10px] px-[10px] text-center text-nowrap align-middle font-sans text-[14px] font-semibold uppercase shadow-md shadow-red-700/20 transition-all hover:shadow-lg hover:shadow-red-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Descartar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalConfirmacion
          mensaje="¿Estás seguro de que deseas eliminar este anuncio?"
          botonColor="bg-red-600"
          textoBoton="Confirmar"
          onConfirm={confirmarEliminar}
          onCancel={cancelarEliminar}
        />
      )}
    </div>
  );
}
