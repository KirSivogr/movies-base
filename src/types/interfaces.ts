export interface IGenres {
   name: string;
}

export interface Film {
   id: number;
   name: string;
   alternativeName: string;
   year: string;
   poster: {
      url: string;
      previewUrl: string;
   };
   rating: {
      imdb: string;
   };
   description: string;
   genres: IGenres[];
}

export interface FilterFilm {
   id: number;
   title: string;
   imageUrl: string | undefined;
   rating: string;
   year: string;
}

export interface FilmWithOverview extends FilterFilm {
   description: string;
   genres: IGenres[];
}

export interface QueryState {
   rating: string | null;
   genres: string[] | null;
   year: string | null;
}
