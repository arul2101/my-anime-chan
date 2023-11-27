'use client'

import TitleSection from "./TitleSection";

const data = ['ALL', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const AlphabetFilter: React.FC<{ alpha: string; setAlpha: React.Dispatch<React.SetStateAction<string>> }> = ({ alpha, setAlpha }) => {
  return (
    <div className="w-[100%] p-4 bg-dark mb-4 rounded-md">
      {data.map(abjad => {
        if (abjad === "ALL") {
          return (
            <button
              key={abjad}
              className={`w-[40px] h-[35px] text-white mr-2 mt-2 rounded-md ${alpha === "" ? 'bg-primary' : 'bg-section'}`}
              onClick={() => setAlpha("")}
            >{abjad}</button>
          )
        } else {
          return (
            <button
              key={abjad}
              className={`w-[40px] h-[35px] text-white mr-2 mt-2 rounded-md ${alpha === abjad.toLowerCase() ? 'bg-primary' : 'bg-section'}`}
              onClick={() => setAlpha(abjad.toLowerCase())}
            >{abjad}</button>
          )
        }

      })}
    </div>
  )
}

export default AlphabetFilter