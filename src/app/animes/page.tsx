'use client'

import AnimeListRow from "@/components/AnimeListRow"
import AnimeRecomendation from "@/components/AnimeRecomendation"
import { useAnimes } from "@/hooks/useAnimes"
import { useState } from "react"

const Page = () => {
  const [page, setPage] = useState(1);
  const { animes, pagination, isFetching } = useAnimes(page);


  return (
    <div className="flex justify-between lg:flex-row flex-col">
      <AnimeListRow
        animes={animes}
        pagination={pagination}
        isFetching={isFetching}
        page={page}
        setPage={setPage}
        title="All Anime"
      />

      <AnimeRecomendation />
    </div>
  )
}

export default Page