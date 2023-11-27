'use client'

import { AnimeCharacters } from "@/types/types"
import { motion as m } from 'framer-motion'
import TitleSection from "./TitleSection"
import VoiceActor from "./VoiceActor"
import { useState } from "react"

type VoiceActorType = {
  person: {
    mal_id: number;
    url: string;
    name?: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
  };
  language: string;
}

const VoiceActors: React.FC<{ characters: AnimeCharacters[] }> = ({ characters }) => {
  const [toggle, setToggle] = useState(false);

  const filterAnimes = characters?.filter(character => {
    if (!toggle) return character.role === "Main";
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
            <TitleSection title="Voice Actors" />
            <p
              className="text-primary cursor-pointer"
              onClick={() => setToggle(prev => !prev)}
            >{toggle ? 'Hidden' : 'View All'}</p>
          </div>

          <div className="flex w-full gap-4 flex-wrap mt-5">
            {filterAnimes.map(character =>
              character.voice_actors.map((voiceActor: VoiceActorType) =>
                voiceActor.language === "Japanese" && <VoiceActor key={voiceActor.person.mal_id} voiceActors={voiceActor} />
              )
            )}
          </div>
        </m.div>
      </>
    )
  )
}

export default VoiceActors