/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {BodyContainer} from '../../../templates/features';
import {Mastercard} from '..';
import {Button} from '../../buttons';
import {Colors} from '../../../constants';
import {View} from 'react-native';
import {StyledView} from '../../onboarding/style';

export default function AllCardComponent({
  data,
  action,
  color,
}: {
  data: {
    cardnumber: string;
    date: string;
    cvv: string;
    holdername: string;
  }[];
  action: () => void;
  color: string;
}) {
  return (
    <BodyContainer className=" relative">
      {data.map(({cardnumber, date, cvv, holdername}) => (
        <View style={{marginBottom: 30}}>
          <Mastercard
            key={cardnumber}
            cardnumber={cardnumber}
            date={date}
            cvvnumber={cvv}
            holdername={holdername}
          />
        </View>
      ))}
      <StyledView className="mt-10">
        <Button
          buttonText={'Add Card + '}
          onClick={action}
          backgroundColor={Colors.blueprimary}
          textColor={color}
        />
      </StyledView>
    </BodyContainer>
  );
}
