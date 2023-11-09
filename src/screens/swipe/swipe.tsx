import {View, Text, Image} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '../../../assets/images/index';

export const Swipe = () => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-1 justify-center gap-5 px-4')}>
      {/* <div className='w-40 h-9'></div> */}
      <Image
        source={AllImages.LovelineText}
        style={tw('w-40 h-9 m-auto object-cover rounded-2xl')}
      />
      <Image
        source={AllImages.UserSwipe}
        style={tw('h-80 w-full m-auto object-cover rounded-2xl')}
      />
      <View style={tw('flex-row justify-center items-center gap-5')}>
        <Image source={AllImages.Close} style={tw('w-8 h-7 object-cover')} />
        <Image source={AllImages.Heart} style={tw('w-8 h-7 object-cover')} />
        <Image source={AllImages.Star} style={tw('w-8 h-7 object-cover')} />
      </View>
      <Text style={tw('text-center text-[#4B164C] font-bold text-base')}>
        Olivia jension
      </Text>
      <View style={tw('flex-row justify-center items-center gap-3')}>
        <Text style={tw('text-black')}>Art manager</Text>
        <Image source={AllImages.Location} style={tw('w-5 h-6 object-cover')} />
        <Text style={tw('text-black')}>10 km</Text>
      </View>
      <Text style={tw('text-center font-normal text-sm')}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
      </Text>
    </View>
  );
};
