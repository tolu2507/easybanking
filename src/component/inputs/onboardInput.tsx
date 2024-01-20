/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {INPUTS} from '../../interface/inputs/onboardingInput';
import {TextInput} from 'react-native';
import {Eye} from '../../assets/svg';
import {Colors} from '../../constants';
import {Input, InputBox, InputContainer, InputText} from '.';
import {useSelector} from 'react-redux';
import {getOnboarding} from '../../store/features/onboarding/onboardingslice';

function OnboardInput({
  icon,
  secured,
  label,
  value,
  action,
  placeholder,
  securedAction,
}: INPUTS) {
  const mode = useSelector(getOnboarding);
  return (
    <InputContainer>
      <InputText>{label}</InputText>
      <Input>
        {icon}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={action}
          style={{
            flex: 1,
            color: mode === 'dark' ? Colors.textwhite : Colors.background,
          }}
          placeholderTextColor={Colors.textgrey}
          secureTextEntry={secured}
        />
        {secured && <Eye width={22} height={22} onPress={securedAction} />}
      </Input>
    </InputContainer>
  );
}

export default function OnboardInputContainer({data}: {data: INPUTS[]}) {
  return (
    <InputBox>
      {data.map(items => (
        <OnboardInput
          key={items.label}
          label={items.label}
          icon={items.icon}
          placeholder={items.placeholder}
          value={items.value}
          action={items.action}
          secured={items.secured}
          securedAction={
            items.secured
              ? items.securedAction
              : () => console.log('hello world')
          }
        />
      ))}
    </InputBox>
  );
}
