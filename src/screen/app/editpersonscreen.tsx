import React from 'react';
import {EditPersonContainer} from '../../container';

export default function EditPersonScreen({
  navigation,
}: {
  navigation: {navigate: (val: string) => any; goBack: () => void};
}) {
  return <EditPersonContainer navigation={navigation} />;
}
