'use client'

import { Genres } from "@/types/types";
import { useRouter } from "next/navigation"

const GenreItem: React.FC<{ genre: Genres }> = ({ genre }) => {
  const router = useRouter();

  return (
    <button
      className="py-4 w-[150px] bg-dark rounded-md hover:bg-gray-400 transition-all"
      onClick={() => router.push(`/animes/genres/${genre.name}/${genre.mal_id}`)}
    >
      {genre.name}
    </button>
  )
}

export default GenreItem