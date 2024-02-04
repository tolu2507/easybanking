import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {Colors} from '../../../constants';
import {StyledView} from '../../onboarding/style';

export default function LoadingComponent() {
  return (
    <StyledView className=" flex-1 ">
      <ActivityIndicator
        animating={true}
        color={Colors.tabicon}
        size={'large'}
      />
    </StyledView>
  );
}
