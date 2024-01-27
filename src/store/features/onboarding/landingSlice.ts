import {createSlice} from '@reduxjs/toolkit';

const landingSlice = createSlice({
  name: 'landing',
  initialState: 'dark',
  reducers: {
    updateState(state, action) {
      state = action.payload;
    },
  },
});

export const {updateState} = landingSlice.actions;
export const getLanding = (state: any) => state.landing;
export default landingSlice.reducer;
