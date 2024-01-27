import React from 'react';
import {HomeContainer} from '../../container';

export default function HomeScreen({
  navigation,
}: {
  navigation: {
    navigate: (val: string) => any;
    goBack: () => void;
  };
}) {
  return <HomeContainer navigation={navigation} />;
}
