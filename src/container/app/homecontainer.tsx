import React from 'react';
import {TabTemplates} from '../../templates';
import {TabHeaderComponent, TabHomeComponent} from '../../component/app';
import {Search} from '../../assets/svg';
import {useSelector} from 'react-redux';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {Colors, Screens, data} from '../../constants';
import {getOnboarding} from '../../store/features/onboarding/onboardingslice';
import {ONBOARD} from '../../interface/onboarding';

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
          cardnumber={'456211224595785'}
          date={'24/2000'}
          cvv={'6986'}
          holdername={'AR Jonson'}
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
