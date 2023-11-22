import { getAnimesSchedules } from "@/lib/apiCall";
import { useEffect, useState } from "react";
import type { AnimesSchedule } from "@/types/types";

export function useAnimeSchedules(selectedDay: string) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [animesSchedule, setAnimesSchedule] = useState<AnimesSchedule[]>([]);

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      try {
        const animes = await getAnimesSchedules(`filter=${selectedDay}`);
        setAnimesSchedule(animes.data);
      } catch (error: Error | any) {
        throw new Error(error.message);
      }
      setIsFetching(false);
    })();
  }, [selectedDay])

  return { animesSchedule, isFetching };
}