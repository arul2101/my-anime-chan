import { getAnimeById } from "@/lib/apiCall";
import { useEffect, useState } from "react";
import type { AnimeDetail } from "@/types/types";

export function useAnimeDetail(id: number) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animeDetail, setAnimeDetail] = useState<AnimeDetail | any>({}); //ini benerin jgn any

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      try {
        const anime = await getAnimeById(id);
        setAnimeDetail(anime.data);
      } catch (error: Error | any) {
        throw new Error(error.message);
      }
      setIsFetching(false);
    })();
  }, [id])

  return { animeDetail, isFetching };
}