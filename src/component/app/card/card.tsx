/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SmallCard,
  StyledAbsoluteView,
  StyledBottomViewCard,
  StyledBottomViewCards,
  StyledCardNumberText,
  StyledCardNumberView,
  StyledCardViewTop,
  StyledImageCard,
  StyledMasterLogoView,
  StyledRelativeView,
} from '..';
import {Mastercards, Sim, Wifi} from '../../../assets/svg';
import {Colors} from '../../../constants';
import {formatNumberGroups} from '../../../utils/sixteenletter';

export default function Mastercard({
  cardnumber,
  date,
  cvvnumber,
  holdername,
}: {
  cardnumber: string;
  date: string;
  cvvnumber: string;
  holdername: string;
}) {
  const source = require('../../../assets/image/world.png');
  let text = formatNumberGroups(cardnumber);
  return (
    <StyledRelativeView>
      <StyledImageCard source={source} />
      <StyledAbsoluteView>
        <StyledCardViewTop>
          <Sim width={29} height={25} />
          <Wifi width={30} height={25} color={Colors.purpleicon} />
        </StyledCardViewTop>
        <StyledCardNumberView>
          {text?.map(item => (
            <StyledCardNumberText key={item}>{item}</StyledCardNumberText>
          ))}
        </StyledCardNumberView>
        <StyledCardNumberText style={{fontSize: 13}}>
          {holdername}
        </StyledCardNumberText>
        <StyledBottomViewCard>
          <StyledBottomViewCards>
            <SmallCard value={'Expiry Date'} data={date} />
            <SmallCard value={'CVV'} data={cvvnumber} />
          </StyledBottomViewCards>
          <StyledMasterLogoView>
            <Mastercards />
            <StyledCardNumberText style={{fontSize: 13, textAlign: 'center'}}>
              Mastercard
            </StyledCardNumberText>
          </StyledMasterLogoView>
        </StyledBottomViewCard>
      </StyledAbsoluteView>
    </StyledRelativeView>
  );
}
