import { axiosInstance } from "./axios"

async function getAnimesSchedules(query: string) {
  const { data } = await axiosInstance.get(`/schedules?${query}`);
  return data;
}

export {
  getAnimesSchedules
}

