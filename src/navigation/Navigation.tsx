import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLOR, ICONS, SCREEN} from '../common/Constant';
import Home from '../screens/home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabsIcon from '../components/BottomTabsIcon';
import Session from '../screens/session/Session';
import Message from '../screens/message/Message';
import Hub from '../screens/hub/Hub';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../screens/home/components/Header';
import Toolbar from '../components/Toolbar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.TAB} component={TabNavigation} />
    </Stack.Navigator>
  );
}

const TabNavigation = () => {
  const insets = useSafeAreaInsets(); //Handle bottom safe area on iphone 14 for bottom tabs
  return (
    <Tab.Navigator
      screenOptions={{
        header() {
          return (
            <SafeAreaView style={{backgroundColor: COLOR.white}}>
              <Toolbar />
            </SafeAreaView>
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: insets.bottom,
          left: 0,
          right: 0,
          height: 60,
          paddingBottom: 0,
        },
      }}>
      <Tab.Screen
        name={SCREEN.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabsIcon
              focused={focused}
              icon={ICONS.home}
              iconActive={ICONS.home_fill}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.SESSION}
        component={Session}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabsIcon
              focused={focused}
              icon={ICONS.session}
              iconActive={ICONS.session_fill}
              size={{width: 42, height: 48}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.MESSAGE}
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabsIcon
              focused={focused}
              icon={ICONS.message}
              iconActive={ICONS.message_fill}
              size={{width: 36, height: 32}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.HUB}
        component={Hub}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabsIcon
              focused={focused}
              icon={ICONS.hub}
              iconActive={ICONS.hub_fill}
              size={{width: 38, height: 38}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
