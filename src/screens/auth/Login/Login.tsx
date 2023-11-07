import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import AuthBackground from '../../../components/common/AuthBackground';
import {useNavigation} from '@react-navigation/native';
import {GoogleAuth} from '../../../components/common/GoogleAuth';

export const Login = () => {
  let objScreen = {
    Login: 'login',
    password: 'password',
    otp: 'Otp',
  };
  const tw = useTailwind();
  const [screen, setScreen] = useState(objScreen.Login);
  const navigation = useNavigation();
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
      <View style={tw('flex justify-between absolute top-52 w-full gap-72')}>
      <View
            style={tw(
              'flex justify-between h-44 bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
            )}>
            <TextInput style={tw('h-10 rounded-3xl border')} />
            <TouchableOpacity
              style={tw(
                'py-3 px-32 bg-[#4B164C] rounded-3xl font-semibold text-base',
              )}>
              <Text
                style={tw('text-white text-center')}
                onPress={() => setScreen(objScreen.password)}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw('flex-1 justify-between items-center gap-2')}>
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
          </View>
      ) : (
        <View style={tw('flex justify-between absolute top-52 w-full gap-72')}>
        <View
            style={tw(
              'flex justify-between h-44 bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
            )}>
            <TextInput style={tw('h-10 rounded-3xl border')} />
            <Text style={tw('text-[#4B164C] text-center')}>
              Forgot Password?
            </Text>
            <TouchableOpacity
              style={tw(
                'py-3 px-32 bg-[#4B164C] rounded-3xl font-semibold text-base',
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
          <View style={tw('flex-1 justify-between items-center gap-3')}>
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
          </View>
      )}
    </AuthBackground>
  );
};
