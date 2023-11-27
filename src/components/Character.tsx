'use client'

import { AnimeCharacters } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Character: React.FC<{ character: AnimeCharacters }> = ({ character }) => {
  const router = useRouter();
  return (
    <div
      key={character.character.mal_id}
      className="flex gap-2 hover:bg-dark hover:cursor-pointer w-[280px]"
      onClick={() => router.push(`/anime/characters/info/${character.character.mal_id}`)}
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
    </div>
  )
}

export default Character