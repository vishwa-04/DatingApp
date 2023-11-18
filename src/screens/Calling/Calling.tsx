import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';

export const Calling = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();

  return (
    <ImageBackground
      source={AllImages.CallingUserBackground}
      style={tw('flex-1')}>
      <View style={tw('flex-1 justify-between')}>
        <TouchableOpacity
          style={tw('p-5 flex-row')}
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={tw('bg-[#df8cd1] py-3 px-4 rounded-xl')}>
            <Image source={AllImages.LeftArrow} style={tw('object-cover')} />
          </View>
        </TouchableOpacity>
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
            <Image
              source={AllImages.CallUserPhoto}
              style={tw('w-20 h-28 rounded-xl')}
            />
          </View>
          <ImageBackground
            source={AllImages.CallingBottom}
            style={tw('flex-row justify-between items-center p-5 relative')}>
            <Image source={AllImages.MessageIcon} style={tw('object-cover')} />
            <View style={tw('flex-col justify-end')}>
              <Text style={tw('text-white pt-10')}>Your call is secure</Text>
            </View>
            <Image source={AllImages.TripleDot} style={tw('object-cover')} />
            <View style={tw('absolute left-[156px] -top-10 flex-row')}>
              <Image
                source={AllImages.Calling}
                style={tw('w-20 h-20 rounded-full')}
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    </ImageBackground>
  );
};
