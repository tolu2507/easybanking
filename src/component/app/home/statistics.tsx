import React from 'react';
import {BodyContainer} from '../../../templates/features';
import {
  StatisticsBalanceComponent,
  StatisticsGraph,
  TransactionComponent,
} from '..';
import {STATISTICS} from '../../../interface/tabs/statistics';

export default function TabStatisticsComponent({
  color,
  data,
  action,
  value,
  title,
  month,
  setMonth,
}: STATISTICS) {
  return (
    <BodyContainer>
      <StatisticsBalanceComponent title={title} value={value} color={color} />
      <StatisticsGraph month={month} setMonth={setMonth} />
      <TransactionComponent color={color} data={data} action={action} />
    </BodyContainer>
  );
}
