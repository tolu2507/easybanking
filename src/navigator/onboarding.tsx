import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../screen/onboarding/landing';
import {Screens} from '../constants';

const Stack = createStackNavigator();

export default function Onboarding() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.landing} component={LandingScreen} />
      <Stack.Screen name={Screens.signin} component={LandingScreen} />
      <Stack.Screen name={Screens.signup} component={LandingScreen} />
    </Stack.Navigator>
  );
}
