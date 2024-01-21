import React from 'react';
import {BodyContainer} from '../../../templates/features';
import {ActionComponent, Mastercard, TransactionComponent} from '..';
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
}: TABHOME) {
  return (
    <BodyContainer>
      <Mastercard
        cardnumber={cardnumber}
        date={date}
        cvvnumber={cvv}
        holdername={holdername}
      />
      <ActionComponent
        sent={sent}
        receive={receive}
        loan={loan}
        topup={topup}
      />
      <TransactionComponent color={color} data={data} />
    </BodyContainer>
  );
}
