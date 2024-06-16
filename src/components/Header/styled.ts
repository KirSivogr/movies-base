import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const Container = styled.div`
   width: 70%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 63px;
   @media (max-width: 490px) {
      width: 85%;
   }
`;

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   height: 127px;
   width: 100%;
   background: ${colors.gradient};
`;

export const FavoritesIcon = styled.img`
   position: relative;
   top: 5px;
   width: 30px;
   height: 40px;
   transition: 1s;
   &:hover {
      transform: scale(1.1);
   }
`;

export const FavoritesText = styled.div`
   display: flex;
   align-self: end;
   font-weight: 500;
   font-size: 20px;
   height: 20px;
   padding: 6px 0;
   color: ${colors.white};
`;

export const Favorites = styled.div`
   display: flex;
   align-self: end;
   color: ${colors.white};
   cursor: pointer;
`;

export const Home = styled.div`
   align-self: end;
   display: flex;
   color: ${colors.white};
   cursor: pointer;
`;

export const Links = styled.div`
   display: flex;
   align-self: end;
   justify-content: space-between;
`;

export const HomeText = styled.div`
   display: flex;
   align-self: end;
   font-weight: 500;
   font-size: 20px;
   height: 20px;
   padding: 6px;
   margin-right: 5px;
   color: ${colors.white};
`;

export const HomeIcon = styled.img`
   position: relative;
   top: 5px;
   width: 20px;
   height: 40px;
   transition: 1s;
   &:hover {
      transform: scale(1.1);
   }
`;
