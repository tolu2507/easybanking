/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyledCardNumberText, StyledSmallcards} from '..';
import {Colors} from '../../../constants';

export default function SmallCard({
  value,
  data,
}: {
  value: string;
  data: string;
}) {
  return (
    <StyledSmallcards>
      <StyledCardNumberText style={{fontSize: 13, color: Colors.textgrey}}>
        {value}
      </StyledCardNumberText>
      <StyledCardNumberText style={{fontSize: 13}}>{data}</StyledCardNumberText>
    </StyledSmallcards>
  );
}
