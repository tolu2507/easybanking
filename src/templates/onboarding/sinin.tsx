import React from 'react';
import {
  ButtomText,
  ButtonContainers,
  InputView,
  OnboardingButtonView,
  SafeAreaViewcontainer,
  SignTemplateContainer,
  SignTextContainer,
} from './styles';
import {AUTH} from '../../interface/templates/signtemplates';
import {Colors} from '../../constants';

export default function LayoutTemplate({
  button,
  text,
  buttomText,
  input,
  mode,
}: AUTH) {
  const colors = mode === 'light' ? Colors.textwhite : Colors.background;
  return (
    <SafeAreaViewcontainer style={{backgroundColor: colors}}>
      <SignTemplateContainer>
        {text ? text : <SignTextContainer />}
        {input ? (
          input
        ) : (
          <>
            <InputView />
            <InputView />
            <InputView />
            <InputView />
          </>
        )}
        <ButtonContainers>
          {button ? button : <OnboardingButtonView />}
          {buttomText ? buttomText : <ButtomText />}
        </ButtonContainers>
      </SignTemplateContainer>
    </SafeAreaViewcontainer>
  );
}
