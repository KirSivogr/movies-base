import React from 'react';

import museumLogo from '@/assets/kinoPoiskLogo.png';

import { Logo, LogoImage } from './styled';

export interface LogotypeProps {
   onClick: () => void;
}

export const Logotype = ({ onClick }: LogotypeProps) => {
   return (
      <Logo onClick={onClick}>
         <LogoImage src={museumLogo} />
      </Logo>
   );
};
