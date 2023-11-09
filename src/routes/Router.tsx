import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, RootBottomTabParamList} from '../types/navigation';
import {Login} from '../screens/auth/Login/Login';
import {Register} from '../screens/auth/Register/Register';
import {Welcome} from '../screens/auth/Welcome/WelcomeScreen';
import {OtpScreen} from '../screens/auth/OTP/OtpScreen';
import {Gender} from '../screens/gender/Gender';
import {Birthday} from '../screens/birthday/Birthday';
import {CustomBottomTabBar} from '../components/common/BottomTab/CustomBottomBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UserProfile} from '../screens/Profile/UserProfile';
import {LikePage} from '../screens/likepage/LikePage';
import {ChatList} from '../screens/chat/ChatList';
import {ChatDetail} from '../screens/chat/ChatDetail';
import {CardSwipe} from '../screens/cardswipe/CardSwipe';
import {BlindDate} from '../screens/blindDate/BlindDate';

const NativeStack = createNativeStackNavigator<RootStackParamList>();
export const Routes = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        initialRouteName="BottomNavBar"
        screenOptions={{
          animation: 'none',
          orientation: 'portrait',
          headerShown: false,
        }}>
        <NativeStack.Screen name={'Welcome'} component={Welcome} />
        <NativeStack.Screen name={'Login'} component={Login} />
        <NativeStack.Screen name={'OtpLoginScreen'} component={OtpScreen} />
        <NativeStack.Screen name={'Register'} component={Register} />
        <NativeStack.Screen name={'Gender'} component={Gender} />
        <NativeStack.Screen name={'Birthday'} component={Birthday} />
        <NativeStack.Screen name={'BottomNavBar'} component={BottomTabNavigator} />
        <NativeStack.Screen name={'ChatDetail'} component={ChatDetail} />

      </NativeStack.Navigator>
    </NavigationContainer>
  );
};
const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Card"
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#4B164C',
        tabBarInactiveTintColor: 'rgba(0,0,0,0.9)',
      }}>
      <BottomTab.Screen name={'Card'} component={CardSwipe} />
      <BottomTab.Screen name={'Star'} component={LikePage} />
      <BottomTab.Screen name={'Smile'} component={BlindDate} />
      <BottomTab.Screen name={'Message'} component={ChatList} />
      <BottomTab.Screen name={'User'} component={UserProfile} />
    </BottomTab.Navigator>
  );
};
