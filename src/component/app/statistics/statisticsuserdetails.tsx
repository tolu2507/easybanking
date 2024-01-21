/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyledMasterLogoView, StyledTextName} from '..';
import {Colors} from '../../../constants';

export default function StatisticsBalanceComponent({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <StyledMasterLogoView style={{gap: 10}}>
      <StyledTextName style={{color: Colors.textgrey, marginTop: 0}}>
        {title}
      </StyledTextName>
      <StyledTextName style={{color: color, fontSize: 26, lineHeight: 26}}>
        {value}
      </StyledTextName>
    </StyledMasterLogoView>
  );
}
