import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../constants';
import {LandingScreen, SigninScreen, SignupScreen} from '../screen';
import encryptedDetails from '../utils/storage';

const Stack = createStackNavigator();

export default function Onboarding() {
  const [state, setState] = useState('');
  useEffect(() => {
    const res = async () => {
      let data = await encryptedDetails.getSingleItem('profile');
      console.log('here is the data=> ', JSON.parse(data));
      let response = JSON.parse(data);
      if (response.uid) {
        console.log('here is the datas=> ', response.uid);
        setState(Screens.signin);
      }
    };
    res();
  }, []);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {state !== '' ? (
        <Stack.Screen name={Screens.signin} component={SigninScreen} />
      ) : (
        <Stack.Screen name={Screens.landing} component={LandingScreen} />
      )}
      <Stack.Screen name={Screens.signup} component={SignupScreen} />
    </Stack.Navigator>
  );
}
