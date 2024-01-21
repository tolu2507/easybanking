import React from 'react';
import {ButtonContainer, ButtonText} from './style';
import {BUTTONS} from '../../interface/button/button';

export default function Button({
  buttonText,
  onClick,
  backgroundColor,
  textColor,
}: BUTTONS) {
  return (
    <ButtonContainer
      android_ripple={{color: '#000'}}
      style={{backgroundColor: backgroundColor}}
      onPress={onClick}>
      <ButtonText style={{color: textColor}}>{buttonText}</ButtonText>
    </ButtonContainer>
  );
}
