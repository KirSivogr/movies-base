import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const CardInformation = styled.div`
   display: flex;
   position: relative;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 10px;
   background-color: ${colors.white};
`;

export const Info = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 300px;
   margin-top: 5px;
`;

export const Image = styled.div<{ background_url: string | undefined }>`
   background-image: url(${({ background_url }) => background_url});
   background-position: center center;
   background-size: cover;
   background-repeat: no-repeat;
   cursor: pointer;
   width: 80px;
   height: 80px;
`;

export const NothingFoundBlock = styled.div`
   display: block;
   margin: 0 auto;
   text-align: center;
   font-style: italic;
`;

export const NothingFoundTitle = styled.div`
   font-weight: 300;
`;

export const Rating = styled.div<{ color: string }>`
   font-size: 18px;
   margin-bottom: 10px;
   font-weight: 500;
   padding: 3px;
   border-radius: 3px;
   color: ${colors.white};
   background-color: ${({ color }) => color};
`;

export const Icon = styled.div<{ isFav: boolean }>`
   position: absolute;
   right: 0;
   top: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 40px;
   height: 40px;
   background-color: ${({ isFav }) =>
      isFav ? `${colors.gold}` : `${colors.background}`};
   border-radius: 50%;
   margin-right: 10px;
   cursor: pointer;
`;

export const Title = styled.div`
   font-size: 17.54px;
   font-weight: 500;
   line-height: 26.32px;
   letter-spacing: -0.03em;
   text-align: left;
   color: ${colors.primary};
`;

export const ReleaseYears = styled.div`
   font-size: 18px;
   font-weight: 300;
   margin-bottom: 10px;
`;

export const Description = styled.div`
   display: flex;
   width: 257px;
   flex-direction: column;
   align-items: flex-start;
`;

export const FavoriteIcon = styled.img`
   cursor: pointer;
   display: inline-block;
   width: 20px;
   height: 20px;
`;
