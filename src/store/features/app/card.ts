import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: '',
  cardholder: '',
  date: '',
  cvv: '',
  cardnumber: '',
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCardholder(state, action) {
      let res = {...state, cardholder: action.payload};
      return res;
    },
    setDate(state, action) {
      let res = {...state, date: action.payload};
      return res;
    },
    setCvv(state, action) {
      let res = {...state, cvv: action.payload};
      return res;
    },
    setCardNumber(state, action) {
      let res = {...state, cardnumber: action.payload};
      return res;
    },
  },
});
export const {setCardNumber, setCardholder, setCvv, setDate} =
  cardSlice.actions;
export const getCardData = (state: any) => state.card;
export default cardSlice.reducer;
