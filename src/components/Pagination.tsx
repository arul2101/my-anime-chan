import { Pagination as PaginationType } from "@/types/types";
import Button from "./Button"

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pagination: PaginationType;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage, pagination }) => {
  return (
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
  )
}

export default Pagination