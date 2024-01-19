import {Text, View} from 'react-native';
import React from 'react';
import {styled} from 'nativewind';

const StyledView = styled(View, 'flex items-center justify-center');
const StyledText = styled(
  Text,
  ' text-center text-[26px] leading-normal text-textwhite font-[600] font-poppings',
);

export default function OnboardingTitles({
  text,
  mode,
}: {
  text: string;
  mode: 'light' | 'dark';
}) {
  let color = mode === 'light' ? '#1E1E2D' : '#ffffff';
  return (
    <StyledView>
      <StyledText style={{color: color}}>{text}</StyledText>
    </StyledView>
  );
}
