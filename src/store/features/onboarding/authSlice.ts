import {createSlice} from '@reduxjs/toolkit';
import {InputAuth} from '../../../interface/inputs/inputhauth';

const initialState: InputAuth = {
  email: '',
  password: '',
  name: '',
  number: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail(state, action) {
      let res = {...state, email: action.payload};
      return res;
    },
    setPassword(state, action) {
      let res = {...state, password: action.payload};
      return res;
    },
    setName(state, action) {
      let res = {...state, name: action.payload};
      return res;
    },
    setNumber(state, action) {
      let res = {...state, number: action.payload};
      return res;
    },
  },
});
export const {setEmail, setName, setNumber, setPassword} = authSlice.actions;
export const getInputAuth = (state: any) => state.auth;
export default authSlice.reducer;
