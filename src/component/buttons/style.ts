import {styled} from 'nativewind';
import {Pressable, Text} from 'react-native';

export const ButtonContainer = styled(
  Pressable,
  'h-14 w-[335px] rounded-[16px] flex items-center justify-center py-4 px-10',
);

export const ButtonText = styled(
  Text,
  'text-base font-[600] text-center font-poppings leading-[24px]',
);
