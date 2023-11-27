import { useAnimeRecomendation } from "@/hooks/useAnimeRecomendation"
import AnimeListCol from "./AnimeListCol";



const AnimeRecomendation = () => {
  const { animes, isFetching } = useAnimeRecomendation();

  return <AnimeListCol animes={animes} title="Recomendation" isFetching={isFetching} />
}

export default AnimeRecomendation