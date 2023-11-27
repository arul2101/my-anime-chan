'use client'

import AlphabetFilter from "@/components/AlphabetFilter"
import AnimeListRow from "@/components/AnimeListRow"
import AnimeRecomendation from "@/components/AnimeRecomendation"
import { useAnimes } from "@/hooks/useAnimes"
import { useState } from "react"

const Page = () => {
  const [alpha, setAlpha] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { animes, pagination, isFetching } = useAnimes(page, alpha);

  console.log(alpha);

  return (
    <div className="flex justify-between lg:flex-row flex-col flex-wrap">
      <AnimeListRow
        animes={animes}
        pagination={pagination}
        isFetching={isFetching}
        page={page}
        setPage={setPage}
        title={`${alpha === "" ? 'All Anime' : `${alpha.toUpperCase()} Anime`}`}
      >
        <AlphabetFilter
          alpha={alpha}
          setAlpha={setAlpha}
        />
      </AnimeListRow>
      <AnimeRecomendation />
    </div>

  )
}

export default Page