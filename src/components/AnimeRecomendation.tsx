import { useAnimeRecomendation } from "@/hooks/useAnimeRecomendation"
import { axiosInstance } from "@/lib/axios"
import LoadingSpinner from "./LoadingSpinner";
import AnimeListCol from "./AnimeListCol";
import { randomAnime } from "@/utils/helper";



const AnimeRecomendation = () => {
  const { animes, isFetching } = useAnimeRecomendation();

  return <AnimeListCol animes={animes} title="Recomendation" isFetching={isFetching} />
}

export default AnimeRecomendation