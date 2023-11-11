import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AllImages} from '../../../assets/images/index';
import {useTailwind} from 'tailwind-rn';

export const StartChatting = () => {
  const tw = useTailwind();
  return (
    <ImageBackground source={AllImages.AppBg} style={tw('h-full')}>
      {/* <div className='text-base text-'></div> */}
      <View
        style={tw(
          'flex-col items-center justify-center h-2/3 w-80 bg-white m-auto rounded-2xl gap-20',
        )}>
        <View style={tw('gap-3')}>
          <Image source={AllImages.StartChattingUser} style={tw('w-40 h-40 rounded-full')} />
          <View style={tw('flex-row justify-center items-center gap-2')}>
            <View
              style={tw(
                'flex-row justify-center items-center gap-2 p-1 border border-[#D9D9D9] rounded-xl',
              )}>
              <Image source={AllImages.StartChattingLike} style={tw('w-4 h-4')} />
              <Text style={tw('text-black')}>25</Text>
            </View>
            <View
              style={tw(
                'flex-row justify-center items-center gap-2 p-1 border border-[#D9D9D9] rounded-xl',
              )}>
              <Image source={AllImages.UserIcon} style={tw('w-4 h-4')} />
              <Text style={tw('text-black')}>Jension</Text>
            </View>
          </View>
        </View>
        <View style={tw('gap-3')}>
          <View style={tw('py-5 mx-2 px-3 bg-[#ffd9f9] rounded-2xl')}>
            <Text style={tw('text-center text-black')}>
              Lorem Ipsum has been the i Lorem Ipsum has been the i
            </Text>
          </View>
          <View style={tw('flex-row justify-center items-center')}>
            <TouchableOpacity
              style={tw(
                'py-3 px-5 bg-[#4B164C] rounded-3xl font-semibold text-base',
              )}>
              <Text
                style={tw('text-white font-semibold text-center text-base')}>
                Start Chatting
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
