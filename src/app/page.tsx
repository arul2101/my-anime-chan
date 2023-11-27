'use client'

import AnimeListCol from "@/components/AnimeListCol";
import LoadingSpinner from "@/components/LoadingSpinner";
import Schedules from "@/components/Schedules";
import { useAnimeTopFavorite } from "@/hooks/useAnimeTopFavorite";
import { useState } from "react";

export default function Home() {
  const { animesTopSeason, isFetching } = useAnimeTopFavorite();
  const [waiting, setWaiting] = useState(true);

  setTimeout(() => {
    setWaiting(false)
  }, 2500);

  return (
    <div className="flex justify-between lg:flex-row flex-col">
      {!waiting
        ? <Schedules />
        : <LoadingSpinner />
      }
      <AnimeListCol animes={animesTopSeason} isFetching={isFetching} title="Top Season" />
    </div>
  )
}