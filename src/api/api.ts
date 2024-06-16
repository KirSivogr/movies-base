import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { Film, QueryState } from '@/types/interfaces';
import { createGenreParams } from '@/utils/createGenreParams';

const API_KEY = process.env.REACT_APP_API_KEY;

export const instance: AxiosInstance = axios.create({
   baseURL: 'https://api.kinopoisk.dev/v1.4/',
   headers: {
      Accept: 'application/json',
      'X-API-KEY': API_KEY,
   },
});

export async function getFilmsList(query: QueryState, page: number) {
   try {
      const { rating, year, genres } = query;
      const genreParams = createGenreParams(genres);

      const response: AxiosResponse = await instance.get(`movie?${genreParams}`, {
         params: {
            page,
            limit: 50,
            'rating.imdb': rating,
            year,
         },
      });

      return [response.data.docs, response.data.pages];
   } catch (error) {
      console.log(error);
      throw error;
   }
}

export async function getFilmById(id: number): Promise<Film[]> {
   try {
      const response: AxiosResponse = await instance.get('movie', {
         params: {
            id,
         },
      });

      return response.data.docs;
   } catch (error) {
      console.log(error);
      throw error;
   }
}
