import { useNavigate } from 'react-router-dom';

import favIcon from '@/assets/icon.svg';
import temporaryImage from '@/assets/zagluwka.svg';
import { useFavorite } from '@/hooks/useFavorite';
import { calculateColorRating } from '@/utils/calculateColorRating';
import { truncateTitle } from '@/utils/truncateTitle';

import {
   CardInformation,
   Description,
   FavoriteIcon,
   Icon,
   Image,
   Info,
   NothingFoundBlock,
   NothingFoundTitle,
   Rating,
   ReleaseYears,
   Title,
} from './styled';

export const CardInfoWithImg = () => {
   const { handleClickFavorite, favoritesItems } = useFavorite(undefined);
   const navigate = useNavigate();

   return (
      <>
         {favoritesItems.length ? (
            <>
               {favoritesItems.map(({ id, imageUrl, title, rating, year }) => (
                  <CardInformation key={id}>
                     <Image
                        background_url={imageUrl ?? temporaryImage}
                        onClick={() => navigate(`/filminfo/${id}`, { replace: false })}
                     />
                     <Info>
                        <Description>
                           <Title>{truncateTitle(title)}</Title>
                           <ReleaseYears>{year}</ReleaseYears>
                           <Rating color={calculateColorRating(rating)}>{rating}</Rating>
                        </Description>
                        <Icon
                           onClick={() =>
                              handleClickFavorite(id, title, imageUrl, rating, year)
                           }
                           isFav={favoritesItems.some(item => item.id === id)}
                        >
                           <FavoriteIcon src={favIcon} />
                        </Icon>
                     </Info>
                  </CardInformation>
               ))}
            </>
         ) : (
            <NothingFoundBlock>
               <NothingFoundTitle>В избранном отсутствуют фильмы...</NothingFoundTitle>
            </NothingFoundBlock>
         )}
      </>
   );
};
