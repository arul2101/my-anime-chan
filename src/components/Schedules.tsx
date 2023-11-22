'use client'

import { useAnimeSchedules } from "@/hooks/useAnimeSchedules";
import AnimeCard from "./AnimeCard";
import { useStateContext } from "@/contexts/ContextProvider";
import NavigationSchedules from "./NavigationSchedules";
import TitleSection from "./TitleSection";

const Schedules: React.FC = () => {
  const { selectedDay } = useStateContext();
  const { animesSchedule, isFetching } = useAnimeSchedules(selectedDay);

  return (
    <div className="lg:w-[73%] w-[100%] mb-4 bg-section text-white py-4 px-6 rounded-md">
      <TitleSection title="Schedule" />
      <NavigationSchedules />
      {!isFetching
        ? animesSchedule.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)
        : <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin mx-auto border-primary mt-10"></div>}
    </div>
  )
}

export default Schedules