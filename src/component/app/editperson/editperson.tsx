/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyledHeader, StyledImage, StyledTextName, StyledTextSmall} from '..';
import {View} from 'react-native';
import {OnboardInput} from '../../inputs';
import {INPUTS} from '../../../interface/inputs/onboardingInput';

export default function EditPersonComponent({
  data,
  color,
  image,
  name,
  position,
}: {
  data: INPUTS[];
  color: string;
  image: any;
  name: string;
  position: string;
}) {
  let images = require('../../../assets/image/person.png');
  const img = {uri: image};
  let imageUpdater = image ? img : images;

  return (
    <View style={{position: 'relative', flex: 1}}>
      <View style={{marginBottom: 30}}>
        <StyledHeader className="flex-col mb-0">
          <StyledImage
            source={imageUpdater}
            style={{width: 90, height: 90, marginBottom: 21}}
          />
          <StyledTextName style={{color: color, marginBottom: 10}}>
            {name}
          </StyledTextName>
          <StyledTextSmall>{position}</StyledTextSmall>
        </StyledHeader>
      </View>
      <OnboardInput data={data} />
      <StyledTextSmall className=" absolute bottom-20 left-1/3">
        {'Joined 28th January 2024'}
      </StyledTextSmall>
    </View>
  );
}
