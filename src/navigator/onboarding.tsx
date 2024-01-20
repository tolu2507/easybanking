import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../constants';
import {LandingScreen, SigninScreen, SignupScreen} from '../screen';

const Stack = createStackNavigator();

export default function Onboarding() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.landing} component={LandingScreen} />
      <Stack.Screen name={Screens.signin} component={SigninScreen} />
      <Stack.Screen name={Screens.signup} component={SignupScreen} />
    </Stack.Navigator>
  );
}
