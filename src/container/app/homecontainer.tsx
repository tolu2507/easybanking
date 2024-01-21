import React from 'react';
import {TabTemplates} from '../../templates';
import {TabHeaderComponent, TabHomeComponent} from '../../component/app';
import {Search} from '../../assets/svg';
import {useSelector} from 'react-redux';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {Colors, data} from '../../constants';

export default function HomeContainer() {
  const mode = useSelector(getLanding);
  let color = mode === 'dark' ? Colors.textwhite : Colors.iconbackground;
  const url =
    'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg';
  function handleClicks(val: string) {
    console.log('this is fun from, ', val);
  }

  return (
    <TabTemplates
      head={
        <TabHeaderComponent
          icon={<Search onPress={() => handleClicks('search')} />}
          image={url}
          name={'Tanya Myroniuk'}
        />
      }
      body={
        <TabHomeComponent
          cardnumber={'4562112245957852'}
          date={'24/2000'}
          cvv={'6986'}
          holdername={'AR Jonson'}
          sent={() => handleClicks('sent')}
          receive={() => handleClicks('receive')}
          loan={() => handleClicks('loan')}
          topup={() => handleClicks('topup')}
          color={color}
          data={data}
        />
      }
    />
  );
}
