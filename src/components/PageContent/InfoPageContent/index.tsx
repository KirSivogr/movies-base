import { Loader } from '@components/Loader';

import favIcon from '@/assets/icon.svg';
import temporaryImage from '@/assets/zagluwka.svg';
import { useFavorite } from '@/hooks/useFavorite';
import { FilmWithOverview, IGenres } from '@/types/interfaces';
import { calculateColorRating } from '@/utils/calculateColorRating';

import {
   Container,
   ContentWrapper,
   Description,
   DescriptionWrapper,
   FavoriteButton,
   FavoriteIcon,
   Image,
   MainDescriptionInfo,
   Overview,
   OverviewItem,
   Rating,
   SubtitleBlock,
   Title,
   Wrapper,
} from './styled';

interface InfoPageContentProps {
   filmData: FilmWithOverview | null;
   isLoading: boolean;
}

export const InfoPageContent = ({ filmData, isLoading }: InfoPageContentProps) => {
   const { handleClickFavorite, isFav } = useFavorite(filmData?.id);

   return (
      <Wrapper>
         <Container>
            <ContentWrapper>
               {isLoading ? (
                  <Loader />
               ) : (
                  <Image background_url={filmData?.imageUrl ?? temporaryImage}>
                     <Rating color={calculateColorRating(filmData?.rating)}>
                        {Number(filmData?.rating) === 0 ? '' : filmData?.rating}
                     </Rating>
                  </Image>
               )}
               <DescriptionWrapper>
                  <MainDescriptionInfo>
                     <Title>
                        {filmData?.title} {filmData?.year ? `(${filmData?.year})` : ''}
                     </Title>
                     <FavoriteButton
                        onClick={() =>
                           handleClickFavorite(
                              filmData?.id,
                              filmData?.title,
                              filmData?.imageUrl,
                              filmData?.rating,
                              filmData?.year,
                           )
                        }
                        isFav={isFav}
                     >
                        Добавить в избранное
                        <FavoriteIcon src={favIcon} />
                     </FavoriteButton>
                     <SubtitleBlock>Описание</SubtitleBlock>
                     <Description>{filmData?.description ?? '-'}</Description>
                  </MainDescriptionInfo>
                  <Overview>
                     <SubtitleBlock>О фильме</SubtitleBlock>
                     <OverviewItem>
                        Год выпуска: <span>{filmData?.year ?? '-'}</span>
                     </OverviewItem>
                     <OverviewItem>
                        Жанр:{' '}
                        <span>
                           {filmData?.genres
                              .map((genre: IGenres): string => genre.name)
                              .join(', ') ?? '-'}
                        </span>
                     </OverviewItem>
                  </Overview>
               </DescriptionWrapper>
            </ContentWrapper>
         </Container>
      </Wrapper>
   );
};
