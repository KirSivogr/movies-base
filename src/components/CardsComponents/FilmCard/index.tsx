import React from 'react';
import { CardInfo } from '@components/CardsComponents/CardInfo';
import { Loader } from '@components/Loader';
import temporaryImage from 'src/assets/zagluwka.svg';

import { calculateColorRating } from '@/utils/calculateColorRating';

import { Card, CardImage, Rating } from './styled';

export interface FilmCardProps {
   title: string;
   imageUrl: string | undefined;
   rating: string;
   id: number;
   year: string;
   onClick: () => void;
   isLoading: boolean;
}

export const FilmCard = ({
   title,
   imageUrl,
   rating,
   year,
   id,
   onClick,
   isLoading,
}: FilmCardProps) => {
   return (
      <Card>
         {isLoading ? (
            <Loader />
         ) : (
            <>
               <CardImage onClick={onClick} background_url={imageUrl ?? temporaryImage} />
               <Rating color={calculateColorRating(rating)}>
                  {Number(rating) === 0 ? '' : rating}
               </Rating>
               <CardInfo
                  id={id}
                  title={title}
                  rating={rating}
                  imageUrl={imageUrl}
                  year={year}
               />
            </>
         )}
      </Card>
   );
};
