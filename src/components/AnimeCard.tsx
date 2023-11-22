import type { AnimesSchedule } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const AnimeCard: React.FC<{ anime: AnimesSchedule }> = ({ anime }) => {
  return (
    <Link href={`/anime/${anime.mal_id}`} className="w-full flex gap-4 mb-5 py-2 px-4 rounded-md hover:bg-dark hover:cursor-pointer">
      <div className="md:w-[35%] w-[50%]">
        <Image
          src={anime.images.webp.image_url}
          alt="image-test"
          width={1920}
          height={1080}
          className="md:w-[80%] md:h-[300px] w-[100%] h-[250px] rounded-sm object-cover"
        />
      </div>

      <div className="md:w-[65%] max-w-[50%]">
        <h2 className="md:text-lg text-base mb-3 font-bold">{anime.title}</h2>
        <div className="flex flex-wrap mb-2 gap-2 md:text-[1rem] text-[.9rem]">
          <p className="">Genre :</p>
          {anime.genres.length === 0
            ? <span className="font-light">Not Available</span>
            : anime.genres.map(genre => <span key={genre.mal_id} className="font-light">{genre.name}</span>)
          }
        </div>

        <div className="flex flex-wrap mb-2 gap-2 md:text-[1rem] text-[.9rem]">
          <p className="">Studios :</p>
          {anime.studios.length === 0
            ? <span className="font-light">Not Available</span>
            : anime.studios.map(studio => <span key={studio.mal_id} className="font-light">{studio.name}</span>)
          }
        </div>
        <p className="font-light md:text-[1rem] text-[.9rem]">Score : {anime.score !== null ? anime.score : "Not Available"}</p>
        <p className="mt-5 font-extralight md:text-[1rem] text-[.9rem]">{anime.synopsis?.split(" ").slice(0, 30).join(" ")}</p>
      </div>
    </Link>
  )
}

export default AnimeCard;