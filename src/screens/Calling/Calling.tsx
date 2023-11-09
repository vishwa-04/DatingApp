import {View, ImageBackground, Image, Text} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '../../../assets/images/index';

export const Calling = () => {
  const tw = useTailwind();

  return (
    <ImageBackground source={AllImages.AppBg} style={tw('flex-1')}>
      <View style={tw('flex-1 justify-between')}>
        {/* <div className="h-" /> */}
        <View style={tw('p-5')}>
          <Image source={AllImages.LeftArrow} style={tw('w-3 h-5')} />
        </View>
        <View>
          <View style={tw('flex-row justify-between items-center p-5')}>
            <View style={tw('gap-3')}>
              <Text>sdjfbjh</Text>
              <Text>sdjfbjh</Text>
              <Text>sdjfbjh</Text>
            </View>
            <Image source={AllImages.Male} style={tw('w-20 h-28')} />
          </View>
          <View style={tw('flex-row justify-between items-center p-5')} />
        </View>
      </View>
    </ImageBackground>
  );
};
