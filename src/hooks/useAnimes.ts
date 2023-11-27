import { getAllAnime } from "@/lib/apiCall";
import { useEffect, useState } from "react";

export function useAnimes(page: number) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animes, setAnimes] = useState({});

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      try {
        const animes = await getAllAnime(page);
        setAnimes(animes);
      } catch (error: Error | any) {
        throw new Error(error.message);
      }
      setIsFetching(false);
    })();
  }, [page]);



  return {
    animes: animes.data,
    pagination: animes.pagination,
    isFetching,
  };
}