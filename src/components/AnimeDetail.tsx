import Image from "next/image"
import LoadingSpinner from "./LoadingSpinner"
import { AnimeDetail } from "@/types/types"
import { motion as m } from 'framer-motion';

const AnimeDetail: React.FC<{ anime: AnimeDetail }> = ({ anime }) => {
  return (
    <m.div
      className="lg:w-[80%] w-[100%] mb-4 bg-section text-white py-4 px-6 rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "linear" }}
    >
      <div className="flex gap-2 md:justify-between md:flex-row flex-col font-extralight">
        <div className="md:w-[30%]">
          <Image
            src={anime.images?.webp.image_url}
            alt="image-anime-detail"
            width={1920}
            height={1080}
            className="md:w-[100%] md:h-[70%] w-[100%] h-[400px] rounded-md object-cover"
          />

        </div>

        <div className="md:w-[67%]">
          <div className="flex justify-between gap-5 items-start mb-7">
            <h1 className="font-bold text-primary text-[1.5rem]">{anime.title}</h1>

            <div className="md:text-[1rem] text-[.9rem]">
              <p>Rank: {anime.rank}</p>
              <p>Popularity: {anime.popularity}</p>
            </div>
          </div>

          <div className="mb-5">
            <p className="md:text-[1rem] text-[.9rem]">{anime.synopsis}</p>
          </div>

          <div className="flex justify-between items-start md:text-[1rem] text-[.9rem]">
            <div>
              <p>Types: {anime.type}</p>
              <p>Studios:
                {anime.studios?.map(studio => <span key={studio.mal_id}>{studio.name},{" "}</span>)}
              </p>
              <p>Date aired: {anime.aired?.string}</p>
              <p>Status: {anime.status}</p>
            </div>

            <div>
              <p>Scores: {anime.score}/{anime.scored_by}</p>
              <p>Premiered: {anime.year}</p>
              <p>Duration: {anime.duration}</p>
              <p>Source: {anime.source}</p>
              <p>Episodes: {anime.episodes}</p>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default AnimeDetail