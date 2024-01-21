import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from './onboarding';
import {useSelector} from 'react-redux';
import {getOnboarding} from '../store/features/onboarding/onboardingslice';
import TabStacksNavigator from './tabscreen';

export default function Navigators() {
  const state = useSelector(getOnboarding);
  return (
    <NavigationContainer>
      {state ? <Onboarding /> : <TabStacksNavigator />}
    </NavigationContainer>
  );
}
