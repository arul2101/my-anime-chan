import { getAnimesSchedules } from "@/lib/apiCall";
import { useEffect, useState } from "react";
import type { AnimesSchedule } from "@/types/types";

export function useAnimeSchedules(selectedDay: string) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animesSchedule, setAnimeSchedule] = useState<AnimesSchedule[]>([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      setIsFetching(true);
      try {
        const animes = await getAnimesSchedules(`filter=${selectedDay}`);
        setAnimeSchedule(animes.data);
      } catch (error: Error | any) {
        throw new Error(error.message);
      }
      setIsFetching(false);
    }

    fetchAnimes();
  }, [selectedDay])

  return { animesSchedule, isFetching };
}