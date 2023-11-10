import {View, ImageBackground, Image, Text} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '../../../assets/images/index';

export const Calling = () => {
  const tw = useTailwind();

  return (
    <ImageBackground source={AllImages.UserPhoto} style={tw('flex-1')}>
      <View style={tw('flex-1 justify-between')}>
        {/* <div className="font-normal text-sm justify-end w-"  /> */}
        <View style={tw('p-5 flex-row')}>
          <View style={tw('bg-[#df8cd1] p-3')}>
            <Image source={AllImages.LeftArrow} style={tw('w-3 h-5')} />
          </View>
        </View>
        <View>
          <View style={tw('flex-row justify-between items-center p-5')}>
            <View style={tw('gap-3')}>
              <Text style={tw('font-bold text-2xl text-white')}>
                Jolly Copper
              </Text>
              <Text style={tw('font-normal text-sm text-white')}>Artist </Text>
              <Text
                style={tw(
                  'font-normal text-sm bg-black rounded-xl text-white p-2 text-center w-3/4',
                )}>
                28-02-2023
              </Text>
            </View>
            <Image source={AllImages.Male} style={tw('w-20 h-28 rounded-xl')} />
          </View>
          <View
            style={tw(
              'flex-row justify-between items-center p-5 relative bg-[#df8cd1]',
            )}>
            <Image source={AllImages.UserIcon} style={tw('w-16 h-16')} />
            <View style={tw('flex-col justify-end')}>
              <Text style={tw('text-white pt-10')}>Your call is secure</Text>
            </View>
            <Image source={AllImages.UserIcon} style={tw('w-16 h-16')} />
            <View style={tw('absolute left-36 -top-10')}>
              <Image
                source={AllImages.UserPhoto}
                style={tw('absolute w-20 h-20 rounded-full')}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
