import {Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../assets/svg';

export default function Greeting() {
  const title = 'bankpick';
  return (
    <View className=" flex-1 justify-center items-center bg-background gap-3">
      <Logo />
      <Text className=" text-4xl uppercase font-poppins font-[600] text-textwhite">
        {title}
      </Text>
    </View>
  );
}
