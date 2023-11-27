import { getFullAnimeCharacters } from "@/lib/apiCall";
import { useEffect, useState } from "react";

export function useAnimeFullCharacters(id: number) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animes, setAnimes] = useState({});

  useEffect(() => {
    (async function () {
      const animes = await getFullAnimeCharacters(id);
      setAnimes(animes);
    })();
  }, [id]);



  return {
    animes,
    isFetching,
  };
}