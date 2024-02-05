import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../constants';
import TabNavigator from './tab';
import {
  AllCardScreen,
  EditPersonScreen,
  NewCardScreen,
  ProfileScreen,
  TransactionScreen,
  ReceiveScreen,
  SearchScreen,
  SendScreen,
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
      <Stack.Screen name={Screens.transactions} component={TransactionScreen} />
      <Stack.Screen name={Screens.search} component={SearchScreen} />
      <Stack.Screen name={Screens.send} component={SendScreen} />
      <Stack.Screen name={Screens.receive} component={ReceiveScreen} />
    </Stack.Navigator>
  );
}
