import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../common/Constant';
import {style} from './Style';
import {commonStyle} from '../common/CommonStyle';

type Props = {
  backgroundColor: string;
  bgSecondaryColor: string;
  title: string;
  subTitle: string;
  subTitle2?: string;
  titleColor: string;
  btnText: string;
  btnTextColor: string;
  btnIcon: any;
  img?: any;
  imgColor?: string;
  containerMgTop?: number;
};
export default function boxView({
  backgroundColor,
  title,
  subTitle,
  subTitle2,
  btnText,
  img,
  imgColor,
  titleColor,
  btnTextColor,
  btnIcon,
  containerMgTop,
  bgSecondaryColor,
}: Props) {
  return (
    <View
      style={[
        style.boxViewContainer,
        {backgroundColor},
        {marginTop: containerMgTop},
      ]}>
      <View style={{flexShrink: 1}}>
        <Text style={[{color: titleColor}, style.boxViewTitle]}>{title}</Text>
        <Text
          style={[
            {color: titleColor},
            commonStyle.fw300,
            commonStyle.mtXSmall,
          ]}>
          {subTitle}
        </Text>
        {subTitle2 && (
          <Text
            style={[
              {color: titleColor},
              commonStyle.fw500,
              commonStyle.mtXSmall,
            ]}>
            {subTitle2}
          </Text>
        )}
        <TouchableOpacity style={style.boxViewBtnContainer}>
          <Text style={[style.boxViewBtnText, {color: btnTextColor}]}>
            {btnText}
          </Text>
          <Image
            source={btnIcon}
            style={[style.boxViewBtnIcon, {tintColor: btnTextColor}]}
          />
        </TouchableOpacity>
      </View>
      {img && (
        <Image
          source={img}
          style={[style.boxViewImg, {tintColor: imgColor ?? bgSecondaryColor}]}
        />
      )}
      <View
        style={[
          style.boxViewDecor,
          {backgroundColor: bgSecondaryColor},
        ]}></View>
    </View>
  );
}
