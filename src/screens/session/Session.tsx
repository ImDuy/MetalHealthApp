import {View, Text, ScrollView, Image, FlatList} from 'react-native';
import React from 'react';
import {commonStyle} from '../../common/CommonStyle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BoxView from '../../components/BoxView';
import {COLOR, ICONS, IMAGES, SIZE} from '../../common/Constant';
import {style} from './Style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomBtn from '../../components/CustomBtn';

export default function Session() {
  const insets = useSafeAreaInsets();
  const data = [
    {
      avatar: IMAGES.avatar,
      title: 'Sahana V',
      subTitle: 'Msc in Clinical Technology',
      date: "31st March '22",
      time: '7:30 PM - 8:30 PM',
    },
    {
      avatar: IMAGES.avatar,
      title: 'Sahana V',
      subTitle: 'Msc in Clinical Technology',
      date: "31st March '22",
      time: '7:30 PM - 8:30 PM',
    },
    {
      avatar: IMAGES.avatar,
      title: 'Sahana V',
      subTitle: 'Msc in Clinical Technology',
      date: "31st March '22",
      time: '7:30 PM - 8:30 PM',
    },
    {
      avatar: IMAGES.avatar,
      title: 'Sahana V',
      subTitle: 'Msc in Clinical Technology',
      date: "31st March '22",
      time: '7:30 PM - 8:30 PM',
    },
  ];

  const renderItem = (item: any, idx: number) => {
    let backgroundColor = COLOR.xLightGray;
    let btnText = ['Re-book', 'View Profile'];

    if (idx == 0) {
      backgroundColor = COLOR.xLightOrange;
      btnText = ['Reschedule', 'Join Now'];
    }
    return (
      <View style={[style.sItemContainer, {backgroundColor}]}>
        <View style={style.sItemHeaderContainer}>
          <View style={style.sItemAvatarContainer}>
            <Image source={item.avatar} style={style.sItemAvatar} />
          </View>

          <View style={style.sItemTitleContainer}>
            <Text style={style.sItemTitle}>{item.title}</Text>
            <Text style={commonStyle.fw300}>{item.subTitle}</Text>
          </View>
        </View>
        {/* Divider */}
        <View style={style.sItemDivider}></View>
        <View style={style.sItemTimeContainer}>
          <Image source={ICONS.calendar} style={style.sItemTimeIcon} />
          <Text style={style.sItemTimeText}>{item.date}</Text>
          <Image
            source={ICONS.time}
            style={[style.sItemTimeIcon, commonStyle.mlXSmall]}
          />
          <Text style={style.sItemTimeText}>{item.time}</Text>
        </View>
        <View style={style.sItemBtnContainer}>
          <CustomBtn
            isActive={true}
            label={btnText[0]}
            labelColor={COLOR.white}
            labelSize={15}
            labelWeight="600"
            btnColor={COLOR.primary}
            btnHeight={45}
            btnWidth={120}
          />
          <CustomBtn
            isActive={true}
            label={btnText[1]}
            labelColor={COLOR.primary}
            labelSize={15}
            labelWeight="600"
            btnColor="transparent"
            btnHeight={45}
            paddingHorizontal={SIZE.pdMedium}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={commonStyle.container}>
      <ScrollView style={[commonStyle.pdHLarge, {marginBottom: insets.bottom}]}>
        {/* Upcoming Session */}
        <BoxView
          backgroundColor={COLOR.xLightOrange}
          bgSecondaryColor="#feebda"
          title="Upcoming Sessions"
          subTitle="Sahana V. Msc in Clinical Psychology"
          subTitle2="7:30 PM - 8:30 PM"
          titleColor={COLOR.black}
          btnText="Book Now"
          btnTextColor={COLOR.primary}
          btnIcon={ICONS.play}
          imgColor={COLOR.primary}
          containerMgTop={SIZE.mgLarge}
        />

        {/* All Sessions Header*/}
        <View style={style.sHeaderContainer}>
          <Text style={style.sHeaderTitle}>All Sessions</Text>
          <Image source={ICONS.down_arrow} style={style.sHeaderDownIcon} />
          <Image
            source={ICONS.opposite_arrows}
            style={style.sHeaderEjectIcon}
            resizeMode="stretch"
          />
        </View>
        {/* All Sessions */}
        <FlatList
          data={data}
          scrollEnabled={false}
          style={commonStyle.mtSmall}
          renderItem={({item, index}) => renderItem(item, index)}
          ItemSeparatorComponent={() => <View style={{height: 15}} />}
        />
      </ScrollView>
    </View>
  );
}
