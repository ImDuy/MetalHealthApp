import {View, Text, Image} from 'react-native';
import React from 'react';
import {ICONS, IMAGES} from '../common/Constant';
import {commonStyle} from '../common/CommonStyle';
import {style} from './Style';

export default function Toolbar() {
  return (
    <View style={style.toolbarContainer}>
      <View style={style.userAvatarContainer}>
        <Image style={style.userAvatar} source={IMAGES.avatar} />
      </View>
      <View>
        <Image
          style={style.notiIcon}
          source={ICONS.notification}
          resizeMode="stretch"
        />
        <View style={style.notiNumContainer}>
          <Text style={commonStyle.whiteText}>3</Text>
        </View>
      </View>
    </View>
  );
}
