import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../common/Constant';

type Props = {
  isActive: boolean;
  label: string;
  labelColor: string;
  labelSize: number;
  labelWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  btnColor: string;
  btnHeight: number;
  btnWidth?: number;
  paddingHorizontal?: number;
  onPress?: () => void;
};
export default function CustomBtn({
  isActive,
  label,
  labelColor,
  labelSize,
  labelWeight,
  btnColor,
  btnHeight,
  paddingHorizontal,
  btnWidth,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isActive ? btnColor : COLOR.lightGray,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal,
        height: btnHeight,
        width: btnWidth,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: isActive ? labelColor : COLOR.darkGray,
          fontSize: labelSize,
          fontWeight: labelWeight,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
