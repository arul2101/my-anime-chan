import { AnimeCharacters } from "@/types/types"
import Image from "next/image"
import Link from "next/link"

const Character: React.FC<{ character: AnimeCharacters }> = ({ character }) => {
  return (
    <Link
      key={character.character.mal_id} href={`/anime/characters/idcuy`}
      className="flex gap-2"
    >
      <Image
        src={character.character.images.webp.image_url}
        alt="image-character"
        width={1920}
        height={1080}
        className="w-[80px] h-[100px]"
      />
      <div className="flex flex-col justify-between">
        <p>{character.character.name}</p>
        <p>{character.role}</p>
      </div>
    </Link>
  )
}

export default Character