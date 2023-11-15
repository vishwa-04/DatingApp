import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {AuthBackground} from '@components';
import {useTailwind} from 'tailwind-rn';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';

export const OtpScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();

  return (
    <AuthBackground
      header="Enter Your OTP"
      para="What's your phone number"
      onbackFunc={() => navigation.goBack()}>
      <>
        <View style={tw('flex justify-between absolute top-52 w-full gap-64')}>
          <View
            style={tw(
              'flex justify-between h-48 bg-white rounded-2xl gap-4 px-3 py-9 mx-4',
            )}>
            <TextInput style={tw('h-10 rounded-3xl border')} />
            <View style={tw('flex-row justify-center gap-1')}>
              <Text style={tw('text-black')}>Didn’t receive OTP?</Text>
              <Text style={tw('text-[#4B164C]')}>Resend</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}
              style={tw(
                'py-3 px-16 bg-[#4B164C] rounded-3xl font-semibold text-base',
              )}>
              <Text style={tw('text-white text-center')}>
                Verify & Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw('flex-1 justify-end items-center gap-2 py-5')}>
          <View style={tw('flex-row justify-center gap-1')}>
            <Text style={tw('text-black')}>Already sign in?</Text>
            <Text style={tw('text-[#4B164C]')}>Login</Text>
          </View>
        </View>
      </>
    </AuthBackground>
  );
};
