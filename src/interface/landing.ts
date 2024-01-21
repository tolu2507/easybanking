import {ReactNode} from 'react';
import {BUTTONS} from './button/button';

export interface Landing {
  id: number;
  logo: ReactNode;
  title: string;
  description: string;
  button: BUTTONS;
}
