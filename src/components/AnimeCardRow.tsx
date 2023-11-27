import { AnimeDetail, AnimeListRow } from "@/types/types"
import Image from "next/image"
import Link from "next/link"

const AnimeCardRow: React.FC<{ anime: AnimeListRow }> = ({ anime }) => {
  return (
    <Link
      href={`/anime/${anime.mal_id}`}
      className="md:w-[170px] w-[150px] mb-5 rounded-md hover:bg-dark hover:cursor-pointer"
    >
      <Image
        src={anime.images.webp.image_url}
        alt="image-anime"
        width={1920}
        height={1080}
        className="w-[100%] h-[250px] rounded-sm object-cover"
      />
      <h2>{anime.title}</h2>
    </Link>
  )
}

export default AnimeCardRow