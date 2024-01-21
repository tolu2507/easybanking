import {styled} from 'nativewind';
import {ScrollView, View} from 'react-native';
import {Colors} from '../../constants';

export const EllipseContainerStyle = styled(View, 'absolute -right-10 top-52');

export const getMode = (mode: 'light' | 'dark') => {
  const backgroundColor: any = {
    backgroundColor: mode === 'dark' ? Colors.background : Colors.textwhite,
    paddingHorizontal: 20,
    paddingTop: 22,
    position: 'relative',
  };
  return backgroundColor;
};
export const HeaderContainer = styled(
  View,
  ' w-full h-14 rounded-md bg-linestroke mb-8',
);
export const BodyContainer = styled(ScrollView, ' flex-1 pb-20');
export const CardContainer = styled(
  View,
  ' w-full h-48 rounded-md bg-linestroke mb-8',
);
export const ActionContainer = styled(
  View,
  ' w-full h-20 rounded-md bg-linestroke mb-8',
);
export const RemainerContainer = styled(
  View,
  ' w-full flex-1 rounded-md bg-linestroke',
);
