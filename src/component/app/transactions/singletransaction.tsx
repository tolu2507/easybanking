/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyledAlternateView,
  StyledCardNumberText,
  StyledCardViewTop,
  StyledIcon,
  StyledImage,
  StyledTextName,
  StyledTransactionCard,
} from '..';
import {View} from 'react-native';
import {Colors} from '../../../constants';
import {SINGLE} from '../../../interface/tabs/single';
import {useSelector} from 'react-redux';
import {getLanding} from '../../../store/features/onboarding/landingSlice';

export default function SingleTransaction({
  price,
  company,
  logo,
  category,
}: SINGLE) {
  const mode = useSelector(getLanding);
  let color =
    +price > 0
      ? Colors.blueprimary
      : mode === 'dark'
      ? Colors.textwhite
      : Colors.background;
  let transformedPrice = +price > 0 ? '$ ' + price : `- $ ${price.slice(1)}`;
  return (
    <StyledCardViewTop
      style={{marginBottom: 22}}
      android_ripple={{color: Colors.background}}>
      <StyledTransactionCard>
        <StyledIcon>
          {logo ? (
            <StyledImage
              style={{width: 20, height: 20, backgroundColor: color}}
              source={{uri: logo}}
            />
          ) : (
            <StyledAlternateView style={{backgroundColor: color}} />
          )}
        </StyledIcon>
        <View>
          <StyledCardNumberText
            style={{fontWeight: '500', fontSize: 16, color: color}}>
            {company}
          </StyledCardNumberText>
          <StyledCardNumberText
            style={{color: Colors.description, fontSize: 12}}>
            {category}
          </StyledCardNumberText>
        </View>
      </StyledTransactionCard>
      <StyledTextName style={{fontSize: 18, lineHeight: 18, color: color}}>
        {transformedPrice}
      </StyledTextName>
    </StyledCardViewTop>
  );
}
