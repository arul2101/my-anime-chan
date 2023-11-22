'use client'

import TitleSection from './TitleSection'
import { useAnimeTopFavorite } from '@/hooks/useAnimeTopFavorite'
import TopAnimeCard from './TopAnimeCard'
import LoadingSpinner from './LoadingSpinner'
import { motion as m } from 'framer-motion';

const TopAnime: React.FC = () => {
  const { animesTopSeason, isFetching } = useAnimeTopFavorite();


  return (
    <m.div
      className="lg:w-[28%] w-[100%] bg-section text-white py-4 px-6 rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "linear" }}
    >
      <TitleSection title='Top Season' />
      <div className='w-full my-4 flex flex-col px-2 py-3 rounded-m gap-4'>
        {!isFetching
          ? animesTopSeason.map(anime => <TopAnimeCard key={anime.mal_id} anime={anime} />)
          : <LoadingSpinner />
        }
      </div>
    </m.div>
  )
}

export default TopAnime