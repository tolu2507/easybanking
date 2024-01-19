import {configureStore} from '@reduxjs/toolkit';
import onboardingReducer from './features/onboarding/onboardingslice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
});
