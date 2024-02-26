import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomBtn from '../../components/CustomBtn';
import {COLOR, FONT, ICONS, IMAGES, SIZE} from '../../common/Constant';
import {commonStyle} from '../../common/CommonStyle';
import {style} from './Style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Hub() {
  const tabs = [
    {label: 'Trending', isSelected: true},
    {label: 'Relationship', isSelected: false},
    {label: 'Self Care', isSelected: false},
    {label: 'Favorites', isSelected: false},
  ];

  const data = [
    {
      avatar: IMAGES.avatar,
      avatarBgColor: '#d88ea9',
      name: 'Coal Dingo',
      content:
        'Is there a therapy which can cure crossdressing & bdsm complusion?',
      time: 'just now',
      likes: 2,
      comments: 0,
      isLiked: true,
    },
    {
      avatar: IMAGES.avatar,
      avatarBgColor: '#ffe6c7',
      name: 'Pigeon Car',
      content:
        'Is there a therapy which can cure crossdressing & bdsm complusion?',
      time: '3 hrs ago',
      likes: 12,
      comments: 2,
      isLiked: false,
    },
    {
      avatar: IMAGES.avatar,
      avatarBgColor: '#d88ea9',
      name: 'Coal Dingo',
      content:
        'Is there a therapy which can cure crossdressing & bdsm complusion?',
      time: '1 hr ago',
      likes: 12,
      comments: 2,
      isLiked: false,
    },
    {
      avatar: IMAGES.avatar,
      avatarBgColor: '#adb6d7',
      name: 'Coal Dingo',
      content:
        'Is there a therapy which can cure crossdressing & bdsm complusion?',
      time: '2 min ago',
      likes: 22,
      comments: 4,
      isLiked: false,
    },
    {
      avatar: IMAGES.avatar,
      avatarBgColor: '#86ec25',
      name: 'Pigeon Car',
      content:
        'Is there a therapy which can cure crossdressing & bdsm complusion?',
      time: '3 hrs ago',
      likes: 10,
      comments: 1,
      isLiked: false,
    },
  ];
  const [tabsState, setTabsState] = useState(tabs);
  const [dataState, setDataState] = useState(data);
  const insets = useSafeAreaInsets();

  const onTabPress = (pressedTab: any) => {
    tabsState.forEach((tab: any) => {
      if (tab.label === pressedTab.label) {
        tab.isSelected = true;
      } else {
        tab.isSelected = false;
      }
    });
    setTabsState([...tabsState]);
  };
  const onLikeBtnPress = (item: any) => {
    if (item.isLiked) {
      item.likes -= 1;
      item.isLiked = false;
    } else {
      item.likes += 1;
      item.isLiked = true;
    }
    setDataState([...dataState]);
  };
  const renderItem = (item: any) => (
    <View style={style.itemContainer}>
      <View
        style={[
          style.itemAvatarContainer,
          {backgroundColor: item.avatarBgColor},
        ]}>
        <Image source={item.avatar} style={style.itemAvatar} />
      </View>
      <View style={style.itemContentContainer}>
        <View style={style.itemHeaderContainer}>
          <Text style={style.itemName}>{item.name}</Text>
          <View style={style.customDotView}></View>
          <Text style={style.itemTime}>{item.time}</Text>
        </View>
        <Text style={style.itemContent}>{item.content}</Text>
        <View style={style.itemToolbar}>
          <TouchableOpacity onPress={() => onLikeBtnPress(item)}>
            <Image
              source={ICONS.like}
              style={[
                style.itemToolbarIcon,
                item.isLiked && {tintColor: COLOR.primary},
              ]}
            />
          </TouchableOpacity>

          <Text>{item.likes}</Text>
          <TouchableOpacity style={style.itemCommentIconPos}>
            <Image
              source={ICONS.comment}
              style={[style.itemToolbarIcon, style.itemIconCustomSize]}
            />
          </TouchableOpacity>
          <Text>{item.comments}</Text>
          <TouchableOpacity style={style.itemShareIconPos}>
            <Image
              source={ICONS.share}
              style={[style.itemToolbarIcon, style.itemIconCustomSize]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={[commonStyle.container, commonStyle.pdHLarge]}>
      {/* Title */}
      <Text style={style.title}>Wellness Hub</Text>

      {/* Tabs */}
      <FlatList
        horizontal
        data={tabsState}
        style={commonStyle.mtMedium}
        contentContainerStyle={{paddingBottom: SIZE.pdSmall}}
        renderItem={({item}) => (
          <CustomBtn
            isActive={item.isSelected}
            label={item.label}
            labelColor={COLOR.white}
            labelSize={15}
            labelWeight="600"
            btnColor={COLOR.primary}
            btnHeight={40}
            paddingHorizontal={SIZE.pdMedium}
            onPress={() => onTabPress(item)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{width: 15}} />}
        showsHorizontalScrollIndicator={false}
      />

      {/* Content list */}
      <FlatList
        data={dataState}
        style={[
          commonStyle.mtSmall,
          {marginBottom: SIZE.bottomTabsBarHeight + insets.bottom},
        ]}
        renderItem={({item}) => renderItem(item)}
        ItemSeparatorComponent={() => (
          <View
            style={{height: 1, width: '100%', backgroundColor: COLOR.lightGray}}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
