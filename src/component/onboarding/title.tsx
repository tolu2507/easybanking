import React from 'react';
import {Colors} from '../../constants';
import {StyledText, StyledView} from './style';

export default function OnboardingTitles({
  text,
  mode,
  size,
  weight,
}: {
  text: string;
  mode: 'light' | 'dark';
  size: number;
  weight:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}) {
  let color = mode === 'light' ? Colors.iconbackground : Colors.textwhite;

  return (
    <StyledView>
      <StyledText style={{color: color, fontSize: size, fontWeight: weight}}>
        {text}
      </StyledText>
    </StyledView>
  );
}
