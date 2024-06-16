import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logotype } from '@components/Logo';
import home from 'src/assets/homeIcon.svg';
import favIcon from 'src/assets/icon.svg';

import {
   Container,
   Favorites,
   FavoritesIcon,
   FavoritesText,
   Home,
   HomeIcon,
   HomeText,
   Links,
   Wrapper,
} from './styled';

interface HeaderProps {
   isMainPage: boolean;
}

export const Header = ({ isMainPage }: HeaderProps) => {
   const navigate = useNavigate();

   return (
      <Wrapper>
         <Container>
            <Logotype onClick={() => navigate('/', { replace: false })} />
            {isMainPage ? (
               <Favorites onClick={() => navigate('/favorites', { replace: false })}>
                  <FavoritesIcon alt='iconFavorites' src={favIcon} />
                  <FavoritesText>Избранное</FavoritesText>
               </Favorites>
            ) : (
               <Links>
                  <Home onClick={() => navigate('/', { replace: false })}>
                     <HomeIcon alt='iconHome' src={home} />
                     <HomeText>Главная</HomeText>
                  </Home>
                  <Favorites onClick={() => navigate('/favorites', { replace: false })}>
                     <FavoritesIcon alt='iconFavorites' src={favIcon} />
                     <FavoritesText>Избранное</FavoritesText>
                  </Favorites>
               </Links>
            )}
         </Container>
      </Wrapper>
   );
};
