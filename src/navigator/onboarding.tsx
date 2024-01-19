import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Greeting from '../component/greeting';

const Stack = createStackNavigator();

export default function Onboarding() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Greeting} />
    </Stack.Navigator>
  );
}
