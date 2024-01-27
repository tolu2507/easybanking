import React from 'react';
import {WalletContainer} from '../../container';

export default function WalletScreen({
  navigation,
}: {
  navigation: {
    navigate: (val: string) => void;
    goBack: () => void;
  };
}) {
  return <WalletContainer navigation={navigation} />;
}
