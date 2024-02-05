import React from 'react';
import {TabTemplates} from '../../templates';
import {SecondHeaderComponent, TransactionComponent} from '../../component/app';
import {Caretleft} from '../../assets/svg';
import {useSelector} from 'react-redux';
import {Colors, data} from '../../constants';
import {getLanding} from '../../store/features/onboarding/landingSlice';

export default function TransactionContainer({
  navigation,
}: {
  navigation: {
    navigate: (val: string) => any;
    goBack: () => void;
  };
}) {
  const screen = 'Transaction History';
  const mode = useSelector(getLanding);
  let color = mode === 'dark' ? Colors.textwhite : Colors.iconbackground;
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
        <TransactionComponent
          color={color}
          data={data}
          action={() => console.log('non existence')}
          headerShown={false}
        />
      }
    />
  );
}
