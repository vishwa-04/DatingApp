import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, RootBottomTabParamList} from '../types/navigation';
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
        <NativeStack.Screen name={'Swipe'} component={Swipe} />
        <NativeStack.Screen name={'SwipeUserInfo'} component={SwipeUserInfo} />
        <NativeStack.Screen name={'Like'} component={Like} />
        <NativeStack.Screen name={'UserProfile'} component={UserProfile} />
        <NativeStack.Screen name={'EditProfile'} component={EditProfile} />
        <NativeStack.Screen name={'Settings'} component={Settings} />
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
      <BottomTab.Screen name={'Card'} component={Home} />
      <BottomTab.Screen name={'Star'} component={Like} />
      <BottomTab.Screen name={'Smile'} component={BlindDate} />
      <BottomTab.Screen name={'Message'} component={ChatList} />
      <BottomTab.Screen name={'User'} component={UserProfile} />
    </BottomTab.Navigator>
  );
};
