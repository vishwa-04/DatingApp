import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {AuthBackground} from '@components';
import {GoogleAuth} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';

export const Login = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  let objScreen = {
    Login: 'login',
    password: 'password',
    otp: 'Otp',
  };
  const tw = useTailwind();
  const [screen, setScreen] = useState(objScreen.Login);
  return (
    <AuthBackground
      header={
        screen === objScreen.Login
          ? "What's your phone number"
          : 'Enter Your Password'
      }
      para="What's your phone number"
      onbackFunc={
        screen === objScreen.Login
          ? () => navigation.navigate('Welcome')
          : () => setScreen(objScreen.Login)
      }>
      {screen === objScreen.Login ? (
        <>
          <View style={tw('flex justify-between absolute top-52 w-full')}>
            <View
              style={tw(
                'flex justify-between h-44 bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
              )}>
              <TextInput style={tw('h-10 rounded-3xl border')} />
              <TouchableOpacity
                style={tw(
                  'py-3 bg-[#4B164C] rounded-3xl font-semibold text-base',
                )}>
                <Text
                  style={tw('text-white text-center')}
                  onPress={() => setScreen(objScreen.password)}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw('flex-1 justify-end items-center gap-2 py-5')}>
            <GoogleAuth />
            <View style={tw('flex-row justify-center gap-1')}>
              <Text style={tw('text-black')}>New user?</Text>
              <Text
                style={tw('text-[#4B164C]')}
                onPress={() => navigation.navigate('Register')}>
                Register
              </Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View
            style={tw('flex justify-between absolute top-52 w-full')}>
            <View
              style={tw(
                'flex justify-between h-44 bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
              )}>
              <TextInput style={tw('h-10 rounded-3xl border')} />
              <TouchableOpacity
                style={tw(
                  'py-3 bg-[#4B164C] rounded-3xl font-semibold text-base',
                )}>
                <Text
                  style={tw('text-white text-center')}
                  onPress={() => {
                    navigation.navigate('OtpLoginScreen');
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw('flex-1 justify-end items-center gap-2 py-5')}>
            <GoogleAuth />
            <View style={tw('flex-row justify-center gap-1')}>
              <Text
                style={tw('text-[#4B164C]')}
                onPress={() => navigation.navigate('ForgotPassword')}>
                Forgot Password?
              </Text>
            </View>
          </View>
        </>
      )}
    </AuthBackground>
  );
};
