import { axiosInstance } from "./axios"

async function getAnimesSchedules(query: string) {
  const { data } = await axiosInstance.get(`/schedules?${query}`);
  return data;
}

async function getTopSeasonAnimes() {
  // let animes;
  // try {
  const { data } = await axiosInstance.get("/seasons/now?filter=tv");
  // } catch (error: Error | any) {
  //   throw new Error(error.message);
  // }

  return data;
}

async function getAnimeById(id: number) {
  const { data } = await axiosInstance.get(`/anime/${id}`);
  return data
}

async function getAnimeCharactersById(id: number) {
  const { data } = await axiosInstance.get(`/anime/${id}/characters`);
  return data
}

async function getAnimeBySearchParams(params: string | null, page: number) {
  const { data } = await axiosInstance.get(`/anime?q=${params}&page=${page}`)
  return data;
}

// async function getAnimeVoiceActors(id: number) {
//   const { data } = await axiosInstance.get(`/characters/${id}/voices`)
// }

async function getFullAnimeCharacters(id: number) {
  const { data } = await axiosInstance.get(`/anime/${id}/characters/full`);
  return data
}

async function getCharacterDetail(id: number) {
  const { data } = await axiosInstance.get(`/characters/${id}`);
  return data;
}

async function getAllAnime(page: number) {
  const { data } = await axiosInstance.get(`/anime?letter=z&page=${page}`)
  return data;
}

async function getAnimeByGenre(id: number, page: number) {
  const { data } = await axiosInstance.get(`/anime?genres=${id}&page=${page}`)
  return data;
}

export {
  getAnimesSchedules,
  getTopSeasonAnimes,
  getAnimeById,
  getAnimeCharactersById,
  getAnimeBySearchParams,
  getFullAnimeCharacters,
  getCharacterDetail,
  getAllAnime,
  getAnimeByGenre,
}

