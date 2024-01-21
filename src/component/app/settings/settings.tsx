import React from 'react';
import {
  StyledSettingsView,
  StyledSettingsViewEnd,
  StyledSpendingLimitTexts,
} from '..';
import {RightArrow} from '../../../assets/svg';

export default function SingleSettingsComponent({
  name,
  action,
  color,
}: {
  name: string;
  action: () => void;
  color: string;
}) {
  return (
    <StyledSettingsView>
      <StyledSpendingLimitTexts style={{color}}>
        {name}
      </StyledSpendingLimitTexts>
      <StyledSettingsViewEnd>
        {name === 'Language' && (
          <StyledSpendingLimitTexts>English</StyledSpendingLimitTexts>
        )}
        <RightArrow onPress={action} />
      </StyledSettingsViewEnd>
    </StyledSettingsView>
  );
}
