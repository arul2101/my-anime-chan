import { getAnimeBySearchParams } from "@/lib/apiCall";
import { useEffect, useState } from "react";
import { AnimeSearch } from "@/types/types";

export function useAnimeSearch(params: string | null, page: number) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animesSearch, setAnimesSearch] = useState<AnimeSearch | any>({});

  useEffect(() => {
    (async function () {
      if (params === null) return;
      setIsFetching(true);
      try {
        const animes = await getAnimeBySearchParams(params, page);
        setAnimesSearch(animes);
      } catch (error: Error | any) {
        throw new Error(error.message);
      }
      setIsFetching(false);
    })();
  }, [params, page]);



  return {
    animesSearch: animesSearch.data,
    pagination: animesSearch.pagination,
    isFetching,
  };
}