/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {
  SingleProfileComponent,
  StyledHeader,
  StyledImage,
  StyledTextName,
  StyledTextSmall,
  StyledTextView,
} from '..';
import {View} from 'react-native';

export default function ProfileComponent({
  data,
  color,
  actions,
  image,
  name,
  position,
}: {
  data: {name: string; logo: ReactNode}[];
  color: string;
  actions: (val: string) => void;
  image: any;
  name: string;
  position: string;
}) {
  let images = require('../../../assets/image/person.png');
  const img = {uri: image};
  let imageUpdater = image ? img : images;
  return (
    <View>
      <View style={{marginBottom: 36}}>
        <StyledHeader className="items-start mb-0">
          <StyledImage source={imageUpdater} style={{width: 70, height: 70}} />
          <StyledTextView className=" ml-6">
            <StyledTextName style={{color: color, marginBottom: 10}}>
              {name}
            </StyledTextName>
            <StyledTextSmall>{position}</StyledTextSmall>
          </StyledTextView>
        </StyledHeader>
      </View>
      {data.map(({name: n, logo}) => (
        <SingleProfileComponent
          key={n}
          name={n}
          action={() => actions(n)}
          color={color}
          logo={logo}
        />
      ))}
    </View>
  );
}
