import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilmCard } from '@components/CardsComponents/FilmCard';
import { MultiSelect } from '@components/Multiselect';
import { Pagination } from '@components/Pagination';
import { Select } from '@components/Select';
import _ from 'lodash';

import { genres, rating, years } from '@/constants/filterParams';
import { useGetFilmsList } from '@/hooks/useGetFilmsList';
import { QueryState } from '@/types/interfaces';

import {
   AdviceText,
   Container,
   Gallery,
   NothingFoundBlock,
   NothingFoundTitle,
   SelectContainer,
   Title,
   Wrapper,
} from './styled';

export const HomePageContent = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [query, setQuery] = useState<QueryState>({
      rating: null,
      genres: null,
      year: null,
   });
   const { filmsList, totalPages, isFilmsListLoading } = useGetFilmsList(
      query,
      currentPage,
   );
   const navigate = useNavigate();

   const updateRating = _.debounce((selectedRating: string) => {
      const newRating = selectedRating === 'Не выбрано' ? null : selectedRating;

      setQuery(prevQuery => ({
         ...prevQuery,
         rating: newRating,
      }));
      setCurrentPage(1);
   }, 600);

   const updateGenres = _.debounce((selectedGenres: string[]) => {
      const newGenres = selectedGenres.length ? selectedGenres : null;

      setQuery(prevQuery => ({
         ...prevQuery,
         genres: newGenres,
      }));
      setCurrentPage(1);
   }, 600);

   const updateYear = _.debounce((selectedYear: string) => {
      const newYear = selectedYear === 'Все годы' ? null : selectedYear;

      setQuery(prevQuery => ({
         ...prevQuery,
         year: newYear,
      }));
      setCurrentPage(1);
   }, 600);

   const handleChangePage = (pageNumber: number) => setCurrentPage(pageNumber);

   return (
      <Wrapper>
         <Container>
            <Title>Фильмы</Title>
            <SelectContainer>
               <MultiSelect options={genres} onChange={updateGenres} />
               <Select options={years} label='Годы' onChange={updateYear} />
               <Select options={rating} label='Рейтинг' onChange={updateRating} />
            </SelectContainer>
            {filmsList.length ? (
               <Gallery>
                  {filmsList.map(art => (
                     <FilmCard
                        key={art.id}
                        id={art.id}
                        title={art.title}
                        imageUrl={art.imageUrl}
                        year={art.year}
                        rating={art.rating}
                        onClick={() => navigate(`filminfo/${art.id}`, { replace: false })}
                        isLoading={isFilmsListLoading}
                     />
                  ))}
               </Gallery>
            ) : (
               <NothingFoundBlock>
                  <NothingFoundTitle>Ничего не найдено</NothingFoundTitle>
                  <AdviceText>Попробуйте изменить параметры фильтра</AdviceText>
               </NothingFoundBlock>
            )}
            <Pagination
               currentPage={currentPage}
               totalPages={totalPages}
               handleChangePage={handleChangePage}
            />
         </Container>
      </Wrapper>
   );
};
