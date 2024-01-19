import {createSlice} from '@reduxjs/toolkit';

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: true,
  reducers: {
    changeState(state, action) {
      state = action.payload;
    },
  },
});

export const {changeState} = onboardingSlice.actions;
export const getOnboarding = (state: any) => state.onboarding;
export default onboardingSlice.reducer;
