'use client'

import AnimeCharacters from "@/components/AnimeCharacters";
import AnimeDetail from "@/components/AnimeDetail";
import LoadingSpinner from "@/components/LoadingSpinner";
import TopAnime from "@/components/TopAnime";
import VoiceActors from "@/components/VoiceActors";
import { useAnimeCharacters } from "@/hooks/useAnimeCharacters";
import { useAnimeDetail } from "@/hooks/useAnimeDetail";
import { useAnimeFullCharacters } from "@/hooks/useAnimeFullCharacters";
import { usePathname } from "next/navigation"

export default function Page() {
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
            <VoiceActors characters={animeCharacters} />
          </>
        )
        : <LoadingSpinner />
      }
    </>
  )
}