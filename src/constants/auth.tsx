import React from 'react';
import {Lock, Mail, Pay, Person, Phone} from '../assets/svg';

export const signInData = [
  {
    label: 'Email Address',
    icon: <Mail width={22} height={22} />,
    secured: false,
    placeholder: 'Email Address',
    // value: email,
    // action: (val: string) => dispatch(setEmail(val)),
  },
  {
    label: 'Password',
    icon: <Lock width={22} height={22} />,
    secured: true,
    placeholder: 'Password',
    // value: password,
    // action: (val: string) => dispatch(setPassword(val)),
    securedAction: () => console.log('you made it here!!!!!!!!!!!!!!!!'),
  },
];

export const signUpData = [
  {
    label: 'Full Name',
    icon: <Mail width={22} height={22} />,
    secured: false,
    placeholder: 'Full Name',
    // value: email,
    // action: (val: string) => dispatch(setEmail(val)),
  },
  {
    label: 'Phone Number',
    icon: <Phone width={22} height={22} />,
    secured: false,
    placeholder: 'Phone Number',
    // value: password,
    // action: (val: string) => dispatch(setPassword(val)),
  },
  {
    label: 'Email Address',
    icon: <Mail width={22} height={22} />,
    secured: false,
    placeholder: 'Email Address',
    // value: email,
    // action: (val: string) => dispatch(setEmail(val)),
  },
  {
    label: 'Password',
    icon: <Lock width={22} height={22} />,
    secured: true,
    placeholder: 'Password',
    // value: password,
    // action: (val: string) => dispatch(setPassword(val)),
    securedAction: () => console.log('you made it here!!!!!!!!!!!!!!!!'),
  },
];

export const userData = [
  {
    label: 'Full Name',
    icon: <Person width={22} height={22} />,
    secured: false,
    placeholder: 'Full Name',
    // value: email,
    // action: (val: string) => dispatch(setEmail(val)),
  },

  {
    label: 'Email Address',
    icon: <Mail width={22} height={22} />,
    secured: false,
    placeholder: 'Email Address',
    // value: email,
    // action: (val: string) => dispatch(setEmail(val)),
  },
  {
    label: 'Phone Number',
    icon: <Phone width={22} height={22} />,
    secured: false,
    placeholder: 'Phone Number',
    // value: password,
    // action: (val: string) => dispatch(setPassword(val)),
  },
];

export const newCardData = [
  {
    label: 'Cardholder Name',
    icon: <Person width={22} height={22} />,
    secured: false,
    placeholder: 'Cardholder Name',
    // value: email,
    // action: (val: string) => dispatch(setEmail(val)),
  },

  {
    label: 'Expiry Date',
    icon: undefined,
    secured: false,
    placeholder: 'date',
    // value: email,
    // action: (val: string) => dispatch(setEmail(val)),
  },
  {
    label: 'CVV',
    icon: undefined,
    secured: false,
    placeholder: 'cvv',
    // value: email,
    // action: (val: string) => dispatch(setEmail(val)),
  },
  {
    label: 'Card Number',
    icon: <Pay width={22} height={22} />,
    secured: false,
    placeholder: 'Card Number',
    // value: password,
    // action: (val: string) => dispatch(setPassword(val)),
  },
];
