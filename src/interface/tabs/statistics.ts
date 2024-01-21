import {SINGLE} from './single';

export interface STATISTICS {
  color: string;
  data: SINGLE[];
  action: () => void;
  title: string;
  value: string;
  month:
    | 'Jan'
    | 'Feb'
    | 'Mar'
    | 'Apr'
    | 'May'
    | 'Jun'
    | 'Jul'
    | 'Aug'
    | 'Sep'
    | 'Oct'
    | 'Nov'
    | 'Dec';
  setMonth: (val: STATISTICS['month']) => void;
}
