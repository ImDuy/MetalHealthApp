import {Dimensions} from 'react-native';

export const enum SCREEN {
  TAB = 'TAB',
  HOME = 'HOME',
  SESSION = 'SESSION',
  MESSAGE = 'MESSAGE',
  HUB = 'HUB',
}

export const ICONS = {
  home: require('../images/home.png'),
  home_fill: require('../images/home-fill.png'),
  session: require('../images/session.png'),
  session_fill: require('../images/session-fill.png'),
  message: require('../images/message.png'),
  message_fill: require('../images/message-fill.png'),
  hub: require('../images/hub.png'),
  hub_fill: require('../images/hub-fill.png'),
  notification: require('../images/notification.png'),
  happy: require('../images/happy.png'),
  calm: require('../images/calm.png'),
  manic: require('../images/manic.png'),
  angry: require('../images/angry.png'),
  relax: require('../images/relax.png'),
  calendar: require('../images/calendar.png'),
  one_on_one: require('../images/one-on-one.png'),
  journal: require('../images/journal.png'),
  library: require('../images/library.png'),
  double_quotes: require('../images/double-quotes.png'),
  right_arrow: require('../images/right-arrow.png'),
  credit: require('../images/credit.png'),
  like: require('../images/like.png'),
  comment: require('../images/comment.png'),
  share: require('../images/share.png'),
  play: require('../images/play.png'),
  down_arrow: require('../images/down-arrow.png'),
  opposite_arrows: require('../images/opposite-arrows.png'),
  time: require('../images/time.png'),
};

export const IMAGES = {
  avatar: require('../images/avatar.png'),
};

export const COLOR = {
  white: '#ffffff',
  black: '#000000',
  xLightGray: '#f4f3f1',
  lightGray: '#d9d8d8',
  gray: '#d6ccc6',
  darkGray: '#8b8b8b',
  green: '#52a06e',
  lightGreen: '#99d9af',
  lightOrange: '#f8d1af',
  xLightOrange: '#fef3e7',
  primary: '#fe8234',
};

export const SIZE = {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  mgXSmall: 8,
  mgSmall: 16,
  mgMedium: 24,
  mgLarge: 28,
  pdSmall: 12,
  pdMedium: 18,
  pdLarge: 24,
  bottomTabsBarHeight: 60,
};

export const FONT = {
  sizeSmall: 12,
  sizeMedium: 20,
  sizeLarge: 28,
};
