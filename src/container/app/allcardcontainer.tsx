import React from 'react';
import {TabTemplates} from '../../templates';
import {AllCardComponent, SecondHeaderComponent} from '../../component/app';
import {Caretleft} from '../../assets/svg';
import {useSelector} from 'react-redux';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {Colors, Screens} from '../../constants';
import {CARDS, getCardDatas} from '../../store/features/app/cards';

export default function AllCardContainer({
  navigation,
}: {
  navigation: {
    navigate: (val: string) => any;
    goBack: () => void;
  };
}) {
  const mode = useSelector(getLanding);
  let color = mode === 'dark' ? Colors.textwhite : Colors.iconbackground;
  const screen = 'All Cards';

  const data: CARDS[] = useSelector(getCardDatas);

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
        <AllCardComponent
          data={data}
          action={() => navigation.navigate(Screens.newcard)}
          color={color}
        />
      }
    />
  );
}
