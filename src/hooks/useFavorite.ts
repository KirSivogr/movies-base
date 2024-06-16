import { useEffect, useState } from 'react';

import { FilterFilm } from '@/types/interfaces';

export const useFavorite = (id: number | undefined) => {
   const [favoritesItems, setFavoritesItems] = useState<FilterFilm[]>([]);
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify([]));
   }, [])

   useEffect(() => {
      const dataFromLocalStorage = localStorage.getItem('favorites');

      if (dataFromLocalStorage) {
         const favorites = JSON.parse(dataFromLocalStorage);
         const isFavInFavorites = favorites.some(
            (favorite: FilterFilm) => favorite.id === id,
         );

         setFavoritesItems(favorites);
         setIsFav(isFavInFavorites);
      }
   }, [id]);

   const handleClickFavorite = (
      id: number | undefined,
      title: string | undefined,
      imageUrl: string | undefined,
      rating: string | undefined,
      year: string | undefined,
   ) => {
      const dataFromLocalStorage = localStorage.getItem('favorites');

      if (dataFromLocalStorage) {
         const favorites = JSON.parse(dataFromLocalStorage);
         const indexOfFav = favorites.findIndex(
            (favorite: FilterFilm) => favorite.id === id,
         );

         if (indexOfFav === -1) {
            const newFavorite = {
               id,
               title,
               rating,
               imageUrl,
               year,
            } as FilterFilm;

            favorites.push(newFavorite);
            setIsFav(true);
         } else {
            favorites.splice(indexOfFav, 1);
            setIsFav(false);
         }

         localStorage.setItem('favorites', JSON.stringify(favorites));
         setFavoritesItems(favorites);
      }
   };

   return { handleClickFavorite, isFav, favoritesItems };
};
