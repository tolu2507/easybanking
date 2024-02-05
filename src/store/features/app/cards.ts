import {createSlice} from '@reduxjs/toolkit';

const initialState: {
  cardholder: string;
  date: string;
  cvv: string;
  cardnumber: string;
}[] = [];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
});
export const {} = cardsSlice.actions;
export const getCardDatas = (state: any) => state.cards;
export default cardsSlice.reducer;
