import { useEffect, useState } from 'react';

import { getFilmById } from '@/api/api';
import { FilmWithOverview } from '@/types/interfaces';

export const useGetFilmById = (id: string | undefined) => {
   const [filmData, setFilmData] = useState<FilmWithOverview | null>(null);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      const fetchArtData = async (id: number) => {
         setIsLoading(true);
         try {
            const [data] = await getFilmById(id);

            const artWithImage: FilmWithOverview = {
               id: data.id,
               imageUrl: data.poster?.url,
               rating: data.rating.imdb,
               title: data.name ?? data.alternativeName,
               description: data.description,
               genres: data.genres,
               year: data.year,
            };

            setFilmData(artWithImage);
         } catch (err) {
            console.log(err);
            throw err;
         } finally {
            setIsLoading(false);
         }
      };

      // eslint-disable-next-line no-unused-expressions
      id && fetchArtData(+id);
   }, [id]);

   return { filmData, isLoading };
};
