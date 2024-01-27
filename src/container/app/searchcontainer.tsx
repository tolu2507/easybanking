import React from 'react';
import {TabTemplates} from '../../templates';
import {SecondHeaderComponent, TransactionComponent} from '../../component/app';
import {Caretleft, Search, X} from '../../assets/svg';
import {useSelector} from 'react-redux';
import {Colors, data} from '../../constants';
import {getLanding} from '../../store/features/onboarding/landingSlice';
import {View} from 'react-native';
import {StyledTextInput, StyledViews} from './style';

export default function SearchContainer({
  navigation,
}: {
  navigation: {
    navigate: (val: string) => any;
    goBack: () => void;
  };
}) {
  const screen = 'Search';
  const mode = useSelector(getLanding);
  let color = mode === 'dark' ? Colors.textwhite : Colors.iconbackground;
  return (
    <TabTemplates
      head={
        <SecondHeaderComponent
          icon2={<Caretleft onPress={() => navigation.goBack()} />}
          icon={undefined}
          name={screen}
        />
      }
      body={
        <View>
          <StyledViews className="flex flex-row justify-between bg-linestroke space-x-1 rounded-lg h-11 mb-8 items-center w-full px-4">
            <Search />
            <StyledTextInput
              className="flex-1 text-textwhite"
              placeholder="Search"
              placeholderTextColor={Colors.textgrey}
            />
            <X />
          </StyledViews>
          <TransactionComponent
            color={color}
            data={data}
            action={() => console.log('non existence')}
            headerShown={false}
          />
        </View>
      }
    />
  );
}
