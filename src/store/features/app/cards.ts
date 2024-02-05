import {createSlice} from '@reduxjs/toolkit';
export interface CARDS {
  id: any;
  cardholder: string;
  date: string;
  cvv: string;
  cardnumber: string;
}

const initialState: CARDS[] = [];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards(state, action) {
      state = action.payload;
      return state;
    },
  },
});
export const {setCards} = cardsSlice.actions;
export const getCardDatas = (state: any) => state.cards;
export default cardsSlice.reducer;
