import React from 'react';
import {Image, View} from 'react-native';
import {style} from './Style';

type Props = {
  focused: boolean;
  icon: any;
  iconActive: any;
  size?: {width: number; height: number};
};

export default function BottomTabsIcon({
  focused,
  icon,
  iconActive,
  size,
}: Props) {
  return (
    <View style={style.tabsIconContainer}>
      {focused && <View style={style.tabsSelectedPointer} />}
      <Image
        source={focused ? iconActive : icon}
        style={[
          style.tabsIcon,
          focused && style.tabsIconSelected,
          size ? {width: size.width, height: size.height} : {},
        ]}
        resizeMode="stretch"
      />
    </View>
  );
}
