import {StyleSheet} from 'react-native';
import {COLOR, FONT, SIZE} from './Constant';

export const commonStyle = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    flex: 1,
  },
  grayText: {
    color: COLOR.darkGray,
  },
  whiteText: {
    color: COLOR.white,
  },
  fw800: {
    fontWeight: '800',
  },
  fw700: {
    fontWeight: '700',
  },
  fw500: {
    fontWeight: '500',
  },
  fw300: {
    fontWeight: '300',
  },
  largeText: {
    fontSize: FONT.sizeLarge,
  },
  mtXSmall: {
    marginTop: SIZE.mgXSmall,
  },
  mtSmall: {
    marginTop: SIZE.mgSmall,
  },
  mtMedium: {
    marginTop: SIZE.mgMedium,
  },
  mtLarge: {
    marginTop: SIZE.mgLarge,
  },
  mlXSmall: {
    marginLeft: 12,
  },
  pdSmall: {
    padding: SIZE.pdSmall,
  },
  pdMedium: {
    padding: SIZE.pdMedium,
  },
  pdLarge: {
    padding: SIZE.pdLarge,
  },
  pdHLarge: {
    paddingHorizontal: SIZE.pdLarge,
  },
});
