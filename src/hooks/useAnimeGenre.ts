import { getAnimeByGenre } from "@/lib/apiCall";
import { AnimeListRow, Pagination } from "@/types/types";
import { useEffect, useState } from "react";

type Animes = {
  data: AnimeListRow[];
  pagination: Pagination;
}

export function useAnimeGenre(id: number, page: number) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animes, setAnimes] = useState<Animes | any>({}); //ini benerin jgn any

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      try {
        const anime = await getAnimeByGenre(id, page);
        setAnimes(anime);
      } catch (error: Error | any) {
        throw new Error(error.message);
      }
      setIsFetching(false);
    })();
  }, [id, page])

  return {
    animes: animes.data,
    pagination: animes.pagination,
    isFetching
  };
}