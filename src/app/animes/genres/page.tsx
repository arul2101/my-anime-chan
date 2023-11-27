'use client'

import GenreItem from "@/components/GenreItem"
import LoadingSpinner from "@/components/LoadingSpinner"
import { useAnimeGenres } from "@/hooks/useAnimeGenres"


const Page = () => {
  const { genres, isFetching } = useAnimeGenres();
  return (
    <div
      className="lg:w-[70%] w-[100%] mb-4 bg-section text-white py-4 px-6 rounded-md"
    >
      <div className="flex justify-center gap-4 flex-wrap">
        {!isFetching
          ? genres.map(genre => <GenreItem key={genre.mal_id} genre={genre} />)
          : <LoadingSpinner />
        }
      </div>
    </div>
  )
}

export default Page