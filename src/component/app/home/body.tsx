import React from 'react';
import {BodyContainer} from '../../../templates/features';
import {Mastercard, StyledWalletBodyView} from '..';
import {TABBODY} from '../../../interface/tabs/body';

export default function TabHomeBodyComponent({
  cardnumber,
  date,
  cvv,
  holdername,
  children,
}: TABBODY) {
  return (
    <BodyContainer>
      <Mastercard
        cardnumber={cardnumber}
        date={date}
        cvvnumber={cvv}
        holdername={holdername}
      />
      <StyledWalletBodyView>{children}</StyledWalletBodyView>
    </BodyContainer>
  );
}
