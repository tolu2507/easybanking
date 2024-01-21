import React from 'react';
import {
  SpendingLimitView,
  TabHomeBodyComponent,
  TransactionComponent,
} from '..';
import {TABWALLET} from '../../../interface/tabs/wallet';

export default function TabWalletComponent({
  cardnumber,
  date,
  cvv,
  holdername,
  color,
  data,
  action,
  setVal,
  mode,
  min,
  max,
  progress,
  price,
}: TABWALLET) {
  return (
    <TabHomeBodyComponent
      cardnumber={cardnumber}
      date={date}
      cvv={cvv}
      holdername={holdername}>
      <TransactionComponent
        color={color}
        data={data}
        action={action}
        headerShown={false}
      />
      <SpendingLimitView
        mode={mode}
        progress={progress}
        min={min}
        max={max}
        setVal={setVal}
        price={price}
      />
    </TabHomeBodyComponent>
  );
}
