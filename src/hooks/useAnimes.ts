import { getAllAnime } from "@/lib/apiCall";
import { useEffect, useState } from "react";

export function useAnimes(page: number, letter: string) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animes, setAnimes] = useState({});

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      try {
        const animes = await getAllAnime(page, letter);
        setAnimes(animes);
      } catch (error: Error | any) {
        throw new Error(error.message);
      }
      setIsFetching(false);
    })();
  }, [page, letter]);



  return {
    animes: animes.data,
    pagination: animes.pagination,
    isFetching,
  };
}