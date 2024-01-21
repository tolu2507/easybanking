/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {StyledTextName, StyledTransactionView} from '..';
import {Colors} from '../../../constants';
import {SingleTransaction} from '.';
import {SINGLE} from '../../../interface/tabs/single';

export default function TransactionComponent({
  color,
  data,
}: {
  color: string;
  data: SINGLE[];
}) {
  return (
    <View>
      <StyledTransactionView>
        <StyledTextName style={{color: color}}>Transactions</StyledTextName>
        <StyledTextName style={{color: Colors.blueprimary, fontSize: 14}}>
          See All
        </StyledTextName>
      </StyledTransactionView>
      {data?.map(({price, company, logo, category}, index) => (
        <SingleTransaction
          key={index}
          price={price}
          company={company}
          logo={logo}
          category={category}
        />
      ))}
    </View>
  );
}
