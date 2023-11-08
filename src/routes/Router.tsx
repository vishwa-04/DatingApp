import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {Login} from '../screens/auth/Login/Login';
import {Register} from '../screens/auth/Register/Register';
import {Welcome} from '../screens/auth/Welcome/WelcomeScreen';
import {OtpScreen} from '../screens/auth/OTP/OtpScreen';
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

const NativeStack = createNativeStackNavigator<RootStackParamList>();
export const Routes = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        initialRouteName="Notification"
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
        <NativeStack.Screen name={'Home'} component={Home} />
        <NativeStack.Screen name={'Swipe'} component={Swipe} />
        <NativeStack.Screen name={'SwipeUserInfo'} component={SwipeUserInfo} />
        <NativeStack.Screen name={'Like'} component={Like} />
        <NativeStack.Screen name={'UserProfile'} component={UserProfile} />
        <NativeStack.Screen name={'EditProfile'} component={EditProfile} />
        <NativeStack.Screen name={'Settings'} component={Settings} />
        <NativeStack.Screen name={'Notification'} component={Notification} />
        <NativeStack.Screen name={'BlindDate'} component={BlindDate} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};
