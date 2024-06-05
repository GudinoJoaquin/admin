import { useState, useEffect } from 'react';

export default function useAnuncios(path) {
  const [anuncios, setAnuncios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const anunciosPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      const url = path;
      try {
        const response = await fetch(path);
        const data = await response.json();
        setAnuncios(data);
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { anuncios, loading, currentPage, setCurrentPage, anunciosPerPage };
}
