import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLOR, ICONS, SIZE} from '../../../common/Constant';
import BoxView from '../../../components/BoxView';
import {style} from '../Style';

export default function Content() {
  return (
    <View>
      {/* 1-on-1 Sessions */}
      <BoxView
        backgroundColor={COLOR.xLightOrange}
        bgSecondaryColor="#feebda"
        title="1 on 1 Sessions"
        subTitle="Lets open up to the things that matter the most"
        titleColor={COLOR.black}
        btnText="Book Now"
        btnTextColor={COLOR.primary}
        btnIcon={ICONS.calendar}
        img={ICONS.one_on_one}
        imgColor={COLOR.primary}
        containerMgTop={SIZE.mgLarge}
      />

      {/* Journal & Library */}
      <View style={style.jLContainer}>
        <TouchableOpacity style={style.jLItemContainer}>
          <Image source={ICONS.journal} style={style.jLItemIcon} />
          <Text style={style.jLItemLabel}>Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.jLItemContainer}>
          <Image source={ICONS.library} style={style.jLItemIcon} />
          <Text style={style.jLItemLabel}>Library</Text>
        </TouchableOpacity>
      </View>

      {/* Quotes */}
      <View style={style.quotesContainter}>
        <Text style={style.quotesText}>
          "It is better to conquer yourself than to win a thousand battles"
        </Text>
        <Image source={ICONS.double_quotes} style={style.quotesImg} />
      </View>

      {/* Plan Expired */}
      <BoxView
        backgroundColor={COLOR.green}
        title="Plan Expired"
        subTitle="Get back chat access and session credits"
        titleColor={COLOR.white}
        btnText="Buy More"
        btnTextColor={COLOR.white}
        btnIcon={ICONS.right_arrow}
        img={ICONS.credit}
        bgSecondaryColor={COLOR.lightGreen}
        containerMgTop={SIZE.mgLarge}
      />
    </View>
  );
}
