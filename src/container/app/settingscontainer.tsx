import React from 'react';
import {TabTemplates} from '../../templates';
import {SecondHeaderComponent} from '../../component/app';
import {Caretleft, Door} from '../../assets/svg';
import {useDispatch, useSelector} from 'react-redux';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {Colors, settingsData} from '../../constants';
import {TabSettingsComponent} from '../../component/app/home';
import {changeState} from '../../store/features/onboarding/onboardingslice';

export default function SettingsContainer({
  navigation,
}: {
  navigation: {
    navigate: (val: string) => any;
    goBack: () => void;
  };
}) {
  const dispatch = useDispatch();
  const mode = useSelector(getLanding);
  let color = mode === 'dark' ? Colors.textwhite : Colors.iconbackground;
  const screen = 'Settings';
  function handleClicks(val: string) {
    console.log('this is fun from, ', val);
    return dispatch(changeState(true));
  }
  function handleNavigate(val: string) {
    console.log(`navigating to the ${val} page!!!`);
    return navigation.navigate(val);
  }

  return (
    <TabTemplates
      head={
        <SecondHeaderComponent
          icon2={<Caretleft onPress={() => navigation.goBack()} />}
          icon={<Door onPress={() => handleClicks('get out')} />}
          name={screen}
        />
      }
      body={
        <TabSettingsComponent
          data={settingsData}
          color={color}
          actions={handleNavigate}
        />
      }
    />
  );
}
