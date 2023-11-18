import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';

import {useTailwind} from 'tailwind-rn';
import {TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import {AllImages} from '@assets';

export const Welcome = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  return (
    <ImageBackground source={AllImages.AppBg} style={tw('h-full')}>
      {/* <div className='gap-'></div>/ */}
      <View style={tw('flex-1 justify-between items-center')}>
        <View>
          <Image
            source={AllImages.Logo}
            style={tw('h-80 w-52 mx-auto my-auto object-cover')}
          />
        </View>
        <View style={tw('flex justify-center items-center gap-3 py-5')}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={tw(
              'py-3 px-32  bg-white rounded-3xl font-semibold text-base',
            )}>
            <Text style={tw('text-[#4B164C]')}>I'm new here</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={false}
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={tw(
              'py-3 px-24 bg-transparent text-white rounded-3xl font-semibold text-base border border-white cursor-pointer',
            )}>
            <Text style={tw('text-white')}>I've Been here before</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
