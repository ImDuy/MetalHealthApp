import {StyleSheet} from 'react-native';
import {COLOR, FONT, SIZE} from '../../common/Constant';

export const style = StyleSheet.create({
  //Header
  emotionContainer: {
    alignItems: 'center',
  },
  emotionItemImgContainer: {
    width: 60,
    height: 63,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emotionItemImg: {
    width: 36,
    height: 36,
    tintColor: COLOR.white,
  },

  //Content
  jLContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZE.mgLarge,
  },
  jLItemContainer: {
    width: SIZE.screenWidth * 0.4,
    backgroundColor: COLOR.xLightGray,
    borderRadius: 14,
    padding: SIZE.pdMedium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  jLItemIcon: {
    width: 24,
    height: 24,
    tintColor: COLOR.gray,
  },
  jLItemLabel: {
    fontWeight: '700',
    fontSize: FONT.sizeSmall + 4,
  },
  quotesContainter: {
    backgroundColor: COLOR.xLightGray,
    marginTop: SIZE.mgSmall,
    padding: SIZE.pdMedium,
    paddingVertical: SIZE.pdLarge,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  quotesText: {
    color: COLOR.darkGray,
    flexShrink: 1,
  },
  quotesImg: {
    width: 30,
    height: 30,
    tintColor: COLOR.gray,
    transform: [{scaleY: -1}],
  },
});
