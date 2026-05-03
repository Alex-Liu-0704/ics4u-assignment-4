export type MoviesResponse = {
  results: Array<{
    id: number;
    original_title: string;
    poster_path: string;
  }>;
  total_pages: number;
};

export type TvResponse = {
  results: Array<{
    id: number;
    name: string;
    poster_path: string;
  }>;
  total_pages: number;
};

export type GenreResponse = {
  results: Array<{
    id: number;
    original_title?: string;
    name?: string;
    poster_path: string;
  }>;
  total_pages: number;
};

export type DetailsResponse = {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  number_of_seasons?: number;
  number_of_episodes?: number;
  videos?: {
    results: Array<{
      key: string;
      name: string;
      site: string;
      type: string;
    }>;
  };
};

// export type MovieRepsonse = {
//   id: number;
//   title: string;
//   overview: string;
//   poster_path: string;
//   backdrop_path: string;
//   release_date: string;
//   vote_average: string;
//   videos?: {
//     results: Array<{
//       key: string;
//       name: string;
//       site: string;
//       type: string;
//     }>;
//   };
// };

export type CreditsResponse = {
  cast: Array<{
    id: number;
    name: string;
    profile_path: string | null;
    character: string;
  }>;
};

export type ReviewsResponse = {
  results: Array<{
    id: string;
    author: string;
    content: string;
  }>;
};

export type SearchResponse = {
  results: Array<{
    id: number;
    name: string;
    profile_path: string | null;
  }>;
  total_pages: number;
  total_results: number;
};
