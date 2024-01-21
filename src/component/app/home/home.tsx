import React from 'react';
import {ActionComponent, TabHomeBodyComponent, TransactionComponent} from '..';
import {TABHOME} from '../../../interface/tabs/tabhom';

export default function TabHomeComponent({
  cardnumber,
  date,
  cvv,
  holdername,
  sent,
  receive,
  loan,
  topup,
  color,
  data,
  action,
}: TABHOME) {
  return (
    <TabHomeBodyComponent
      cardnumber={cardnumber}
      date={date}
      cvv={cvv}
      holdername={holdername}>
      <ActionComponent
        sent={sent}
        receive={receive}
        loan={loan}
        topup={topup}
      />
      <TransactionComponent
        color={color}
        data={data}
        action={action}
        headerShown={true}
      />
    </TabHomeBodyComponent>
  );
}
