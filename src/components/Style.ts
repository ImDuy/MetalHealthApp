import {StyleSheet} from 'react-native';
import {COLOR, FONT, SIZE} from '../common/Constant';

export const style = StyleSheet.create({
  //BottomTabsIcon
  tabsIconContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  tabsSelectedPointer: {
    position: 'absolute',
    top: -15,
    width: 12,
    height: 22,
    backgroundColor: COLOR.primary,
    borderRadius: 20,
  },
  tabsIcon: {
    width: 36,
    height: 36,
    tintColor: COLOR.lightGray,
    marginTop: SIZE.mgSmall / 2,
  },
  tabsIconSelected: {
    tintColor: COLOR.primary,
  },

  // Toolbar
  toolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZE.pdLarge,
    paddingBottom: SIZE.pdSmall,
  },
  userAvatarContainer: {
    padding: 3,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: COLOR.lightOrange,
  },
  userAvatar: {
    width: 42,
    height: 42,
    borderRadius: 40,
  },
  notiIcon: {
    width: 34,
    height: 32,
  },
  notiNumContainer: {
    position: 'absolute',
    top: -7,
    right: -7,
    width: 22,
    height: 22,
    borderRadius: 24 / 2,
    backgroundColor: COLOR.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //BoxView
  boxViewContainer: {
    padding: SIZE.pdLarge,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    overflow: 'hidden',
  },
  boxViewTitle: {
    fontSize: FONT.sizeMedium + 5,
    fontWeight: '800',
  },
  boxViewBtnContainer: {
    marginTop: SIZE.mgSmall,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  boxViewBtnText: {
    fontSize: FONT.sizeMedium - 4,
    fontWeight: '800',
  },
  boxViewBtnIcon: {
    width: 20,
    height: 20,
  },
  boxViewImg: {
    width: 80,
    height: 80,
  },
  boxViewDecor: {
    position: 'absolute',
    bottom: -770,
    right: -430,
    width: 800,
    height: 800,
    borderRadius: 400,
  },
});
