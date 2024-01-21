import React from 'react';
import {TabOptions} from '../interface/tabs';
import {Screens} from '.';
import {
  HomeScreen,
  SettingsScreen,
  StatisticsScreen,
  WalletScreen,
} from '../screen';
import {
  Home,
  HomeInactive,
  Settings,
  SettingsActive,
  StatisticActive,
  Statistics,
  Wallet,
  WalletActive,
} from '../assets/svg';

export const buttomTab: TabOptions[] = [
  {
    screen: Screens.home,
    component: HomeScreen,
    options: {
      labelName: 'Home',
      active: <Home width={24} height={24} />,
      inactive: <HomeInactive width={24} height={24} />,
    },
  },
  {
    screen: Screens.card,
    component: WalletScreen,
    options: {
      labelName: 'My Cards',
      active: <WalletActive width={24} height={24} />,
      inactive: <Wallet width={24} height={24} />,
    },
  },
  {
    screen: Screens.statistics,
    component: StatisticsScreen,
    options: {
      labelName: 'Statistics',
      active: <StatisticActive width={24} height={24} />,
      inactive: <Statistics width={24} height={24} />,
    },
  },
  {
    screen: Screens.settings,
    component: SettingsScreen,
    options: {
      labelName: 'Settings',
      active: <SettingsActive width={24} height={24} />,
      inactive: <Settings width={24} height={24} />,
    },
  },
];
