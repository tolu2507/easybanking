import {Text, View} from 'react-native';
import React from 'react';
import {styled} from 'nativewind';

const StyledView = styled(View, 'flex items-center justify-center w-[270px]');
const StyledText = styled(
  Text,
  ' text-center text-md leading-normal text-description font-normal font-poppings',
);

export default function OnboardingDescription({text}: {text: string}) {
  return (
    <StyledView>
      <StyledText>{text}</StyledText>
    </StyledView>
  );
}
