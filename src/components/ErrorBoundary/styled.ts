import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const ErrorWrapper = styled.div`
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   position: absolute;
   font-family: 'Rockwell Condensed', sans-serif;
   text-align: center;
`;

export const ErrorText = styled.h3`
   color: ${colors.black};
   font-size: 3.4rem;
   letter-spacing: 0.2px;
   margin-bottom: 3rem;
`;
