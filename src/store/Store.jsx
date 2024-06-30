

import { configureStore } from '@reduxjs/toolkit';
import cardListReducer from '../slice/cardSlice';

export const store = configureStore({
  reducer: {
    cardList: cardListReducer,
  },
});
