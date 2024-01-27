import React from 'react';
import {SendContainer} from '../../container';

export default function SendScreen({
  navigation,
}: {
  navigation: {navigate: (val: string) => any; goBack: () => void};
}) {
  return <SendContainer navigation={navigation} />;
}
