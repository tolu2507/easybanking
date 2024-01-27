import React from 'react';
import {TabTemplates} from '../../templates';
import {
  AllCardComponent,
  SecondHeaderComponent,
  TabHomeBodyComponent,
} from '../../component/app';
import {Caretleft} from '../../assets/svg';
import {useDispatch, useSelector} from 'react-redux';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {Colors, Screens, newCardData, userData} from '../../constants';
import {OnboardInput} from '../../component/inputs';
import {
  getCardData,
  setCardNumber,
  setCardholder,
  setCvv,
  setDate,
} from '../../store/features/app/cards';
import {INPUTS} from '../../interface/inputs/onboardingInput';

export default function NewCardContainer({
  navigation,
}: {
  navigation: {
    navigate: (val: string) => any;
    goBack: () => void;
  };
}) {
  const screen = 'Add New Card';
  const dispatch = useDispatch();
  const {cardholder, cvv, cardnumber, date} = useSelector(getCardData);

  const inputs: INPUTS[] = newCardData.map(item => {
    if (item.label === 'Cardholder Name') {
      let res = {
        ...item,
        value: cardholder,
        action: (val: string) => dispatch(setCardholder(val)),
      };
      return res;
    } else if (item.label === 'Expiry Date') {
      let res = {
        ...item,
        value: date,
        action: (val: string) => dispatch(setDate(val)),
      };
      return res;
    } else if (item.label === 'CVV') {
      let res = {
        ...item,
        value: cvv,
        action: (val: string) => dispatch(setCvv(val)),
      };
      return res;
    } else {
      let res = {
        ...item,
        value: cardnumber,
        action: (val: string) => dispatch(setCardNumber(val)),
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
        <TabHomeBodyComponent
          cardnumber={cardnumber}
          date={date}
          cvv={cvv}
          holdername={cardholder}>
          <OnboardInput data={inputs} />
        </TabHomeBodyComponent>
      }
    />
  );
}
