import { AnimeDetail } from "@/types/types"
import Image from "next/image"
import Link from "next/link"

const AnimeCardColumn: React.FC<{ anime: AnimeDetail }> = ({ anime }) => {
  return (
    <Link
      href={`/anime/${anime.mal_id}`}
      className="hover:cursor-pointer hover:bg-dark flex gap-2 mb-3 px-2 py-2 rounded-md w-full"
    >
      <div className='w-[28%]'>
        <Image
          src={anime.images.webp.image_url}
          alt='test-image'
          className='w-[100%] h-[100px] object-cover'
          width={1920}
          height={1080}
        />
      </div>

      <div className='w-[70%] flex flex-wrap'>
        <h2 className='font-light md:text-[1rem]'>{anime.title}</h2>
      </div>
    </Link>
  )
}

export default AnimeCardColumn