import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';

export const GoogleAuth = () => {
  const tw = useTailwind();
  return (
    // <div className='w-'></div>
    <View style={tw('flex-row justify-between px-5 gap-3')}>
      <TouchableOpacity
        style={tw(
          'flex-row justify-center items-center bg-white rounded-3xl font-semibold text-base w-1/2 py-2 border-2 border-[#4B164C] gap-4',
        )}>
        <Image source={AllImages.Facebook} style={tw('h-5 w-5 object-cover')} />
        <Text style={tw('text-[#4B164C] text-center font-semibold text-base')}>
        Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw(
          'flex-row justify-center items-center bg-white rounded-3xl font-semibold text-base w-1/2 py-2 border-2 border-[#4B164C] gap-4',
        )}>
        <Image source={AllImages.Gmail} style={tw('h-7 w-7 object-cover')} />
        <Text style={tw('text-[#4B164C] text-center font-semibold text-base')}>
          Gmail
        </Text>
      </TouchableOpacity>
    </View>
  );
};
