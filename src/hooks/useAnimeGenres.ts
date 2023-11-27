import { axiosInstance } from "@/lib/axios";
import { Genres } from "@/types/types";
import { useEffect, useState } from "react";

async function getAllGenreAnimes() {
  const { data } = await axiosInstance.get("/genres/anime");
  return data;
}

export function useAnimeGenres() {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [genres, setGenres] = useState<Genres[]>([]);

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      try {
        const genre = await getAllGenreAnimes();
        setGenres(genre.data);
      } catch (error: Error | any) {
        throw new Error(error.message);
      }
      setIsFetching(false);
    })();
  }, [])

  return { genres, isFetching };
}