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

export type AnimesTopSeason = {
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

export type AnimeDetail = {
  aired: {
    from: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day?: number;
        month?: number;
        year?: null;
      }
    };
    string: string;
    to?: any;
  };
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

export type AnimeListRow = {
  aired: {
    from: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day?: number;
        month?: number;
        year?: number;
      };
    };
  };
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
  producers: {
    mal_id: number;
    name: string;
    type: string;
    url: string;
  }[];
  rank: number;
  rating: string;
  score?: number;
  scored_by?: number;
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
  themes: {
    mal_id: number;
    name: string;
    type: string;
    url: string;
  }[];
  title: string;
  title_english?: string;
  title_japanese: string;
  title_synonyms: string[];
  titles: any[];
  trailer: {
    embed_url: string;
    images: {
      image_url: string;
      large_image_url: string;
      maximum_image_url: string;
      medium_image_url: string;
      small_image_url: string;
    };
    url: string;
    youtube_id: string;
  };
  type: string;
  url: string;
  year: number;
}

type AnimeCharacters = {
  character: {
    images: {
      jpg: {
        image_url: string;
      };
      webp: {
        image_url: string;
      }
    };
    mal_id: number;
    name: string;
    url: string;
  };
  favorites: number;
  role: string;
  voice_actors: {
    person: {
      images: {
        jpg: {
          image_url: string;
        }
      };
      mal_id: number;
      url: string;
    };
    language: string;
  }[];
}

type AnimeSearch = {
  pagination: {
    current_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
    last_visible_page: number;
  };
  data: AnimesSchedule[];
}

export type Pagination = {
  current_page: number;
  has_next_page: boolean;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
  last_visible_page: number;
}

export type Genres = {
  count: number;
  mal_id: number;
  name: string;
  url: string;
}