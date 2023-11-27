export function randomAnime(data, gap) {
  const first = Math.floor(Math.random() * (data.length - gap) + 1);

  const last = first + gap;

  return {
    data: data.slice(first, last)
  }
}