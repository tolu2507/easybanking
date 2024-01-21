/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyledGraphView,
  StyledStatisticsCard,
  StyledStatisticsScrollView,
  StyledStatisticsText,
  StyledStatisticsTextPressed,
} from '..';
import {ScrollView, View} from 'react-native';
import {Colors, months} from '../../../constants';
import {STATISTICS} from '../../../interface/tabs/statistics';

export default function StatisticsGraph({
  month,
  setMonth,
}: {
  month: STATISTICS['month'];
  setMonth: STATISTICS['setMonth'];
}) {
  return (
    <StyledStatisticsCard>
      <StyledGraphView />
      <View style={{marginTop: 20}}>
        <ScrollView horizontal>
          <StyledStatisticsScrollView>
            {months.map(item =>
              item === month ? (
                <StyledStatisticsTextPressed
                  key={item}
                  style={{backgroundColor: Colors.blueprimary}}
                  onPress={() => setMonth(item)}>
                  <StyledStatisticsText style={{color: Colors.textwhite}}>
                    {item}
                  </StyledStatisticsText>
                </StyledStatisticsTextPressed>
              ) : (
                <StyledStatisticsText key={item} onPress={() => setMonth(item)}>
                  {item}
                </StyledStatisticsText>
              ),
            )}
          </StyledStatisticsScrollView>
        </ScrollView>
      </View>
    </StyledStatisticsCard>
  );
}
