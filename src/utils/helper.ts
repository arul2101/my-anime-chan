import { AnimeListRow } from "@/types/types";

export function randomAnime(data: AnimeListRow[], gap: number) {
  const first = Math.floor(Math.random() * (data.length - gap) + 1);

  const last = first + gap;

  return {
    data: data.slice(first, last)
  }
}