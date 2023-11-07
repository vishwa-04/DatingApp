import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import AuthBackground from '../../../components/common/AuthBackground';
import {useNavigation} from '@react-navigation/native';
import {GoogleAuth} from '../../../components/common/GoogleAuth';

export const Register = () => {
  let objScreen = {
    Register: 'register',
    Password: 'password',
    Name: 'name',
  };
  const tw = useTailwind();
  const [screen, setScreen] = useState(objScreen.Register);
  const navigation = useNavigation();

  return (
    <AuthBackground
      header={
        screen === objScreen.Register
          ? "What's your phone number"
          : screen === objScreen.Password
          ? 'Enter Your Password'
          : 'Your Name is...'
      }
      para="What's your phone number"
      onbackFunc={
        screen === objScreen.Register
          ? () => navigation.navigate('Welcome')
          : screen === objScreen.Password
          ? () => setScreen(objScreen.Register)
          : () => setScreen(objScreen.Password)
      }>
      {screen === objScreen.Register ? (
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
                onPress={() => setScreen(objScreen.Password)}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw('flex-1 justify-between items-center gap-2')}>
            <GoogleAuth />
            <View style={tw('flex-row justify-center gap-1')}>
              <Text style={tw('text-black')}>Already sign in?</Text>
              <Text
                style={tw('text-[#4B164C]')}
                onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </View>
          </View>
        </View>
      ) : screen === objScreen.Password ? (
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
                  setScreen(objScreen.Name);
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw('flex-1 justify-between items-center gap-2')}>
            <GoogleAuth />

            <View style={tw('flex-row justify-center gap-1')}>
              <Text style={tw('text-black')}>Already sign in?</Text>
              <Text
                style={tw('text-[#4B164C]')}
                onPress={() => navigation.navigate('Login')}>
                Login
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OtpLoginScreen');
              }}
              style={tw(
                'py-3 px-32 bg-[#4B164C] rounded-3xl font-semibold text-base',
              )}>
              <Text style={tw('text-white text-center')}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </AuthBackground>
  );
};
