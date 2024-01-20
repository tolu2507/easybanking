import {styled} from 'nativewind';
import {Text, View} from 'react-native';

export const InputContainer = styled(
  View,
  ' mb-5 border-b-linestroke border-b-2 py-1 w-full',
);

export const Input = styled(
  View,
  ' flex items-center flex-row w-full mt-4 space-x-4',
);

export const InputText = styled(
  Text,
  ' text-textgrey text-sm font-normal leading-[14px]',
);

export const InputBox = styled(View, ' w-full mb-10');
