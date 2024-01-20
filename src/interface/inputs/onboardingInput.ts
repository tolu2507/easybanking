import {ReactNode} from 'react';

export interface INPUTS {
  label: string;
  icon: ReactNode;
  placeholder: string;
  value: string;
  action: (val: string) => void;
  secured: boolean;
  securedAction?: () => void;
}
