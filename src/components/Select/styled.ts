import styled from 'styled-components';

import { colors } from '@/constants/colors';

export const SelectWrapper = styled.div`
   position: relative;
   width: 200px;
   margin: 20px 10px 20px 0;
`;

export const SelectLabel = styled.div`
   font-weight: 700;
   margin: 5px;
`;

export const SelectBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px;
   background: #f5f5f5;
   border-radius: 10px;
   cursor: pointer;
   user-select: none;
`;

export const Dropdown = styled.ul`
   position: absolute;
   top: 100%;
   left: 0;
   width: 100%;
   background: ${colors.white};
   border-radius: 10px;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   max-height: 200px;
   overflow-y: auto;
   margin: 0;
   padding: 0;
   list-style: none;
   z-index: 999;
`;

export const DropdownItem = styled.li`
   padding: 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;

   &:hover {
      background: #f0f0f0;
   }
`;
