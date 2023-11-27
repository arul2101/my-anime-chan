'use client'

import LoadingSpinner from "./LoadingSpinner"
import TitleSection from "./TitleSection"
import { AnimeListRow, Pagination as PaginationType } from "@/types/types"
import Button from "./Button"
import AnimeCardRow from "./AnimeCardRow"
import Pagination from "./Pagination"

type AnimeListRowProps = {
  animes: AnimeListRow[];
  isFetching: boolean;
  title: string;
  pagination: PaginationType;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  children?: React.ReactNode;
}


const AnimeListRow: React.FC<AnimeListRowProps> = ({ animes, isFetching, title, pagination, page, setPage, children }) => {
  return (
    <div className="lg:w-[70%] w-[100%] mb-4 bg-section text-white py-4 px-4 rounded-md h-[100%] text-center">
      {children}

      <div className="">
        <TitleSection title={title} />
        {isFetching
          ? <LoadingSpinner />
          : <div className="w-full flex flex-wrap justify-center gap-4 text-center mt-5">
            {animes?.map((anime, index) => <AnimeCardRow key={index} anime={anime} />)}
          </div>
        }
      </div>

      {!isFetching && <Pagination page={page} setPage={setPage} pagination={pagination} />}
    </div>
  )
}

export default AnimeListRow