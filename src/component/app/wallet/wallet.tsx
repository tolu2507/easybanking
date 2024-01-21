/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import {
  StyledSpendingLimit,
  StyledSpendingLimitText,
  StyledSpendingLimitView,
} from '..';
import React from 'react';
import {Slider} from 'react-native-awesome-slider';
import {Colors} from '../../../constants';
import {SPENDINGLIMIT} from '../../../interface/tabs/wallet';

export default function SpendingLimitView({
  mode,
  progress,
  min,
  max,
  setVal,
  price,
}: SPENDINGLIMIT) {
  const transformedPrice = `$ ${price}.00`;
  const color = mode === 'dark' ? Colors.textwhite : Colors.iconbackground;
  return (
    <StyledSpendingLimit>
      <StyledSpendingLimitText style={{color}}>
        Monthly spending limit
      </StyledSpendingLimitText>
      <StyledSpendingLimitView>
        <View style={{width: '100%'}}>
          <StyledSpendingLimitText
            style={{
              fontSize: 13,
              lineHeight: 13,
              fontWeight: '400',
              color: color,
            }}>
            Amount: {transformedPrice}
          </StyledSpendingLimitText>
        </View>
        <Slider
          style={{
            width: '100%',
            borderRadius: 8,
          }}
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          onValueChange={vals => setVal(vals)}
          theme={{
            maximumTrackTintColor:
              mode === 'dark' ? Colors.progress : Colors.textwhite,
            minimumTrackTintColor:
              mode === 'dark' ? Colors.textwhite : Colors.blueprimary,
            bubbleBackgroundColor: Colors.background,
          }}
        />
      </StyledSpendingLimitView>
    </StyledSpendingLimit>
  );
}
