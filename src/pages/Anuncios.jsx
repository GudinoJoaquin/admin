import AdminCard from "../components/AdminCard";
import Loader from "react-js-loader";
import useAnuncios from "../assets/hooks/useAnuncios";
import Nav from "../components/navBar";

export default function AdminAnuncios() {
  const { anuncios, loading, currentPage, setCurrentPage, anunciosPerPage } =
    useAnuncios("https://anuncios.vercel.app/anuncios/");

  // Calcular el índice del último anuncio de la página actual
  const indexOfLastAd = currentPage * anunciosPerPage;
  // Calcular el índice del primer anuncio de la página actual
  const indexOfFirstAd = indexOfLastAd - anunciosPerPage;
  // Obtener los anuncios de la página actual
  const currentAds = anuncios.slice(indexOfFirstAd, indexOfLastAd);

  return (
    <>
      <div className="bg-white dark:bg-[#1D1D1D] ">
        <Nav />
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Loader
              type="spinner-default"
              bgColor={"#3b83f6"}
              title={"Cargando..."}
              color={"#3b83f6"}
              size={100}
            />
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center gap-2 mb-[-50px] mt-[20px]">
              {Array.from(
                { length: Math.ceil(anuncios.length / anunciosPerPage) },
                (_, i) => (
                  <button
                    className="dark:text-slate-200 dark:hover:bg-[#2D2D2D] font-semibold underline underline-offset-2 p-[4px] my-2 rounded-sm hover:scale-[1.2] hover:bg-red-100 transition duration-[.3s]"
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>

            {currentAds.map((anuncio) => (
              <AdminCard key={anuncio.id} {...anuncio} />
            ))}
            <div className="flex justify-center items-center gap-2">
              {Array.from(
                { length: Math.ceil(anuncios.length / anunciosPerPage) },
                (_, i) => (
                  <button
                    className="dark:text-slate-200 dark:hover:bg-[#2D2D2D] font-semibold underline underline-offset-2 p-[4px] my-2 rounded-sm hover:scale-[1.2] hover:bg-red-100 transition duration-[.3s]"
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
