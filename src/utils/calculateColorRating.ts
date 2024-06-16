export const calculateColorRating = (rating: string | undefined): string => {
   if (Number(rating) >= 6) {
      return '#3bb33b';
   }
   if (Number(rating) < 6 && Number(rating) >= 4) {
      return '#777';
   }
   if (Number(rating) < 4 && Number(rating) > 0) {
      return '#ff0000';
   }

   return 'null';
};
