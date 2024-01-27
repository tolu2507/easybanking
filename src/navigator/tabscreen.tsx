import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../constants';
import TabNavigator from './tab';
import {
  AllCardScreen,
  EditPersonScreen,
  NewCardScreen,
  ProfileScreen,
} from '../screen';

const Stack = createStackNavigator();

export default function TabStacksNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Screens.tab}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.tab} component={TabNavigator} />
      <Stack.Screen name={Screens.profile} component={ProfileScreen} />
      <Stack.Screen name={Screens.edit} component={EditPersonScreen} />
      <Stack.Screen name={Screens.all} component={AllCardScreen} />
      <Stack.Screen name={Screens.newcard} component={NewCardScreen} />
    </Stack.Navigator>
  );
}
