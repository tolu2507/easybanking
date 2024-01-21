import React from 'react';
import {SettingsContainer} from '../../container';

export default function SettingsScreen({
  navigation,
}: {
  navigation: {navigate: (val: string) => any; goBack: () => void};
}) {
  return <SettingsContainer navigation={navigation} />;
}
