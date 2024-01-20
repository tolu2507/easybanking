import {configureStore} from '@reduxjs/toolkit';
import onboardingReducer from './features/onboarding/onboardingslice';
import landingReducer from './features/onboarding/landingSlice';
import authReducer from './features/onboarding/authSlice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    landing: landingReducer,
    auth: authReducer,
  },
});
