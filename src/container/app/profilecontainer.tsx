import React from 'react';
import {TabTemplates} from '../../templates';
import {ProfileComponent, SecondHeaderComponent} from '../../component/app';
import {Caretleft, EditPerson} from '../../assets/svg';
import {useSelector} from 'react-redux';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {Colors, Screens, list} from '../../constants';

export default function ProfileContainer({
  navigation,
}: {
  navigation: {
    navigate: (val: string) => any;
    goBack: () => void;
  };
}) {
  const mode = useSelector(getLanding);
  let color = mode === 'dark' ? Colors.textwhite : Colors.iconbackground;
  const screen = 'Profile';

  function handleNavigate(val: string) {
    console.log(`navigating to the ${val} page!!!`);
    return navigation.navigate(val);
  }

  return (
    <TabTemplates
      head={
        <SecondHeaderComponent
          icon2={<Caretleft onPress={() => navigation.goBack()} />}
          icon={<EditPerson onPress={() => handleNavigate(Screens.edit)} />}
          name={screen}
        />
      }
      body={
        <ProfileComponent
          data={list}
          color={color}
          actions={handleNavigate}
          image={undefined}
          name={'Tanya Myroniuk'}
          position={'Senior Designer'}
        />
      }
    />
  );
}
