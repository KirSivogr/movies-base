import { CardInfoWithImg } from '@components/CardsComponents/CardInfoWithImage';

import {
   Container,
   FavoritesContainer,
   SubTitle,
   Title,
   TitleBlock,
   Wrapper,
} from './styled';

export const FavoritesPageContent = () => {
   return (
      <Wrapper>
         <Container>
            <TitleBlock>
               <Title>Избранное</Title>
               <SubTitle>Фильмы, которые ты сохранил</SubTitle>
            </TitleBlock>
            <FavoritesContainer>
               <CardInfoWithImg />
            </FavoritesContainer>
         </Container>
      </Wrapper>
   );
};
