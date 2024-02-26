import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParams = {
  TAB: undefined;
};

type PropsPush = NativeStackNavigationProp<RootStackParams>;
type PropsRoute = RouteProp<RootStackParams>;
