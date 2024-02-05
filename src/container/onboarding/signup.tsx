/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button} from '../../component/buttons';
import {Colors, Screens, signUpData} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {
  ButtomTextContainer,
  TextContainer,
} from '../../component/onboarding/style';
import {Alert, Text} from 'react-native';
import {OnboardInput} from '../../component/inputs';
import {INPUTS} from '../../interface/inputs/onboardingInput';
import {
  getInputAuth,
  setEmail,
  setName,
  setNumber,
  setPassword,
} from '../../store/features/onboarding/authSlice';
import {LayoutTemplate} from '../../templates/onboarding';
import {authenthecation} from '../../service';
import {LoadingComponent} from '../../component/app';
import encryptedDetails from '../../utils/storage';

export default function SignUpContainer({navigation}: any) {
  const mode = useSelector(getLanding);
  const dispatch = useDispatch();
  const {email, password, name, number} = useSelector(getInputAuth);
  const text = 'Sign Up';
  const buttomText = 'Already have an account. ';
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    console.log('starting.....', navigation);
    setLoading(!loading);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailResult = emailRegex.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const passwordResult = passwordRegex.test(password);
    if (emailResult && passwordResult) {
      await authenthecation.signUp(email, password).then(async res => {
        if (res) {
          Alert.alert(
            'success',
            'Congratulations on signing up to the app, enjoy!!!',
          );
          await authenthecation
            .updateInfo({
              displayName: name,
              photoUrl:
                'https://cdn.pixabay.com/photo/2016/10/25/22/22/roses-1770165_1280.png',
            })
            .then(async ress => {
              console.log('the value of res', ress);
              setLoading(!loading);
              return navigation.navigate(Screens.signin);
            });
        }
      });
    }
  }
  const button = (
    <Button
      buttonText={text}
      onClick={handleSignUp}
      backgroundColor={Colors.blueprimary}
      textColor={Colors.textwhite}
    />
  );

  const inputs: INPUTS[] = signUpData.map(item => {
    if (item.label === 'Email Address') {
      let res = {
        ...item,
        value: email,
        action: (val: string) => dispatch(setEmail(val)),
      };
      return res;
    } else if (item.label === 'Password') {
      let res = {
        ...item,
        value: password,
        action: (val: string) => dispatch(setPassword(val)),
      };
      return res;
    } else if (item.label === 'Full Name') {
      let res = {
        ...item,
        value: name,
        action: (val: string) => dispatch(setName(val)),
      };
      return res;
    } else if (item.label === 'Phone Number') {
      let res = {
        ...item,
        value: number,
        action: (val: string) => dispatch(setNumber(val)),
      };
      return res;
    } else {
      let res = {
        ...item,
        value: '',
        action: (val: string) => console.log('not registered ', val),
      };
      return res;
    }
  });

  let response = loading ? (
    <LoadingComponent />
  ) : (
    <LayoutTemplate
      button={button}
      text={
        <TextContainer
          style={{
            color: mode === 'dark' ? Colors.textwhite : Colors.iconbackground,
          }}>
          {text}
        </TextContainer>
      }
      buttomText={
        <ButtomTextContainer>
          {buttomText}
          <Text style={{color: Colors.blueprimary, fontWeight: '500'}}>
            {'Sign In'}
          </Text>
        </ButtomTextContainer>
      }
      input={<OnboardInput data={inputs} />}
      mode={mode}
    />
  );

  return response;
}
