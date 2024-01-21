import {SharedValue} from 'react-native-reanimated';
import {SINGLE} from './single';

export interface TABWALLET {
  cardnumber: string;
  date: string;
  cvv: string;
  holdername: string;
  color: string;
  data: SINGLE[];
  action: () => void;
  mode: 'light' | 'dark';
  progress: SharedValue<number>;
  min: SharedValue<number>;
  max: SharedValue<number>;
  setVal: (val: number) => void;
  price: SPENDINGLIMIT['price'];
}

export interface SPENDINGLIMIT {
  mode: 'light' | 'dark';
  progress: SharedValue<number>;
  min: SharedValue<number>;
  max: SharedValue<number>;
  setVal: (val: number) => void;
  price: number;
}
