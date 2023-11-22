import { AnimeCharacters } from "@/types/types"
import Character from "./Character"
import { motion as m } from 'framer-motion';

const AnimeCharacters: React.FC<{ characters: AnimeCharacters[] }> = ({ characters }) => {
  return (
    characters.length !== 0 && (
      <m.div
        className="lg:w-[80%] w-[100%] mb-4 bg-section text-white py-4 px-6 rounded-md flex gap-8 md:flex-nowrap flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        {characters?.map(character =>
          character.role === "Main" && <Character character={character} key={character.character.mal_id} />
        )}
      </m.div>
    )
  )
}

export default AnimeCharacters