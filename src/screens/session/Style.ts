import {StyleSheet} from 'react-native';
import {COLOR, FONT, SIZE} from '../../common/Constant';

export const style = StyleSheet.create({
  sHeaderContainer: {
    marginTop: SIZE.mgMedium,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sHeaderTitle: {
    fontSize: FONT.sizeMedium,
    fontWeight: '600',
  },
  sHeaderDownIcon: {
    width: 16,
    height: 16,
    marginLeft: SIZE.mgXSmall,
    marginTop: 4,
  },
  sHeaderEjectIcon: {
    width: 25,
    height: 20,
    tintColor: COLOR.gray,
    marginLeft: 'auto',
  },
  sItemContainer: {
    padding: SIZE.pdLarge,
    borderRadius: 16,
    gap: 12,
  },
  sItemHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  sItemAvatarContainer: {
    padding: 3,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: COLOR.lightOrange,
  },
  sItemAvatar: {
    width: 30,
    height: 30,
    borderRadius: 40,
  },
  sItemTitleContainer: {
    flexShrink: 1,
    gap: 2,
  },
  sItemTitle: {
    fontSize: FONT.sizeSmall + 4,
    fontWeight: '600',
  },
  sItemDivider: {
    height: 0.5,
    backgroundColor: COLOR.gray,
  },
  sItemTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sItemTimeIcon: {
    width: 17,
    height: 17,
    tintColor: COLOR.gray,
  },
  sItemTimeText: {
    fontSize: FONT.sizeSmall,
    color: COLOR.darkGray,
  },
  sItemBtnContainer: {
    marginTop: SIZE.mgXSmall / 2,
    flexDirection: 'row',
    gap: 10,
  },
});
