import {View, Text, Image} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {FONT, ICONS, IMAGES, SIZE} from '../../../common/Constant';
import {style} from '../Style';
import {commonStyle} from '../../../common/CommonStyle';

export default function Header() {
  const emotions = [
    {label: 'Happy', img: ICONS.happy, bgColor: '#ef5da8'},
    {label: 'Calm', img: ICONS.calm, bgColor: '#aeaff7'},
    {label: 'Manic', img: ICONS.manic, bgColor: '#9fe3e2'},
    {label: 'Angry', img: ICONS.angry, bgColor: '#f09e54'},
    {label: 'Relax', img: ICONS.relax, bgColor: '#c2f2a5'},
  ];

  const renderItem = (item: any) => (
    <View style={style.emotionContainer}>
      <View
        style={[
          style.emotionItemImgContainer,
          {backgroundColor: item.bgColor},
        ]}>
        <Image source={item.img} style={style.emotionItemImg} />
      </View>

      <Text style={[commonStyle.grayText, commonStyle.mtXSmall]}>
        {item.label}
      </Text>
    </View>
  );
  return (
    <View>
      {/* Hello text */}
      <View style={{paddingBottom: SIZE.pdMedium}}>
        <Text style={[commonStyle.fw500, commonStyle.largeText]}>
          Good Afternoon,
        </Text>
        <Text style={[commonStyle.fw800, commonStyle.largeText]}>Sarina!</Text>
      </View>

      {/* Emotions */}
      <Text style={[commonStyle.fw500, {fontSize: FONT.sizeMedium - 4}]}>
        How are you feeling today ?
      </Text>
      <FlatList
        horizontal
        data={emotions}
        renderItem={({item}) => renderItem(item)}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        showsHorizontalScrollIndicator={false}
        style={commonStyle.mtSmall}
      />
    </View>
  );
}
