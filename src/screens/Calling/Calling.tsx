import {View, ImageBackground, Image, Text} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '../../../assets/images/index';

export const Calling = () => {
  const tw = useTailwind();

  return (
    <ImageBackground source={AllImages.UserPhoto} style={tw('flex-1')}>
      <View style={tw('flex-1 justify-between')}>
        {/* <div className="font-normal text-sm justify-end left-"  /> */}
        <View style={tw('p-5 flex-row')}>
          <View style={tw('bg-[#df8cd1] p-3 rounded-xl')}>
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
            <Image source={AllImages.CallUserPhoto} style={tw('w-20 h-28 rounded-xl')} />
          </View>
          <ImageBackground
          source={AllImages.CallingBottom}
            style={tw(
              'flex-row justify-between items-center p-5 relative',
            )}>
            <Image source={AllImages.MessageIcon} style={tw('w-16 h-16')} />
            <View style={tw('flex-col justify-end')}>
              <Text style={tw('text-white pt-10')}>Your call is secure</Text>
            </View>
            <Image source={AllImages.TripleDot} style={tw('w-16 h-16')} />
            <View style={tw('absolute left-[156px] -top-10')}>
              <Image
                source={AllImages.Calling}
                style={tw('absolute w-20 h-20 rounded-full')}
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    </ImageBackground>
  );
};
