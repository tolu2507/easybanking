/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SingleSettingsComponent, StyledSpendingLimitTexts} from '..';
import {View} from 'react-native';

export default function TabSettingsComponent({
  data,
  color,
  actions,
}: {
  data: {title: string; list: {name: string; action: () => void}[]}[];
  color: string;
  actions: (val: string) => void;
}) {
  return (
    <View>
      {data.map(({title, list}) => (
        <View style={{marginBottom: 32}} key={title}>
          <View style={{marginBottom: 20}}>
            <StyledSpendingLimitTexts>{title}</StyledSpendingLimitTexts>
          </View>
          {list.map(({name}) => (
            <SingleSettingsComponent
              key={name}
              name={name}
              action={() => actions(name)}
              color={color}
            />
          ))}
        </View>
      ))}
    </View>
  );
}
