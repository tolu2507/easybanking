import React from 'react';
import {
  Address,
  Bank,
  Bell,
  Message,
  Pay,
  Person,
  Setting,
} from '../assets/svg';

export const settingsData = [
  {
    title: 'General',
    list: [
      {name: 'Language', action: () => console.log('hi')},
      {name: 'My Profile', action: () => console.log('hi')},
      {name: 'Contact Us', action: () => console.log('hi')},
    ],
  },
  {
    title: 'Security',
    list: [
      {name: 'Change Password', action: () => console.log('hi')},
      {name: 'Privacy Policy', action: () => console.log('hi')},
    ],
  },
  {
    title: 'Choose what data you share with us',
    list: [{name: 'Biometric', action: () => console.log('hi')}],
  },
];

export const list = [
  {name: 'Personal Information', logo: <Person />},
  {name: 'Payment Preferences', logo: <Pay />},
  {name: 'Banks and Cards', logo: <Bank />},
  {name: 'Notifications', logo: <Bell />},
  {name: 'Message Center', logo: <Message />},
  {name: 'Address', logo: <Address />},
  {name: 'Settings', logo: <Setting />},
];
