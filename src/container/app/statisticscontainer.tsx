import React, {useState} from 'react';
import {TabTemplates} from '../../templates';
import {SecondHeaderComponent} from '../../component/app';
import {Bell, Caretleft} from '../../assets/svg';
import {useSelector} from 'react-redux';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {Colors, data} from '../../constants';
import {TabStatisticsComponent} from '../../component/app/home';
import {STATISTICS} from '../../interface/tabs/statistics';

export default function StatisticsContainer() {
  const mode = useSelector(getLanding);
  const [month, setMonth] = useState<STATISTICS['month']>('Jan');
  let color = mode === 'dark' ? Colors.textwhite : Colors.iconbackground;
  const screen = 'Statistics';
  function handleClicks(val: string) {
    console.log('this is fun from, ', val);
  }

  return (
    <TabTemplates
      head={
        <SecondHeaderComponent
          icon2={<Caretleft onPress={() => handleClicks('back')} />}
          icon={<Bell onPress={() => handleClicks('notification')} />}
          name={screen}
        />
      }
      body={
        <TabStatisticsComponent
          title={'Current Balance'}
          value={'$8,545.00'}
          color={color}
          data={data}
          action={() => handleClicks('seen alll don it all !!!!')}
          month={month}
          setMonth={setMonth}
        />
      }
    />
  );
}
