import { getCharacterDetail } from '@/lib/apiCall';
import { useEffect, useState } from 'react';

export function useAnimeCharacter(id: number) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animeCharacter, setAnimeCharacter] = useState([]);

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      try {
        const anime = await getCharacterDetail(id);
        setAnimeCharacter(anime.data);
      } catch (error: Error | any) {
        throw new Error(error.message);
      }
      setIsFetching(false);
    })();
  }, [id])

  return { animeCharacter, isFetching };
}