import {View, Text, Image} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '../../../assets/images/index';

export const Swipe = () => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-1 justify-between gap-2 p-8')}>
      <Image
        source={AllImages.SplashScreen}
        style={tw('h-80 w-full m-auto object-cover rounded-2xl')}
      />
      <View style={tw('flex-row justify-center items-center')}>
        <Image
          source={AllImages.SplashScreen}
          style={tw('w-8 h-7 object-cover')}
        />
        <Image
          source={AllImages.SplashScreen}
          style={tw('w-8 h-7 object-cover')}
        />
        <Image
          source={AllImages.SplashScreen}
          style={tw('w-8 h-7 object-cover')}
        />
      </View>
      <Text style={tw('text-center text-[#4B164C] font-bold text-base')}>
        Olivia jension
      </Text>
      <View style={tw('flex-row justify-center items-center')}>
        <Text style={tw('text-black')}>Art manager</Text>
        <Image
          source={AllImages.SplashScreen}
          style={tw('w-5 h-5 object-cover')}
        />
        <Text style={tw('text-black')}>10 km</Text>
      </View>
      <Text style={tw('text-center font-normal text-sm')}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
      </Text>
    </View>
  );
};
