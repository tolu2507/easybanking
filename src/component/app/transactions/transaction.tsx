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
  action,
}: {
  color: string;
  data: SINGLE[];
  action: () => void;
}) {
  return (
    <View>
      <StyledTransactionView>
        <StyledTextName style={{color: color}}>Transactions</StyledTextName>
        <StyledTextName
          onPress={action}
          style={{color: Colors.blueprimary, fontSize: 14}}>
          See All
        </StyledTextName>
      </StyledTransactionView>
      {data?.map(
        ({price, company, logo, category, transactionAction}, index) => (
          <SingleTransaction
            key={index}
            price={price}
            company={company}
            logo={logo}
            category={category}
            transactionAction={transactionAction}
          />
        ),
      )}
    </View>
  );
}
