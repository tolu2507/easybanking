import React from 'react';
import {TabTemplates} from '../../templates';
import {EditPersonComponent, SecondHeaderComponent} from '../../component/app';
import {Caretleft} from '../../assets/svg';
import {useDispatch, useSelector} from 'react-redux';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {Colors, userData} from '../../constants';
import {
  getInputAuth,
  setEmail,
  setName,
  setNumber,
} from '../../store/features/onboarding/authSlice';
import {INPUTS} from '../../interface/inputs/onboardingInput';

export default function EditPersonContainer({
  navigation,
}: {
  navigation: {
    navigate: (val: string) => any;
    goBack: () => void;
  };
}) {
  const mode = useSelector(getLanding);
  let color = mode === 'dark' ? Colors.textwhite : Colors.iconbackground;
  const screen = 'Edit Profile';

  const dispatch = useDispatch();
  const {email, name: names, number} = useSelector(getInputAuth);

  const inputs: INPUTS[] = userData.map(item => {
    if (item.label === 'Email Address') {
      let res = {
        ...item,
        value: email,
        action: (val: string) => dispatch(setEmail(val)),
      };
      return res;
    } else if (item.label === 'Full Name') {
      let res = {
        ...item,
        value: names,
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

  return (
    <TabTemplates
      head={
        <SecondHeaderComponent
          icon2={<Caretleft onPress={() => navigation.goBack()} />}
          icon={undefined}
          name={screen}
        />
      }
      body={
        <EditPersonComponent
          data={inputs}
          color={color}
          image={undefined}
          name={'Tanya Myroniuk'}
          position={'Senior Designer'}
        />
      }
    />
  );
}
