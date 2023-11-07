import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import AuthBackground from '../../../components/common/AuthBackground';

export const Login = () => {
  const tw = useTailwind();
  return (
    <AuthBackground
      header="What's your phone number"
      para="What's your phone number">
      <>
        <View
          style={tw(
            'flex justify-between h-44 bg-white rounded-2xl gap-2 px-3 py-9 mx-2',
          )}>
          <TextInput style={tw('h-10 rounded-3xl border')} />
          <TouchableOpacity
            style={tw(
              'py-2 px-32 bg-[#4B164C] rounded-3xl font-semibold text-base',
            )}>
            <Text style={tw('text-white')}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={tw('flex-1 justify-between items-center gap-3')}>
          <View style={tw('flex-row justify-between px-5 gap-3')}>
            <TouchableOpacity
              style={tw(
                'bg-[#4B164C] rounded-3xl font-semibold text-base w-1/2 py-2',
              )}>
              <Text style={tw('text-white text-center')}>Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw(
                'bg-[#4B164C] rounded-3xl font-semibold text-base w-1/2 py-2',
              )}>
              <Text style={tw('text-white text-center')}>Twitter</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={tw('text-black')}>Already sign in? Login</Text>
          </View>
        </View>
      </>
    </AuthBackground>
  );
};
