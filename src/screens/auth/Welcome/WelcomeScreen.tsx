import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {AllImages} from '../../../../assets/images';

import {useTailwind} from 'tailwind-rn';
import {ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Welcome = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={AllImages.AppBg}
      style={{height: 800, width: 'auto'}}>
      <ScrollView>
        {/* <div className='gap-'></div>/ */}
        <View
          style={tw(
            'flex flex-col justify-between items-center h-full gap-64',
          )}>
          <View>
            <Image
              source={AllImages.Logo}
              style={tw('h-64 w-36 mx-auto my-auto object-cover')}
            />
          </View>
          <View style={tw('flex justify-center items-center gap-3')}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}
              style={tw(
                'py-2 px-32 text-[#4B164C] bg-white rounded-xl font-semibold text-base',
              )}>
              <Text>I'm new here</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={false}
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={tw(
                'py-2 px-24 bg-transparent text-white rounded-xl font-semibold text-base border-2 border-white cursor-pointer',
              )}>
              <Text>I've Been here before</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
