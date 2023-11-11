import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, RootBottomTabParamList, RootStackHomeList, RootStackCardList,RootStackUserList} from '../types/navigation';
import {Login} from '../screens/auth/Login/Login';
import {Register} from '../screens/auth/Register/Register';
import {Welcome} from '../screens/auth/Welcome/WelcomeScreen';
import {OtpScreen} from '../screens/auth/OTP/OtpScreen';
import {ForgotPassword} from '../screens/auth/ForgotPassword/ForgotPassword';
import {Gender} from '../screens/gender/Gender';
import {Birthday} from '../screens/birthday/Birthday';
import {Home} from '../screens/home/Home';
import {Swipe} from '../screens/swipe/swipe';
import {SwipeUserInfo} from '../screens/swipeUserInfo/SwipeUserInfo';
import {Like} from '../screens/Like/Like';
import {UserProfile} from '../screens/Profile/UserProfile/UserProfile';
import {EditProfile} from '../screens/Profile/EditProfile/EditProfile';
import {Settings} from '../screens/Profile/Settings/Settings';
import {Notification} from '../screens/Profile/Notification/Notification';
import {BlindDate} from '../screens/BlindDate/BlindDate';
import {Quiz} from '../screens/Quiz/Quiz';
import {StartChatting} from '../screens/StartChatting/StartChatting';
import {Calling} from '../screens/Calling/Calling';
import {CustomBottomTabBar} from '../components/common/BottomTab/CustomBottomBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChatList} from '../screens/chat/ChatList';
import {ChatDetail} from '../screens/chat/ChatDetail';
import { CardSwipe } from '../screens/cardswipe/CardSwipe';

const NativeStack = createNativeStackNavigator<RootStackParamList>();
export const Routes = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          animation: 'none',
          orientation: 'portrait',
          headerShown: false,
        }}>
        <NativeStack.Screen name={'CardSwipe'} component={CardSwipe} />
        <NativeStack.Screen name={'Welcome'} component={Welcome} />
        <NativeStack.Screen name={'Login'} component={Login} />
        <NativeStack.Screen name={'OtpLoginScreen'} component={OtpScreen} />
        <NativeStack.Screen name={'Register'} component={Register} />
        <NativeStack.Screen name={'Gender'} component={Gender} />
        <NativeStack.Screen
          name={'ForgotPassword'}
          component={ForgotPassword}
        />
        <NativeStack.Screen name={'Birthday'} component={Birthday} />
        <NativeStack.Screen name={'Home'} component={Home} />
      
        <NativeStack.Screen name={'Like'} component={Like} />
      
        <NativeStack.Screen name={'Notification'} component={Notification} />
        <NativeStack.Screen name={'BlindDate'} component={BlindDate} />
        <NativeStack.Screen name={'Quiz'} component={Quiz} />
        <NativeStack.Screen name={'StartChatting'} component={StartChatting} />
        <NativeStack.Screen name={'Calling'} component={Calling} />
        <NativeStack.Screen
          name={'BottomNavBar'}
          component={BottomTabNavigator}
        />
        <HomeStack.Screen name={'ChatDetail'} component={ChatDetail} />
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
      <BottomTab.Screen name={'Card'} component={CardTab} />
      <BottomTab.Screen name={'Star'} component={Like} />
      <BottomTab.Screen name={'Smile'} component={BlindDate} />
      <BottomTab.Screen name={'Message'} component={HomeFeed} />
      <BottomTab.Screen name={'User'} component={UserTab} />
    </BottomTab.Navigator>
  );
};
const HomeStack = createNativeStackNavigator<RootStackHomeList>();
export const HomeFeed = (): React.JSX.Element => {
  return (
      <HomeStack.Navigator
        initialRouteName="ChatList"
        screenOptions={{
          animation: 'none',
          orientation: 'portrait',
          headerShown: false,
        }}>
        <HomeStack.Screen name={'ChatList'} component={ChatList} />
        
      </HomeStack.Navigator>
  );
};
const CardStack = createNativeStackNavigator<RootStackCardList>();
export const CardTab = (): React.JSX.Element => {
  return (
      <CardStack.Navigator
        initialRouteName="Swipe"
        screenOptions={{
          animation: 'none',
          orientation: 'portrait',
          headerShown: false,
        }}>
        <CardStack.Screen name={'Swipe'} component={Swipe} />
        <CardStack.Screen name={'SwipeUserInfo'} component={SwipeUserInfo} />
      </CardStack.Navigator>
  );
};
const UserStack = createNativeStackNavigator<RootStackUserList>();
export const UserTab = (): React.JSX.Element => {
  return (
      <UserStack.Navigator
        initialRouteName="UserProfile"
        screenOptions={{
          animation: 'none',
          orientation: 'portrait',
          headerShown: false,
        }}>
         <UserStack.Screen name={'UserProfile'} component={UserProfile} />
        <UserStack.Screen name={'EditProfile'} component={EditProfile} />
        <UserStack.Screen name={'Settings'} component={Settings} />
      </UserStack.Navigator>
  );
};
