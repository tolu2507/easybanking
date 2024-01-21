import {styled} from 'nativewind';
import {Pressable, SafeAreaView, View} from 'react-native';

export const OnboardingTemplateContainer = styled(
  View,
  'flex-1 justify-center items-center px-5 py-[60px]',
);
export const SafeAreaViewcontainer = styled(SafeAreaView, 'flex-1');

export const SignTemplateContainer = styled(View, ' w-full p-5 mt-12');
export const CenterIcon = styled(Pressable, 'items-center');

export const SignBackContainer = styled(
  View,
  'flex justify-center item-center w-11 h-11 rounded-full bg-iconbackground mb-[53px]',
);

export const SignTextContainer = styled(
  View,
  'w-[108px] h-9 bg-linestroke rounded-sm mb-[38px]',
);
export const ButtonContainers = styled(
  View,
  'w-full flex justify-center items-center flex-col mt-2',
);
export const InputView = styled(View, 'w-[335px] h-14 bg-linestroke mb-5');

export const ButtomText = styled(View, 'w-[155px] h-4 bg-linestroke mt-7');

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
