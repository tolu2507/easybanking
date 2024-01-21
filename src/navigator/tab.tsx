/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Colors, buttomTab} from '../constants';
import {useSelector} from 'react-redux';
import {getLanding} from '../store/features/onboarding/landingSlice';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  const mode = useSelector(getLanding);
  return (
    <Tab.Navigator
      activeColor={Colors.blueprimary}
      inactiveColor={Colors.tabicon}
      barStyle={{
        backgroundColor:
          mode === 'dark'
            ? Colors.tabbackgrounddark
            : Colors.tabbackgroundlight,
        paddingVertical: 4,
        paddingHorizontal: 4,
      }}>
      {buttomTab.map(
        ({screen, component, options: {labelName, active, inactive}}) => (
          <Tab.Screen
            key={screen}
            name={screen}
            component={component}
            options={{
              tabBarLabel: labelName,
              tabBarIcon: ({focused}) => (focused ? active : inactive),
            }}
          />
        ),
      )}
    </Tab.Navigator>
  );
}
