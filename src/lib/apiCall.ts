import { axiosInstance } from "./axios"

async function getAnimesSchedules(query: string) {
  const { data } = await axiosInstance.get(`/schedules?${query}`);
  return data;
}

async function getTopSeasonAnimes() {
  const { data } = await axiosInstance.get("/seasons/now?filter=tv");
  return data
}

async function getAnimeById(id: number) {
  const { data } = await axiosInstance.get(`/anime/${id}`);
  return data
}

async function getAnimeCharactersById(id: number) {
  const { data } = await axiosInstance.get(`/anime/${id}/characters`);
  return data
}

export {
  getAnimesSchedules,
  getTopSeasonAnimes,
  getAnimeById,
  getAnimeCharactersById
}

