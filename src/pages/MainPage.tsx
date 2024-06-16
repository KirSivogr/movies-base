import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { HomePageContent } from '@components/PageContent/HomePageContent';

import { GlobalStyles } from './styled';

export const HomePage = () => {
   return (
      <>
         <GlobalStyles />
         <Header isMainPage />
         <HomePageContent />
         <Footer />
      </>
   );
};
