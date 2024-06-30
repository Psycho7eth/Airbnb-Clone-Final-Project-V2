import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};

export const cardListSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export const { setCards } = cardListSlice.actions;

export const selectCards = (state) => state.cardList.cards;

export default cardListSlice.reducer;
