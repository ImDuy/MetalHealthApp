import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {commonStyle} from '../../common/CommonStyle';
import Content from './components/Content';
import Header from './components/Header';

export default function Home() {
  const insets = useSafeAreaInsets();
  return (
    <View style={commonStyle.container}>
      <ScrollView
        style={[commonStyle.pdHLarge, {marginBottom: 60 + insets.bottom}]}>
        <Header />
        <Content />
      </ScrollView>
    </View>
  );
}
