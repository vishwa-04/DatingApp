import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {Login} from '../screens/auth/Login/Login';
import {Register} from '../screens/auth/Register/Register';
import { Welcome } from '../screens/auth/Welcome/WelcomeScreen';

const NativeStack = createNativeStackNavigator<RootStackParamList>();
export const Routes = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          animation: 'none',
          orientation: 'portrait',
          headerShown: false,
        }}>
        <NativeStack.Screen name={'Welcome'} component={Welcome} />
        <NativeStack.Screen name={'Login'} component={Login} />
        <NativeStack.Screen name={'Register'} component={Register} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};
