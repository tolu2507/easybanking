import React from 'react';
import {SearchContainer} from '../../container';

export default function SearchScreen({
  navigation,
}: {
  navigation: {navigate: (val: string) => any; goBack: () => void};
}) {
  return <SearchContainer navigation={navigation} />;
}
