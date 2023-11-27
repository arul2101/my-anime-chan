'use client'

import { AnimeCharacters } from "@/types/types"
import Character from "./Character"
import { motion as m } from 'framer-motion';
import TitleSection from "./TitleSection";
import Link from "next/link";
import { useState } from 'react';

const AnimeCharacters: React.FC<{ characters: AnimeCharacters[] }> = ({ characters }) => {
  const [toggle, setToggle] = useState(false);

  const filterAnimes = characters.filter(character => {
    if (!toggle) return character.role === "Main"
    if (toggle) return character;
  })

  return (
    characters.length !== 0 && (
      <>
        <m.div
          className="lg:w-[70%] w-[100%] mb-4 bg-section text-white py-4 px-6 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <div className="flex justify-between items-center mb-4">
            <TitleSection title="Characters" />
            <p
              className="text-primary cursor-pointer"
              onClick={() => setToggle(prev => !prev)}
            >{toggle ? 'Hidden' : 'View All'}</p>
          </div>

          <div
            className="flex gap-11 flex-wrap transition-transform"
          >
            {filterAnimes?.map(character => <Character character={character} key={character.character.mal_id} />)}
          </div>
        </m.div>
      </>
    )
  )
}

export default AnimeCharacters