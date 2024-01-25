/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {StyledHeader, StyledIcon, StyledTextName, StyledTextView} from '..';
import {useSelector} from 'react-redux';
import {getLanding} from '../../../store/features/onboarding/landingSlice';
import {Colors} from '../../../constants';

export default function SecondHeaderComponent({
  icon,
  icon2,
  name,
}: {
  icon: ReactNode;
  icon2: ReactNode;
  name: string;
}) {
  const mode = useSelector(getLanding);
  const collor = mode === 'dark' ? Colors.textwhite : Colors.background;
  const color = mode === 'dark' ? Colors.linestroke : Colors.description;

  return (
    <StyledHeader>
      <StyledIcon style={{backgroundColor: color}}>{icon2}</StyledIcon>
      <StyledTextView>
        <StyledTextName style={{color: collor, textAlign: 'center'}}>
          {name}
        </StyledTextName>
      </StyledTextView>
      <StyledIcon style={{backgroundColor: icon !== undefined ? color : ''}}>
        {icon}
      </StyledIcon>
    </StyledHeader>
  );
}
