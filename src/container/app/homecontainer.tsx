/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {TabTemplates} from '../../templates';
import {TabHeaderComponent, TabHomeComponent} from '../../component/app';
import {Search} from '../../assets/svg';
import {useDispatch, useSelector} from 'react-redux';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {Colors, Screens, data} from '../../constants';
import {getOnboarding} from '../../store/features/onboarding/onboardingslice';
import {ONBOARD} from '../../interface/onboarding';
import {CARDS, setCards} from '../../store/features/app/cards';
import {cardsCollection} from '../../utils/firestore';
import {
  getCardData,
  setCardNumber,
  setCardholder,
  setCvv,
  setDate,
} from '../../store/features/app/card';

export default function HomeContainer({
  navigation,
}: {
  navigation: {
    navigate: (val: string) => any;
    goBack: () => void;
  };
}) {
  const mode = useSelector(getLanding);
  const profile: ONBOARD = useSelector(getOnboarding);
  const dispatch = useDispatch();
  const card: CARDS = useSelector(getCardData);
  let color = mode === 'dark' ? Colors.textwhite : Colors.iconbackground;
  const url =
    profile.photoURL ??
    'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg';
  function handleClicks(val: string) {
    console.log('this is fun from, ', val);
    if (val === 'search') {
      return navigation.navigate(Screens.search);
    }
    if (val === 'transactions') {
      return navigation.navigate(Screens.transactions);
    }
    if (val === 'sent') {
      return navigation.navigate(Screens.send);
    }
    if (val === 'receive') {
      return navigation.navigate(Screens.receive);
    }
    // if (val === 'loan') {
    //   return navigation.navigate(Screens.);
    // }
    // if (val === 'sent') {
    //   return navigation.navigate(Screens.send);
    // }
  }

  useEffect(() => {
    return cardsCollection.onSnapshot(querySnapshot => {
      const list: CARDS[] = [];
      querySnapshot.forEach(doc => {
        const {cardholder, date, cvv, cardnumber} = doc.data();
        list.push({id: doc.id, cardholder, date, cvv, cardnumber});
      });
      dispatch(setCards(list));
      let cardss = list[0];
      dispatch(setCardholder(cardss?.cardholder));
      dispatch(setCardNumber(cardss?.cardnumber));
      dispatch(setDate(cardss?.date));
      dispatch(setCvv(cardss?.cvv));
    });
  }, []);

  return (
    <TabTemplates
      head={
        <TabHeaderComponent
          icon={<Search onPress={() => handleClicks(Screens.search)} />}
          image={url}
          name={profile.displayName ?? 'Enter a Name'}
        />
      }
      body={
        <TabHomeComponent
          cardnumber={card?.cardnumber}
          date={card?.date}
          cvv={card?.cvv}
          holdername={card?.cardholder}
          sent={() => handleClicks('sent')}
          receive={() => handleClicks('receive')}
          loan={() => handleClicks('loan')}
          topup={() => handleClicks('topup')}
          color={color}
          data={data}
          action={() => handleClicks(Screens.transactions)}
        />
      }
    />
  );
}
