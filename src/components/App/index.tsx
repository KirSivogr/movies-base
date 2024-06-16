import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from 'src/pages/MainPage';

import { FavoritesPage } from '@/pages/FavoritesPage';
import { InfoPage } from '@/pages/InfoPage';

export const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/filminfo/:id' element={<InfoPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
         </Routes>
      </BrowserRouter>
   );
};
