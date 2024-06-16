import { useParams } from 'react-router';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { InfoPageContent } from '@components/PageContent/InfoPageContent';

import { useGetFilmById } from '@/hooks/useGetFilmById';
import { GlobalStyles } from '@/pages/styled';

export const InfoPage = () => {
   const { id } = useParams();
   const { filmData, isLoading } = useGetFilmById(id);

   return (
      <>
         <GlobalStyles />
         <Header isMainPage={false} />
         <InfoPageContent filmData={filmData} isLoading={isLoading} />
         <Footer />
      </>
   );
};
