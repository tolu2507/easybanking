import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from './onboarding';
import TabNavigator from './tab';
import {useSelector} from 'react-redux';
import {getOnboarding} from '../store/features/onboarding/onboardingslice';

export default function Navigators() {
  const state = useSelector(getOnboarding);
  return (
    <NavigationContainer>
      {state ? <Onboarding /> : <TabNavigator />}
    </NavigationContainer>
  );
}
