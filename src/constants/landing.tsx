import {WelcomeOne, WelcomeThree, WelcomeTwo} from '../assets/svg';
import {Landing} from '../interface/landing';
import React from 'react';

export const landingData: Landing[] = [
  {
    id: 1,
    logo: <WelcomeOne width={335} height={256} />,
    title: 'Fastest Payment in the world',
    description:
      'Integrate multiple payment methoods to help you up the process quickly',
    button: {
      buttonText: 'Next',
      onClick: () => 'hello',
      backgroundColor: '#0066FF',
      textColor: '#fff',
    },
  },
  {
    id: 2,
    logo: <WelcomeTwo width={335} height={256} />,
    title: 'The most Secure Platfrom for Customer',
    description:
      'Built-in Fingerprint, face recognition and more, keeping you completely safe',

    button: {
      buttonText: 'Next',
      onClick: () => 'hello',
      backgroundColor: '#0066FF',
      textColor: '#fff',
    },
  },
  {
    id: 3,
    logo: <WelcomeThree width={335} height={256} />,
    title: 'Paying for Everything is Easy and Convenient',
    description:
      'Built-in Fingerprint, face recognition and more, keeping you completely safe',

    button: {
      buttonText: 'Next',
      onClick: () => 'hello',
      backgroundColor: '#0066FF',
      textColor: '#fff',
    },
  },
];
