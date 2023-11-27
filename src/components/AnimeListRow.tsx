'use client'

import Image from "next/image"
import LoadingSpinner from "./LoadingSpinner"
import TitleSection from "./TitleSection"
import { AnimeListRow, Pagination } from "@/types/types"
import { useRouter } from "next/navigation"
import Button from "./Button"
import AnimeCardRow from "./AnimeCardRow"

type AnimeListRowProps = {
  animes: AnimeListRow[];
  isFetching: boolean;
  title: string;
  pagination: Pagination;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  children?: React.ReactNode;
}


const AnimeListRow: React.FC<AnimeListRowProps> = ({ animes, isFetching, title, pagination, page, setPage, children }) => {
  return (
    <div
      className="lg:w-[70%] w-[100%] mb-4 bg-section text-white py-4 px-4 rounded-md h-[100%] text-center"
    >
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

      {!isFetching && (
        <div className="flex justify-center items-center gap-5 md:text-[1rem] text-[.6rem]">
          <Button
            className={`${page === 1 ? 'cursor-not-allowed bg-dark' : 'bg-primary'}`}
            onClick={() => setPage(1)}
            disabled={page === 1}
          >
            Start Page
          </Button>
          <Button
            className={`${page === 1 ? 'cursor-not-allowed bg-dark' : 'bg-primary'}`}
            onClick={() => setPage(page => page - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>
          <p className="text-white">Page {page} of {pagination?.last_visible_page}</p>
          <Button
            className={`${page === pagination?.last_visible_page ? 'cursor-not-allowed bg-section' : 'bg-primary'}`}
            onClick={() => setPage(page => page + 1)}
            disabled={page === pagination?.last_visible_page}
          >
            Next
          </Button>
          <Button
            className={`${page === pagination?.last_visible_page ? 'cursor-not-allowed bg-section' : 'bg-primary'}`}
            onClick={() => setPage(pagination?.last_visible_page)}
            disabled={page === pagination?.last_visible_page}
          >
            Last Page
          </Button>
        </div>
      )}
    </div>
  )
}

export default AnimeListRow