import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {AllImages} from '@assets';
import {useTailwind} from 'tailwind-rn';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';

export const BlindDate = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();

  return (
    <ImageBackground
      source={AllImages.AppBg}
      style={tw('h-full w-full relative')}>
      <TouchableOpacity
        style={tw('absolute top-5 mx-3')}
        onPress={() => navigation.goBack()}>
        <Image source={AllImages.LeftArrow} style={tw('w-3 h-3')} />
      </TouchableOpacity>
    
      <View
        style={tw(
          'absolute top-1/4 h-3/4 bg-white w-full p-3 flex-col justify-end pb-16',
        )}>
        <View style={[tw('gap-5 rounded-2xl'),{bottom:15}]}>
          <ImageBackground
            source={AllImages.BlindDateBackground}
            style={tw('flex-row justify-between items-center p-3')}>
            <View style={tw('gap-3')}>
              <Text style={tw('font-extrabold text-base text-white')}>
                Telepath
              </Text>
              <Text style={tw('font-normal text-xs text-center text-white')}>
                No waiting. Start voice chat now
              </Text>
              <TouchableOpacity
                style={tw(
                  'p-2 bg-white rounded-3xl font-semibold text-base w-20',
                )}
                onPress={() => {
                  navigation.navigate('Calling');
                }}>
                <Text
                  style={tw('text-[#B928A0] text-center font-bold text-xs')}>
                  Start
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              source={AllImages.TelePhone}
              style={tw('h-20 w-16 object-cover px-3')}
            />
          </ImageBackground>
          <View style={tw('flex-row justify-between gap-2')}>
            <Pressable
            onPress={()=>{navigation.navigate('LoveClic')}}
              style={tw(
                'flex-row justify-start items-center gap-2 h-20 rounded-2xl bg-[#ffb3f2] w-1/2 px-3',
              )}>
              <Image
                source={AllImages.Alarm}
                style={tw('h-8 w-8 object-cover')}
              />
              <Text style={tw('font-bold text-xs text-[#B928A0]')}>
                Love line Clic
              </Text>
            </Pressable>
            <Pressable
            onPress={() => {
              navigation.navigate('Quiz')}}
              style={tw(
                'flex-row justify-start items-center gap-2 h-20 rounded-2xl bg-[#ffb3f2] w-1/2 px-3',
              )}>
              <Image
                source={AllImages.DatingQuiz}
                style={tw('h-8 w-8 object-cover')}
              />
             
                <Text style={tw('font-bold text-xs text-[#B928A0]')}>
                  Dating Quiz
                </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={tw('absolute w-full top-24')}>
        <View style={tw('flex-col justify-center items-center')}>
          <Image source={AllImages.Male} style={tw('h-40 w-40 object-cover')} />
          <Text
            style={tw('font-normal text-xs text-center px-5 py-3 text-black')}>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
