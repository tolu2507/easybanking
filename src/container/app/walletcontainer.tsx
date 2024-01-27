import React, {useState} from 'react';
import {TabTemplates} from '../../templates';
import {SecondHeaderComponent, TabWalletComponent} from '../../component/app';
import {useSelector} from 'react-redux';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {Colors, Screens, data} from '../../constants';
import {Caretleft, Plus} from '../../assets/svg';
import {useSharedValue} from 'react-native-reanimated';

export default function WalletContainer({
  navigation,
}: {
  navigation: {
    navigate: (val: string) => void;
    goBack: () => void;
  };
}) {
  const mode = useSelector(getLanding);
  let color = mode === 'dark' ? Colors.textwhite : Colors.iconbackground;
  const screen = 'MyCards';
  function handleClicks(val: string) {
    console.log('this is fun from, ', val);
    if (val === 'back') {
      return navigation.goBack();
    } else {
      return navigation.navigate(Screens.all);
    }
  }
  const datas = [data[0], data[1], data[2]];
  const progress = useSharedValue(10);
  const min = useSharedValue(0);
  const max = useSharedValue(100);
  const [val, setVal] = useState(0);

  return (
    <TabTemplates
      head={
        <SecondHeaderComponent
          icon2={<Caretleft onPress={() => handleClicks('back')} />}
          icon={<Plus onPress={() => handleClicks('plus')} />}
          name={screen}
        />
      }
      body={
        <TabWalletComponent
          cardnumber={'4562112245957852'}
          date={'24/2000'}
          cvv={'6986'}
          holdername={'AR Jonson'}
          color={color}
          data={datas}
          action={() => handleClicks('seen alll don it all !!!!')}
          mode={mode}
          progress={progress}
          min={min}
          max={max}
          setVal={setVal}
          price={8545}
        />
      }
    />
  );
}
