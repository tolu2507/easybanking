/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';
import {StyledTextName, StyledTransactionView} from '..';
import {Colors} from '../../../constants';
import {SingleTransaction} from '.';
import {SINGLE} from '../../../interface/tabs/single';

export default function TransactionComponent({
  color,
  data,
  action,
  headerShown,
}: {
  color: string;
  data: SINGLE[];
  action: () => void;
  headerShown: boolean;
}) {
  return (
    <View>
      {headerShown === true && (
        <StyledTransactionView>
          <StyledTextName style={{color: color}}>Transactions</StyledTextName>
          <StyledTextName
            onPress={action}
            style={{color: Colors.blueprimary, fontSize: 14}}>
            See All
          </StyledTextName>
        </StyledTransactionView>
      )}
      <FlatList
        data={data}
        renderItem={({
          item: {price, company, logo, category, transactionAction, id},
        }) => (
          <SingleTransaction
            price={price}
            company={company}
            logo={logo}
            category={category}
            transactionAction={transactionAction}
            id={id}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}
