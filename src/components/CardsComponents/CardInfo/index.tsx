import favIcon from '@/assets/icon.svg';
import { useFavorite } from '@/hooks/useFavorite';
import { truncateTitle } from '@/utils/truncateTitle';

import {
   CardInformation,
   Description,
   FavoriteIcon,
   Icon,
   ReleaseYear,
   Title,
} from './styled';

export interface CardInfoProps {
   title: string;
   rating: string;
   id: number;
   year: string;
   imageUrl: string | undefined;
}

export const CardInfo = ({ id, title, rating, year, imageUrl }: CardInfoProps) => {
   const { handleClickFavorite, isFav } = useFavorite(id);

   return (
      <CardInformation>
         <Description>
            <Title>{truncateTitle(title)}</Title>
            <ReleaseYear>{year}</ReleaseYear>
         </Description>
         <Icon
            onClick={() => handleClickFavorite(id, title, imageUrl, rating, year)}
            isFav={isFav}
         >
            <FavoriteIcon src={favIcon} />
         </Icon>
      </CardInformation>
   );
};
