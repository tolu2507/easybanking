import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from './onboarding';
import TabNavigator from './tab';

export default function Navigators() {
  const state = true;
  return (
    <NavigationContainer>
      {state ? <Onboarding /> : <TabNavigator />}
    </NavigationContainer>
  );
}
