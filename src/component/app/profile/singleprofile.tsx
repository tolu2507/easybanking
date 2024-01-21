import React, {ReactNode} from 'react';
import {
  StyledSettingsView,
  StyledSettingsViewEnd,
  StyledSpendingLimitTexts,
} from '..';
import {RightArrow} from '../../../assets/svg';

export default function SingleProfileComponent({
  name,
  action,
  color,
  logo,
}: {
  name: string;
  action: () => void;
  color: string;
  logo: ReactNode;
}) {
  return (
    <StyledSettingsView>
      <StyledSettingsViewEnd>
        {logo}
        <StyledSpendingLimitTexts style={{color}}>
          {name}
        </StyledSpendingLimitTexts>
      </StyledSettingsViewEnd>
      <StyledSettingsViewEnd>
        {name === 'Language' && (
          <StyledSpendingLimitTexts>English</StyledSpendingLimitTexts>
        )}
        <RightArrow onPress={action} />
      </StyledSettingsViewEnd>
    </StyledSettingsView>
  );
}
