import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Greeting from '../component/greeting';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Homes" component={Greeting} />
      <Tab.Screen name="Settings" component={Greeting} />
    </Tab.Navigator>
  );
}
