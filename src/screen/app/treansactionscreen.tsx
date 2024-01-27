import React from 'react';
import {TransactionContainer} from '../../container';

export default function TransactionScreen({
  navigation,
}: {
  navigation: {navigate: (val: string) => any; goBack: () => void};
}) {
  return <TransactionContainer navigation={navigation} />;
}
