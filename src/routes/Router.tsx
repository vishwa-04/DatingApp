import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  RootBottomTabParamList,
  RootStackCardList,
  RootStackHomeList,
  RootStackParamList,
  RootStackUserList,
} from '@types';
import {CustomBottomTabBar} from '@components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CardSwipe,
  Welcome,
  Login,
  OtpScreen,
  Register,
  Gender,
  ForgotPassword,
  Birthday,
  Home,
  Like,
  BlindDate,
  Quiz,
  StartChatting,
  Calling,
  ChatDetail,
  ChatList,
  Swipe,
  SwipeUserInfo,
  EditProfile,
  Notification,
  Settings,
  UserProfile,
  SwipeLoading,
  LoveClic,
  Password,
  Name,
  SwipeLoadingSecond,
} from '@screens';

const NativeStack = createNativeStackNavigator<RootStackParamList>();
export const Routes = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        initialRouteName="SwipeLoading"
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
        <NativeStack.Screen name={'Password'} component={Password} />
        <NativeStack.Screen name={'Name'} component={Name} />

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
        <NativeStack.Screen name={'ChatDetail'} component={ChatDetail} />
        <NativeStack.Screen name={'SwipeLoading'} component={SwipeLoadingSecond} />
        <NativeStack.Screen name={'LoveClic'} component={LoveClic} />
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
