import { getTopSeasonAnimes } from "@/lib/apiCall";
import { useEffect, useState } from "react";
import type { AnimesTopSeason } from "@/types/types";


export function useAnimeTopFavorite() {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animesTopSeason, setAnimesTopSeason] = useState<AnimesTopSeason[]>([]);

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      try {
        const animes = await getTopSeasonAnimes();
        setAnimesTopSeason(animes.data);
      } catch (error: Error | any) {
        throw new Error(error.message);
      }
      setIsFetching(false);
    })();
  }, []);



  return { animesTopSeason, isFetching };
}

