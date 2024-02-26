import {StyleSheet} from 'react-native';
import {COLOR, FONT, SIZE} from '../../common/Constant';

export const style = StyleSheet.create({
  title: {
    color: COLOR.black,
    fontSize: FONT.sizeMedium - 1,
    fontWeight: '700',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: SIZE.pdSmall,
    gap: 15,
  },
  itemAvatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  itemAvatar: {
    width: 30,
    height: 30,
  },
  itemHeaderContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  itemContentContainer: {
    flexShrink: 1,
  },
  itemName: {
    fontSize: FONT.sizeSmall + 3,
    fontWeight: '700',
  },
  customDotView: {
    width: 3,
    height: 3,
    borderRadius: 10,
    backgroundColor: COLOR.darkGray,
  },
  itemTime: {
    fontSize: FONT.sizeSmall + 1,
    color: COLOR.darkGray,
  },
  itemContent: {
    marginTop: 7,
  },
  itemToolbar: {
    marginTop: SIZE.mgSmall,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemToolbarIcon: {
    width: 24,
    height: 24,
    tintColor: COLOR.darkGray,
  },
  itemIconCustomSize: {
    width: 22,
    height: 22,
  },
  itemCommentIconPos: {
    marginTop: 3,
    marginLeft: SIZE.mgSmall,
  },
  itemShareIconPos: {
    marginLeft: 'auto',
  },

  itemToolbarText: {},
});
