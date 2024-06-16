import { LENGTH_OF_TRUNCATE } from '@/constants/constants';

export const truncateTitle = (str: string) => {
   if (str.length <= LENGTH_OF_TRUNCATE) {
      return str;
   }

   return `${str.slice(0, LENGTH_OF_TRUNCATE)}...`;
};
