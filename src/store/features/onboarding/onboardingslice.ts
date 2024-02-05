import {createSlice} from '@reduxjs/toolkit';
import {ONBOARD} from '../../../interface/onboarding';
let initialState: ONBOARD = {
  displayName: null,
  email: null,
  emailVerified: null,
  phoneNumber: null,
  photoURL: null,
  providerId: null,
  tenantId: null,
  uid: null,
};
const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    changeState(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const {changeState} = onboardingSlice.actions;
export const getOnboarding = (state: any) => state.onboarding;
export default onboardingSlice.reducer;
