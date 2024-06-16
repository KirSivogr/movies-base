import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const Card = styled.div`
   display: flex;
   margin-bottom: 100px;
   max-width: 400px;
   height: 450px;
   flex-direction: column;
   justify-content: center;
   position: relative;
`;

export const Rating = styled.div<{ color: string }>`
   font-size: 18px;
   margin-top: 12px;
   margin-left: 12px;
   position: absolute;
   top: 0;
   font-weight: 500;
   padding: 3px;
   background-color: ${({ color }) => color};
   color: ${colors.white};
   border-radius: 3px;
`;

export const CardImage = styled.div<{ background_url: string }>`
   background-image: url(${({ background_url }) => background_url});
   width: 100%;
   height: 100%;
   background-position: center center;
   background-size: cover;
   cursor: pointer;
   box-shadow: 0px 4px 8px ${colors.boxShadow};
   border-radius: 8px;
   transition: 1s;
   &:hover {
      transform: scale(101%);
   }
`;
