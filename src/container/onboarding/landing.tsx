import {useSelector} from 'react-redux';
import {Onboarding} from '../../component';
import {Button} from '../../component/buttons';
import {Screens, landingData} from '../../constants';
import {Landing} from '../../interface/landing';
import {OnboardingTemplates} from '../../templates/onboarding';
import React, {useState} from 'react';
import {getLanding} from '../../store/features/onboarding/landingSlice';
const {Indicator, OnboardingDescription, OnboardingTitles} = Onboarding;

export default function Landings({navigation}: any) {
  const [data] = useState(landingData);
  const [view, setView] = useState<Landing>(data[0]);

  function clickUp(val: number) {
    if (val >= data.length) {
      console.log('finish, restarting.....', val);
      return navigation.navigate(Screens.signup);
    }
    console.log('hiii', val);
    setView(data[val]);
  }
  const mode = useSelector(getLanding);
  return (
    <OnboardingTemplates
      logo={view.logo}
      indicator={<Indicator data={data} items={view} />}
      title={
        <OnboardingTitles
          text={view.title}
          mode={mode}
          size={26}
          weight={'600'}
        />
      }
      description={<OnboardingDescription text={view.description} />}
      button={
        <Button
          buttonText={view.button.buttonText}
          onClick={() => clickUp(view.id)}
          backgroundColor={view.button.backgroundColor}
          textColor={view.button.textColor}
        />
      }
      mode={mode}
    />
  );
}
