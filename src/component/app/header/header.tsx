import React, {ReactNode} from 'react';
import {
  StyledHeader,
  StyledIcon,
  StyledImage,
  StyledTextName,
  StyledTextSmall,
  StyledTextView,
} from '..';
import {useSelector} from 'react-redux';
import {getLanding} from '../../../store/features/onboarding/landingSlice';
import {Colors} from '../../../constants';

export default function TabHeaderComponent({
  icon,
  image,
  name,
}: {
  icon: ReactNode;
  image: string;
  name: string;
}) {
  const mode = useSelector(getLanding);
  const collor = mode === 'dark' ? Colors.textwhite : Colors.background;
  const color = mode === 'dark' ? Colors.linestroke : Colors.description;
  const images = require('../../../assets/image/person.png');
  const img = {uri: image};
  let imageUpdater = image !== '' ? img : images;
  return (
    <StyledHeader>
      <StyledImage source={imageUpdater} width={50} height={50} />
      <StyledTextView>
        <StyledTextSmall>{'Welcome  back,'}</StyledTextSmall>
        <StyledTextName style={{color: collor}}>{name}</StyledTextName>
      </StyledTextView>
      <StyledIcon style={{backgroundColor: color}}>{icon}</StyledIcon>
    </StyledHeader>
  );
}
