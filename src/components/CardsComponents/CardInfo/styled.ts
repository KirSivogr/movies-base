import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const CardInformation = styled.div`
   display: flex;
   height: 100px;
   justify-content: space-between;
   background-color: ${colors.background};
   width: 90%;
   margin-left: 5px;
   padding: 12px 24px;
   position: absolute;
   bottom: -40px;
   left: 10px;
   z-index: 1;
   box-sizing: border-box;
   border-radius: 5px;
   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const FavoriteIcon = styled.img`
   cursor: pointer;
   display: inline-block;
   width: 20px;
   height: 20px;
   @media (max-width: 390px) {
      width: 10px;
      height: 10px;
   }
`;

export const Icon = styled.div<{ isFav: boolean }>`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   width: 40px;
   height: 40px;
   cursor: pointer;
   background-color: ${({ isFav }) => (isFav ? `${colors.gold}` : `${colors.white}`)};
   transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    background-color: ${({ isFav }) => (isFav ? `${colors.backgroundHoverFav}` : `${colors.backgroundHoverNotFav}`)};
  }

  &:active {
    background-color: ${colors.backgroundActive};
  }

   @media (max-width: 390px) {
      width: 15px;
      height: 15px;
   }
`;

export const ReleaseYear = styled.div`
   height: 1.62rem;
   color: ${colors.primary};
   font-weight: 300;
`;

export const Title = styled.div`
   font-size: 1rem;
   color: ${colors.primary};
   font-weight: 900;
   margin-bottom: 5px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

export const Description = styled.div`
   display: flex;
   width: 80%;
   flex-direction: column;
   align-items: flex-start;
`;
