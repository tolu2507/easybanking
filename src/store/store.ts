import {configureStore} from '@reduxjs/toolkit';
import onboardingReducer from './features/onboarding/onboardingslice';
import landingReducer from './features/onboarding/landingSlice';
import authReducer from './features/onboarding/authSlice';
import cardReducer from './features/app/cards';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    landing: landingReducer,
    auth: authReducer,
    card: cardReducer,
  },
});
