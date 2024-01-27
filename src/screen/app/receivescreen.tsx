import React from 'react';
import {ReceiveContainer} from '../../container';

export default function ReceiveScreen({
  navigation,
}: {
  navigation: {navigate: (val: string) => any; goBack: () => void};
}) {
  return <ReceiveContainer navigation={navigation} />;
}
