import { useState, useEffect } from "react";
import Input from "../components/Input";
import Loader from "react-js-loader";
import { RUTAS } from "../assets/utils/constants";
import Nav from "../components/navBar";

export default function ModificarAnuncio() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id") || "ID del anuncio";
  const titulo = urlParams.get("titulo") || "Titulo del anuncio";

  const [anuncio, setAnuncio] = useState(null);
  const [loading, setLoading] = useState(true);
  const { enviarEditar } = RUTAS;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://anuncios.vercel.app/anuncios?id=${id}&titulo=${titulo}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.length > 0) {
          setAnuncio(data[0]); // Establecer el anuncio encontrado con el ID dado
        } else {
          console.error("Anuncio no encontrado");
        }
        setLoading(false); // Establecer loading en false una vez que se cargan los datos
      } catch (error) {
        console.error(error);
        setLoading(false); // Establecer loading en false en caso de error
      }
    };

    fetchData();
  }, [id, titulo]); // Dependencia: id y titulo

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-900">
        <Loader
          type="spinner-default"
          bgColor={"#3b83f6"}
          title={"Cargando..."}
          color={"#3b83f6"}
          size={100}
        />
      </div>
    );
  }
  if (!anuncio) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-900">
        <p className="text-white">Error: Anuncio no encontrado</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 h-[110vh]">
      <Nav />
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-200 dark:bg-slate-950 p-8 rounded-lg shadow-md mt-[60px]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-200 mb-6 text-center">
          Modificar anuncio
        </h2>

        <form id="modificarAnuncioForm" method="post" action={enviarEditar}>
          <Input
            label="Titulo"
            type="text"
            name="titulo"
            value={anuncio.titulo || ""}
            placeholder={anuncio.titulo || ""}
          />

          <input type="hidden" name="anuncioID" value={anuncio.id || ""} />

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-900"
              htmlFor="bio"
            >
              Mensaje
            </label>
            <textarea
              className="mt-1 p-2 w-full bg-gray-300 dark:bg-slate-900 dark:text-slate-200 border-none focus:outline-none  rounded-md text-gray-900 resize-none"
              rows="3"
              name="mensaje"
              id="bio"
              defaultValue={anuncio.mensaje || ""}
            ></textarea>
          </div>

          <Input
            label="Imagen"
            type="text"
            name="imagen"
            placeholder="Insertar url de la imagen"
            value={anuncio.imagen || ""}
          />

          <Input
            label="Contenido adjunto"
            type="text"
            name="adjunto"
            placeholder="Insertar enlace contenido adjunto"
            value={anuncio.contenido_adjunto || ""}
          />

          <div className="flex justify-center mt-[20px]">
            <button
              className="bg-gray-900 border text-gray-200 px-4 py-2 font-bold rounded-md hover:bg-gray-300 hover:text-gray-900 hover:border border-gray-900 transition duration-[.3s]"
              
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
