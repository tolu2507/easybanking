import React from 'react';
import {AllCardContainer} from '../../container';

export default function AllCardScreen({
  navigation,
}: {
  navigation: {navigate: (val: string) => any; goBack: () => void};
}) {
  return <AllCardContainer navigation={navigation} />;
}
