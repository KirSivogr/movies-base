import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 70%;
   margin: 0px auto;
   min-height: 80vh;
`;

export const Wrapper = styled.div`
   background-color: ${colors.background};
`;

export const NothingFoundBlock = styled.div`
   text-align: center;
   margin-top: 60px;
`;

export const NothingFoundTitle = styled.div`
   font-weight: 700;
   margin-bottom: 5px;
`;

export const AdviceText = styled.div`
   font-weight: 300;
`;

export const Title = styled.div`
   margin: 60px 0 80px;
   font-size: 64px;
   font-weight: 900;
   text-align: end;
`;

export const Gallery = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 20px;
   flex-wrap: wrap;
   margin-bottom: 20px;
   @media (min-width: 769px) and (max-width: 1280px) {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 80px;
   }
   @media (max-width: 769px) {
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 80px;
      gap: 10px;
   }
`;

export const SelectContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-bottom: 1.5rem;

   &:hover {
      cursor: pointer;
   }
`;
