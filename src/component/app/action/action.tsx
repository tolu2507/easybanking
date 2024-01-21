import React from 'react';
import {
  LoanDark,
  ReceiveDark,
  SentDark,
  TopupDark,
  LoanLight,
  ReceiveLight,
  SentLight,
  TopupLight,
} from '../../../assets/svg';
import {StyledActionView} from '..';
import {useSelector} from 'react-redux';
import {getLanding} from '../../../store/features/onboarding/landingSlice';
import {ACTIONS} from '../../../interface/tabs/actions';

export default function ActionComponent({sent, receive, loan, topup}: ACTIONS) {
  const mode = useSelector(getLanding);
  const views =
    mode === 'dark' ? (
      <StyledActionView>
        <SentDark onPress={sent} />
        <ReceiveDark onPress={receive} />
        <LoanDark onPress={loan} />
        <TopupDark onPress={topup} />
      </StyledActionView>
    ) : (
      <StyledActionView>
        <SentLight onPress={sent} />
        <ReceiveLight onPress={receive} />
        <LoanLight onPress={loan} />
        <TopupLight onPress={topup} />
      </StyledActionView>
    );
  return views;
}
