import {ReactNode} from 'react';
import {SCREENS} from '../screens/constant';

export interface TabOptions {
  screen:
    | SCREENS['home']
    | SCREENS['settings']
    | SCREENS['card']
    | SCREENS['statistics'];
  component: any;
  options: {
    labelName: string;
    active: ReactNode;
    inactive: ReactNode;
  };
}
