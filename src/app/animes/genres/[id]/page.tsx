'use client'

import AnimeListRow from "@/components/AnimeListRow";
import { useAnimeGenre } from "@/hooks/useAnimeGenre";
import { usePathname } from "next/navigation"
import { useState } from "react";

const Page = () => {
  const pathName = usePathname();
  const id = Number(pathName.split("/")[3]);
  const [page, setPage] = useState(1);

  const { animes, pagination, isFetching } = useAnimeGenre(id, page);

  console.log(animes);

  return (
    <AnimeListRow
      animes={animes}
      title={`All Anime Genre : Solved ini (Harusnya nama genre)`}
      isFetching={isFetching}
      pagination={pagination}
      page={page}
      setPage={setPage}
    />
  )
}

export default Page