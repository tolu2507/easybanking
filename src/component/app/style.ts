import {styled} from 'nativewind';
import {Image, Pressable, Text, View} from 'react-native';

export const StyledHeader = styled(
  View,
  ' flex flex-row  justify-between items-center mb-9',
);
export const StyledImage = styled(
  Image,
  ' rounded-full border-b-2 bg-linestroke',
);
export const StyledTextView = styled(View, ' flex-1 ml-4');
export const StyledTextSmall = styled(
  Text,
  ' text-description text-xs font-normal leading-3',
);
export const StyledTextName = styled(
  Text,
  'text-textwhite text-lg  font-[500] leading-[18px] mt-2',
);
export const StyledIcon = styled(
  Pressable,
  'w-11 h-11 rounded-full justify-center items-center',
);
export const StyledRelativeView = styled(
  View,
  'bg-purpleicon/30 rounded-[20px] w-full h-[220px] relative',
);
export const StyledImageCard = styled(
  Image,
  'bg-purpleicon/10 opacity-25 rounded-[20px] w-full h-[220px] object-cover',
);
export const StyledAbsoluteView = styled(
  View,
  'absolute left-0 top-0 rounded-[20px] w-full h-[220px] p-5',
);
export const StyledCardViewTop = styled(
  Pressable,
  ' flex flex-row justify-between items-center w-full',
);
export const StyledCardNumberText = styled(
  Text,
  ' text-textwhite text-[24px] font-normal leading-normal',
);
export const StyledCardNumberView = styled(
  View,
  'flex justify-between items-center w-full flex-row mt-9 mb-3',
);
export const StyledBottomViewCard = styled(
  View,
  'w-full justify-between items-center flex flex-row mt-6',
);
export const StyledBottomViewCards = styled(View, 'w-[154px] flex flex-row');
export const StyledSmallcards = styled(View, 'space-y-1 mr-8');
export const StyledMasterLogoView = styled(
  View,
  'flex flex-col justify-center items-center space-y-1',
);
export const StyledActionView = styled(
  View,
  'flex justify-between items-center w-full my-8 flex-row',
);
export const StyledTransactionView = styled(
  View,
  'flex flex-row items-center justify-between mb-5',
);
export const StyledTransactionCard = styled(
  View,
  'flex flex-row items-center space-x-5',
);
export const StyledAlternateView = styled(View, 'rounded-full w-5 h-5');
export const StyledStatisticsCard = styled(View, 'w-full h-[300px] my-8');
export const StyledStatisticsScrollView = styled(
  View,
  'flex flex-row items-center space-x-7',
);
export const StyledGraphView = styled(
  View,
  'bg-purpleicon/40 flex-1 rounded-3xl',
);
export const StyledStatisticsText = styled(
  Text,
  'text-[15px] text-textgrey font-[400] leading-[15px]',
);
export const StyledStatisticsTextPressed = styled(
  Pressable,
  'px-4 py-2 rounded-[8px] flex items-center justify-center flex-row',
);
export const StyledWalletBodyView = styled(View, 'mt-8 w-full');
export const StyledSpendingLimit = styled(View, 'my-8 w-full');
export const StyledSpendingLimitText = styled(
  Text,
  'text-lg font-[500] leading-[18px]',
);
export const StyledSpendingLimitView = styled(
  View,
  'mt-5 w-full h-[115px] rounded-[16px] bg-iconbackground p-6 items-center',
);

export const StyledSpendingLimits = styled(
  View,
  'mt-4 w-full h-2 rounded-[16px] bg-background ',
);
