import {View} from 'react-native';
import React from 'react';
import {styled} from 'nativewind';
import {Landing} from '../../interface/landing';

const StyledView = styled(
  View,
  'w-[6px] h-[6px] rounded-full bg-indicator mr-2',
);
const StyledSelectedView = styled(
  View,
  'w-5 h-[6px] rounded-full bg-blueprimary mr-2',
);
const StyleyIndicatorView = styled(View, 'flex-row ');

function Indicator({selected}: {selected: boolean}) {
  return selected ? <StyledSelectedView /> : <StyledView />;
}
export default function Indicators({
  data,
  items,
}: {
  data: Landing[];
  items: Landing;
}) {
  return (
    <StyleyIndicatorView>
      {data.map((item, index) => {
        if (item.id === items.id) {
          return <Indicator key={index} selected={true} />;
        } else {
          return <Indicator key={index} selected={false} />;
        }
      })}
    </StyleyIndicatorView>
  );
}
