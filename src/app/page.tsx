'use client'

import AnimeListCol from "@/components/AnimeListCol";
import LoadingSpinner from "@/components/LoadingSpinner";
import Schedules from "@/components/Schedules";
import TopAnime from "@/components/TopAnime";
import { useStateContext } from "@/contexts/ContextProvider";
import { useAnimeSchedules } from "@/hooks/useAnimeSchedules";
import { useAnimeTopFavorite } from "@/hooks/useAnimeTopFavorite";
import { getTopSeasonAnimes } from "@/lib/apiCall";
import { motion as m } from 'framer-motion';
import { useState } from "react";

export default function Home() {
  const { animesTopSeason, isFetching } = useAnimeTopFavorite();
  const [waiting, setWaiting] = useState(true);

  setTimeout(() => {
    setWaiting(false)
  }, 2500);
  return (
    <div
      className="flex justify-between lg:flex-row flex-col"
    >
      {!waiting
        ? <Schedules />
        : <LoadingSpinner />
      }

      <AnimeListCol animes={animesTopSeason} isFetching={isFetching} title="Top Season" />
    </div>
  )
}