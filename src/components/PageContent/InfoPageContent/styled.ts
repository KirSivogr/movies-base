import styled, { css } from 'styled-components';

import { colors } from '@/constants/colors';

export const Container = styled.div`
   max-width: 70%;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   min-height: 80vh;
`;

export const Wrapper = styled.main`
   display: flex;
   width: 100%;
   margin: 0px auto;
   min-height: 614px;
   background-color: ${colors.background};
`;

export const FavoriteIcon = styled.img`
   cursor: pointer;
   display: flex;
   justify-self: end;
   width: 20px;
   height: 20px;
   margin: 5px;
   @media (max-width: 390px) {
      width: 10px;
      height: 10px;
   }
`;

export const FavoriteButton = styled.div<{ isFav: boolean }>`
   width: 225px;
   height: 30px;
   margin-bottom: 75px;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px 20px;
   font-weight: 500;
   background-color: ${({ isFav }) => (isFav ? `${colors.gold}` : `${colors.boxShadow}`)};
   color: ${colors.black};
   border: none;
   border-radius: 25px;
   cursor: pointer;
   font-size: 16px;
   transition: all 0.3s ease;

   &:hover {
      transform: scale(1.02);
      background-color: ${({ isFav }) => (isFav ? `${colors.backgroundHoverFav}` : `${colors.backgroundHoverNotFav}`)};
   }

   &:active {
      background-color: ${colors.backgroundActive};
   }

   ${({ isFav }) =>
      isFav &&
      css`
         background-color: ${colors.backgroundActive};
      `}
`;

export const Rating = styled.div<{ color: string }>`
   font-size: 18px;
   width: 26px;
   margin-top: 12px;
   margin-left: 12px;
   font-weight: 500;
   padding: 3px;
   background-color: ${({ color }) => color};
   color: ${colors.white};
   border-radius: 3px;
`;

export const Image = styled.div<{ background_url: string | undefined }>`
   width: 500px;
   height: 570px;
   margin-right: 80px;
   background-image: url(${({ background_url }) => background_url});
   background-position: center center;
   background-size: cover;
   box-shadow: 0px 4px 8px ${colors.boxShadow};
   border-radius: 8px;
   @media (max-width: 391px) {
      width: 200px;
      height: 270px;
      margin-right: 0;
   }
   @media (min-width: 391px) and (max-width: 768px) {
      width: 250px;
      height: 370px;
      margin-right: 0;
      font-size: 14px;
   }
   @media (min-width: 768px) and (max-width: 1280px) {
      margin-right: 40px;
   }
`;

export const ContentWrapper = styled.div`
   position: relative;
   margin-top: 120px;
   margin-bottom: 120px;
   display: flex;
   justify-content: space-between;
   @media (max-width: 391px) {
      margin-top: 30px;
      margin-bottom: 30px;
      flex-direction: column;
      display: flex;
      align-items: center;
   }
   @media (min-width: 391px) and (max-width: 768px) {
      margin-top: 60px;
      margin-bottom: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   @media (min-width: 769px) and (max-width: 1280px) {
      margin-top: 60px;
      margin-bottom: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;

export const Title = styled.div`
   font-size: 32px;
   font-weight: 900;
   margin: 23px 0;
   color: #393939;
`;
export const SubtitleBlock = styled.div`
   font-size: 24px;
   line-height: 30px;
   margin-bottom: 5px;
`;
export const Description = styled.div`
   font-size: 18px;
   font-weight: 300;
`;

export const MainDescriptionInfo = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 60px;
   @media (max-width: 391px) {
      margin-bottom: 20px;
   }
   @media (min-width: 391px) and (max-width: 768px) {
      margin-bottom: 30px;
   }
   @media (min-width: 768px) and (max-width: 1280px) {
      margin-bottom: 40px;
   }
`;
export const DescriptionWrapper = styled.div`
   width: 70%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`;

export const OverviewItem = styled.div`
   font-size: 16px;
   font-weight: 500;
   margin: 5px 0;
   span {
      color: ${colors.black};
      font-weight: 300;
   }
`;
export const Overview = styled.div`
   font-size: 32px;
`;
