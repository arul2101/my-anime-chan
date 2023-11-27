import { axiosInstance } from "@/lib/axios";
import { randomAnime } from "@/utils/helper";
import { useEffect, useState } from "react";

async function getAnimeRecomendation() {
  const { data } = await axiosInstance.get('/recommendations/anime');
  return data;
}

export function useAnimeRecomendation() {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      try {
        let anime = await getAnimeRecomendation();
        anime = anime.data.flatMap((anime: any) => anime.entry); // ambil data nested
        anime = randomAnime(anime, 12); // random anime
        setAnimes(anime.data);
      } catch (error: Error | any) {
        throw new Error(error.message);
      }
      setIsFetching(false);
    })();
  }, [])

  return { animes, isFetching };
}