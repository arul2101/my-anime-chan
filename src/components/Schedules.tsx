'use client'

import { useAnimeSchedules } from "@/hooks/useAnimeSchedules";
import AnimeCard from "./AnimeCard";
import { useStateContext } from "@/contexts/ContextProvider";
import NavigationSchedules from "./NavigationSchedules";
import TitleSection from "./TitleSection";
import LoadingSpinner from "./LoadingSpinner";
import { motion as m } from 'framer-motion';

const Schedules: React.FC = () => {
  const { selectedDay } = useStateContext();
  const { animesSchedule, isFetching } = useAnimeSchedules(selectedDay);


  return (
    <m.div
      className="lg:w-[70%] w-[100%] mb-4 bg-section text-white py-4 px-6 rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "linear" }}
    >
      <TitleSection title="Schedule" />
      <NavigationSchedules />
      {!isFetching
        ? animesSchedule?.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)
        : <LoadingSpinner />}
    </m.div>
  )
}

export default Schedules