import {View} from 'react-native';
import React from 'react';
import {ONBOARDINGTEMPLATE} from '../../interface/templates/onboardingtemplate';
import {
  OnboardingButtonView,
  OnboardingDescriptionView,
  OnboardingIndicatorContainer,
  OnboardingLogoContainer,
  OnboardingTemplateBottomContainer,
  OnboardingTemplateContainer,
  OnboardingTemplateTopContainer,
  OnboardingTextView,
  OnboardingTitleView,
} from './styles';

export default function OnboardingTemplates({
  logo,
  indicator,
  title,
  description,
  button,
  mode,
}: ONBOARDINGTEMPLATE) {
  const colors = mode === 'light' ? '#ffffff' : '#161622';
  return (
    <OnboardingTemplateContainer style={{backgroundColor: colors}}>
      <View>
        <OnboardingTemplateTopContainer>
          {logo ? (
            <View>{logo}</View>
          ) : (
            <OnboardingLogoContainer>{logo}</OnboardingLogoContainer>
          )}
          {indicator ? (
            <View>{indicator}</View>
          ) : (
            <OnboardingIndicatorContainer>
              {indicator}
            </OnboardingIndicatorContainer>
          )}
        </OnboardingTemplateTopContainer>
        <OnboardingTemplateBottomContainer>
          <OnboardingTextView>
            {title ? (
              <View>{title}</View>
            ) : (
              <OnboardingTitleView>{title}</OnboardingTitleView>
            )}
            {description ? (
              <View>{description}</View>
            ) : (
              <OnboardingDescriptionView>
                {description}
              </OnboardingDescriptionView>
            )}
          </OnboardingTextView>
          {button ? (
            <View>{button}</View>
          ) : (
            <OnboardingButtonView>{button}</OnboardingButtonView>
          )}
        </OnboardingTemplateBottomContainer>
      </View>
    </OnboardingTemplateContainer>
  );
}
