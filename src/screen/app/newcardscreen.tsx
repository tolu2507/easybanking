import React from 'react';
import {NewCardContainer} from '../../container';

export default function NewCardScreen({
  navigation,
}: {
  navigation: {navigate: (val: string) => any; goBack: () => void};
}) {
  return <NewCardContainer navigation={navigation} />;
}
