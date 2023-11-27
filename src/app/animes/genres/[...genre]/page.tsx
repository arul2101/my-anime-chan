'use client'

import AnimeListRow from "@/components/AnimeListRow";
import AnimeRecomendation from "@/components/AnimeRecomendation";
import { useAnimeGenre } from "@/hooks/useAnimeGenre";
import { usePathname } from "next/navigation"
import { useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const pathname = usePathname();
  const id = Number(pathname.split("/")[4]);
  const genre = pathname.split("/")[3].replace("%20", " ");

  const { animes, pagination, isFetching } = useAnimeGenre(id, page);

  return (
    <div className="flex justify-between lg:flex-row flex-col">
      <AnimeListRow
        animes={animes}
        title={`All Anime Genre : ${genre}`}
        isFetching={isFetching}
        pagination={pagination}
        page={page}
        setPage={setPage}
      />

      <AnimeRecomendation />
    </div>
  )
}

export default Page