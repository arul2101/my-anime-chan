export type AnimesSchedule = {
  aired: object;
  airing: boolean;
  approved: boolean;
  background?: any;
  broadcast: object;
  demographics: any[];
  duration: string;
  episodes?: any;
  explicit_genres: any[];
  favorites: number;
  genres: {
    mal_id: number;
    name: string;
    type: string;
    url: string;
  }[];
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    },
    webp: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    }
  };
  licensors: any[];
  mal_id: number;
  members: number;
  popularity: number;
  producers: any[];
  rank: number;
  rating: string;
  score?: any;
  scored_by?: any;
  season: string;
  source: string;
  status: string;
  studios: {
    mal_id: number;
    name: string;
    type: string;
    url: string;
  }[];
  synopsis?: string;
  themes: any[];
  title: string;
  title_english?: any;
  title_japanese: string;
  title_synonyms: any[];
  titles: any[];
  trailer: object;
  type: string;
  url: string;
  year: number;
}