import { useEffect, useState } from 'react';

import { getFilmsList } from '@/api/api';
import { Film, FilterFilm } from '@/types/interfaces';

interface QueryState {
   rating: string | null;
   genres: string[] | null;
   year: string | null;
}

export function useGetFilmsList(query: QueryState, pageNumber: number) {
   const [filmsList, setFilmsList] = useState<FilterFilm[]>([]);
   const [isFilmsListLoading, setIsFilmsListLoading] = useState(false);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const fetchArtList = async () => {
         setIsFilmsListLoading(true);
         try {
            const [response, totalPages] = await getFilmsList(query, pageNumber);

            const filmsWithImages = response.map(
               (data: Film) =>
                  ({
                     id: data.id,
                     title: data.name ?? data.alternativeName,
                     rating: data.rating.imdb,
                     year: data.year,
                     imageUrl: data.poster?.url,
                  } as FilterFilm),
            );

            setTotalPages(totalPages);
            setFilmsList(filmsWithImages);
         } catch (error) {
            console.log(error);
            throw error;
         } finally {
            setIsFilmsListLoading(false);
         }
      };

      fetchArtList();
   }, [pageNumber, query]);

   return { filmsList, totalPages, isFilmsListLoading };
}
