import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingScreen from '../screen/onboarding/landing';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Homes" component={LandingScreen} />
      <Tab.Screen name="Settings" component={LandingScreen} />
    </Tab.Navigator>
  );
}
