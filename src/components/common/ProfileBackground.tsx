import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {AllImages} from '../../../assets/images';
import {useTailwind} from 'tailwind-rn';

export const ProfileBackground = ({
  children,
  header,
}: {
  children: React.ReactNode;
  header: String;
}) => {
  const tw = useTailwind();
  return (
    <ImageBackground
      source={AllImages.AppBg}
      style={tw('h-full w-full relative')}>
      <View style={tw('flex-row justify-between items-center w-full p-2 mt-2')}>
        <View style={tw('flex-row justify-between items-center gap-2')}>
          <TouchableOpacity style={tw('')}>
            <Image source={AllImages.LeftArrow} style={tw('w-3 h-3')} />
          </TouchableOpacity>
          <Text style={tw('text-white font-medium text-lg')}>My profile</Text>
        </View>
        <Text style={tw('text-white font-medium text-base')}>Save Profile</Text>
      </View>
      <View
        style={tw(
          'absolute top-20 rounded-t-3xl h-[90%] bg-white w-full py-5 gap-5',
        )}>
        <View style={tw('flex-col')}>
          <Text style={tw('font-semibold text-2xl text-[#161616] px-3')}>
            {header}
          </Text>
        </View>
        {children}
      </View>
    </ImageBackground>
  );
};
