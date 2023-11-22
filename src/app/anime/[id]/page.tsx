'use client'

import AnimeCharacters from "@/components/AnimeCharacters";
import AnimeDetail from "@/components/AnimeDetail";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useAnimeCharacters } from "@/hooks/useAnimeCharacters";
import { useAnimeDetail } from "@/hooks/useAnimeDetail";
import { usePathname } from "next/navigation"

const Page = () => {
  const pathName = usePathname();
  const id = Number(pathName.split("/")[2]);

  const { animeDetail, isFetching } = useAnimeDetail(id);
  const { animeCharacters, isFetching: isFetchingCharacters } = useAnimeCharacters(id);

  return (
    <>
      {!isFetching && !isFetchingCharacters
        ? (
          <>
            <AnimeDetail anime={animeDetail} />
            <AnimeCharacters characters={animeCharacters} />
          </>
        )
        : <LoadingSpinner />
      }
    </>
  )
}

export default Page