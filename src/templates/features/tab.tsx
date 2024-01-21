import React, {ReactNode} from 'react';
import {SafeAreaViewcontainer} from '../onboarding/styles';
import {useSelector} from 'react-redux';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {Ellipse} from '../../assets/svg';
import {
  ActionContainer,
  BodyContainer,
  CardContainer,
  EllipseContainerStyle,
  HeaderContainer,
  RemainerContainer,
  getMode,
} from '.';

export default function TabTemplates({
  head,
  body,
}: {
  head: ReactNode;
  body: ReactNode;
}) {
  const mode = useSelector(getLanding);
  const backgroundColor: any = getMode(mode);
  return (
    <SafeAreaViewcontainer style={backgroundColor}>
      <EllipseContainerStyle>
        <Ellipse width={270} height={360} />
      </EllipseContainerStyle>
      {head ? head : <HeaderContainer />}
      {body ? (
        body
      ) : (
        <BodyContainer>
          <CardContainer />
          <ActionContainer />
          <RemainerContainer />
        </BodyContainer>
      )}
    </SafeAreaViewcontainer>
  );
}
