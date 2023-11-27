import Image from "next/image"
import TitleSection from "./TitleSection"
import { useRouter } from "next/navigation"
import LoadingSpinner from "./LoadingSpinner";
import AnimeCardColumn from "./AnimeCardColumn";
import { AnimeDetail, AnimeListRow, AnimeSearch, AnimesTopSeason } from "@/types/types";

const AnimeListCol: React.FC<{ animes: AnimeListRow[]; isFetching: boolean; title: string; }> = ({ animes, isFetching, title }) => {
  return (
    <div className="lg:w-[28%] w-[100%] bg-section text-white py-4 px-6 rounded-md">
      <TitleSection title={title} />
      <div className='w-full my-4 flex flex-col px-2 py-3 rounded-m gap-4'>
        {!isFetching
          ? animes.map((anime: AnimeListRow, index: number) => <AnimeCardColumn key={index} anime={anime} />)
          : <LoadingSpinner />
        }
      </div>
    </div>
  )
}

export default AnimeListCol