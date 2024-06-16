export const createGenreParams = (genres: string[] | null): string | undefined => {
   return genres?.map(genre => `genres.name=${encodeURIComponent(genre)}`).join('&');
};
