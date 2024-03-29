/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button} from '../../component/buttons';
import {Colors, signInData} from '../../constants';
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
  setPassword,
} from '../../store/features/onboarding/authSlice';
import {changeState} from '../../store/features/onboarding/onboardingslice';
import {LayoutTemplate} from '../../templates/onboarding';
import {authenthecation} from '../../service';
import {ONBOARD} from '../../interface/onboarding';
import {LoadingComponent} from '../../component/app';
import encryptedDetails from '../../utils/storage';

export default function SignInContainer({navigation}: any) {
  const mode = useSelector(getLanding);
  const dispatch = useDispatch();
  const {email, password} = useSelector(getInputAuth);
  const text = 'Sign In';
  const buttomText = "I'm a new user.  ";
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    console.log('starting.....', navigation);
    setLoading(!loading);
    let profile = await encryptedDetails.getSingleItem('profile');
    console.log('profile values is this =>> ', profile);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailResult = emailRegex.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const passwordResult = passwordRegex.test(password);
    if (emailResult && passwordResult) {
      await authenthecation.signIn(email, password).then(async res => {
        if (res) {
          Alert.alert(
            'success',
            'Congratulations on signingg in to the app, enjoy!!!',
          );
          dispatch(setPassword(''));
          let details: ONBOARD = {
            displayName: res.displayName,
            email: res.email,
            emailVerified: res.emailVerified,
            phoneNumber: res.phoneNumber,
            photoURL: res.photoURL,
            providerId: res.providerId,
            tenantId: res.isAnonymous,
            uid: res.uid,
          };
          setLoading(!loading);
          await encryptedDetails.setItems('profile', JSON.stringify(res));
          return dispatch(changeState(details));
        }
      });
    }
  }
  const button = (
    <Button
      buttonText={text}
      onClick={handleSignIn}
      backgroundColor={Colors.blueprimary}
      textColor={Colors.textwhite}
    />
  );

  const inputs: INPUTS[] = signInData.map(item => {
    if (item.label === 'Email Address') {
      let res = {
        ...item,
        value: email,
        action: (val: string) => dispatch(setEmail(val)),
      };
      return res;
    } else {
      let res = {
        ...item,
        value: password,
        action: (val: string) => dispatch(setPassword(val)),
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
            {'Sign Up'}
          </Text>
        </ButtomTextContainer>
      }
      input={<OnboardInput data={inputs} />}
      mode={mode}
    />
  );

  return response;
}
