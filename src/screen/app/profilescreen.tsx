import React from 'react';
import {ProfileContainer} from '../../container';

export default function ProfileScreen({
  navigation,
}: {
  navigation: {navigate: (val: string) => any; goBack: () => void};
}) {
  return <ProfileContainer navigation={navigation} />;
}
