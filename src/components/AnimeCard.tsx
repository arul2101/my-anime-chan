import type { AnimesSchedule } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import ImageTest from '@/img/test.png';

const AnimeCard: React.FC<{ anime: AnimesSchedule }> = ({ anime }) => {
  return (
    <Link href={`/anime/${anime.mal_id}`} className="w-full flex gap-4 mb-5 py-2 px-4 rounded-md hover:bg-dark hover:cursor-pointer">
      <Image
        src={anime.images.webp.image_url}
        alt="image-test"
        width={1920}
        height={1080}
        className="w-[200px] h-[300px] object-cover rounded-sm"
      />

      <div>
        <h2 className="">{anime.title}</h2>
        {anime.genres.map(genre => <span key={genre.mal_id} className="mr-2 font-bold">{genre.name}</span>)}
        <p className="font-extralight">Studio: {anime.studios.map(studio => <span key={studio.mal_id}>{studio.name}, </span>)}</p>
        <p className="font-extralight">Score: {anime.score !== null ? anime.score : "not available"}</p>
        <p className="mt-5 font-extralight">{anime.synopsis?.split(" ").slice(0, 30).join(" ")}</p>
      </div>
    </Link>
  )
}

export default AnimeCard;