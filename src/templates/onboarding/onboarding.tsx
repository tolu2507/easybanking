import {View} from 'react-native';
import React from 'react';
import {ONBOARDINGTEMPLATE} from '../../interface/templates/onboardingtemplate';

export default function OnboardingTemplates({
  logo,
  indicator,
  title,
  description,
  button,
}: ONBOARDINGTEMPLATE) {
  return (
    <View className=" bg-background flex-1 justify-center items-center px-5 py-[60px]">
      <View className="">
        <View className="gap-[73px] flex-col justify-center items-center mb-9">
          <View
            className={logo ? '' : ' w-[335px] h-64 bg-linestroke rounded-sm'}>
            {logo}
          </View>
          <View
            className={indicator ? '' : ' rounded-sm bg-linestroke w-10 p-2'}>
            {indicator}
          </View>
        </View>
        <View className=" gap-12 flex-col justify-center items-center">
          <View className=" gap-3 flex-col justify-center items-center">
            <View className={title ? '' : ' w-[280px] h-20 bg-linestroke'}>
              {title}
            </View>
            <View
              className={description ? '' : ' w-[200px] h-20 bg-linestroke'}>
              {description}
            </View>
          </View>
          <View
            className={
              button ? '' : ' w-[335px] h-14 rounded-md bg-linestroke'
            }>
            {button}
          </View>
        </View>
      </View>
    </View>
  );
}
