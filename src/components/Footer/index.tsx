import React from 'react';
import { Logotype } from '@components/Logo';
import kinoPoiskLogo from 'src/assets/logoKinoPoisk.png';

import { Container, KinoPoiskLogo, Wrapper } from './styled';

export const Footer = () => {
   return (
      <Wrapper>
         <Container>
            <Logotype onClick={() => null} />
            <KinoPoiskLogo alt='KinoPoisk' src={kinoPoiskLogo} />
         </Container>
      </Wrapper>
   );
};
