import {styled} from 'nativewind';
import {View} from 'react-native';

export const OnboardingTemplateContainer = styled(
  View,
  'flex-1 justify-center items-center px-5 py-[60px]',
);

export const OnboardingTemplateTopContainer = styled(
  View,
  'gap-[73px] flex-col justify-center items-center mb-9',
);

export const OnboardingTemplateBottomContainer = styled(
  View,
  'gap-12 flex-col justify-center items-center',
);

export const OnboardingLogoContainer = styled(
  View,
  'w-[335px] h-64 bg-linestroke rounded-sm',
);

export const OnboardingIndicatorContainer = styled(
  View,
  'rounded-sm bg-linestroke w-10 p-2',
);

export const OnboardingTextView = styled(
  View,
  'gap-3 flex-col justify-center items-center',
);

export const OnboardingTitleView = styled(View, 'w-[280px] h-20 bg-linestroke');

export const OnboardingDescriptionView = styled(
  View,
  'w-[200px] h-20 bg-linestroke',
);

export const OnboardingButtonView = styled(
  View,
  'w-[335px] h-14 rounded-md bg-linestroke',
);
