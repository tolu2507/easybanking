import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../constants';
import TabNavigator from './tab';
import {SignupScreen} from '../screen';

const Stack = createStackNavigator();

export default function TabStacksNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Screens.tab}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.tab} component={TabNavigator} />
      <Stack.Screen name={Screens.profile} component={SignupScreen} />
    </Stack.Navigator>
  );
}
