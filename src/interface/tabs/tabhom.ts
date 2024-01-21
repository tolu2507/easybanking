import {ACTIONS} from './actions';
import {SINGLE} from './single';

export interface TABHOME {
  cardnumber: string;
  date: string;
  cvv: string;
  holdername: string;
  sent: ACTIONS['sent'];
  receive: ACTIONS['receive'];
  loan: ACTIONS['loan'];
  topup: ACTIONS['topup'];
  color: string;
  data: SINGLE[];
  action: () => void;
}
