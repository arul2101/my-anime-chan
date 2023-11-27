'use client'

import LoadingSpinner from "@/components/LoadingSpinner";
import { useAnimeSearch } from "@/hooks/useAnimeSearch";
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";
import { useState } from "react";
import AnimeListRow from "@/components/AnimeListRow";

export default function Page() {
  const searchParams = useSearchParams();
  const queryParams = searchParams.get("title");
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { animesSearch, pagination, isFetching } = useAnimeSearch(queryParams, page);

  if (queryParams === null) {
    router.push("/");
  }

  return (
    <>
      {!isFetching && queryParams !== null
        ? <AnimeListRow
          animes={animesSearch}
          pagination={pagination}
          isFetching={isFetching}
          page={page}
          setPage={setPage}
          title={`Search Result for ${queryParams}`}
        />
        : <LoadingSpinner />
      }
    </>
  )
}