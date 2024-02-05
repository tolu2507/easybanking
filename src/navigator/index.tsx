/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from './onboarding';
import {useDispatch, useSelector} from 'react-redux';
import {getOnboarding} from '../store/features/onboarding/onboardingslice';
import TabStacksNavigator from './tabscreen';
import encryptedDetails from '../utils/storage';
import {setEmail} from '../store/features/onboarding/authSlice';

export default function Navigators() {
  const state = useSelector(getOnboarding);
  const dispatch = useDispatch();

  useEffect(() => {
    const res = async () => {
      let data = await encryptedDetails.getSingleItem('profile');
      console.log('here is the data=> ', JSON.parse(data));
      let response = JSON.parse(data);
      if (response.uid) {
        console.log('here is the datas=> ', response.email);
        dispatch(setEmail(response.email));
      }
    };
    res();
  }, []);

  return (
    <NavigationContainer>
      {state.email === null ? <Onboarding /> : <TabStacksNavigator />}
    </NavigationContainer>
  );
}
