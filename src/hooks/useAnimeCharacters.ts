import { getAnimeCharactersById } from '@/lib/apiCall';
import { useState, useEffect } from 'react';

export function useAnimeCharacters(id: number) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animeCharacters, setAnimeCharacters] = useState([]);

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      try {
        const anime = await getAnimeCharactersById(id);
        setAnimeCharacters(anime.data);
      } catch (error: Error | any) {
        throw new Error(error.message);
      }
      setIsFetching(false);
    })();
  }, [id])

  return { animeCharacters, isFetching };
}