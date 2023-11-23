import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';

import {useTailwind} from 'tailwind-rn';
import {TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import {AllImages} from '@assets';

export const Welcome = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  return (
    <ImageBackground source={AllImages.AppBg} style={tw('h-full')}>
      {/* <div className='gap-'></div>/ */}
      <View style={[tw('flex-1 justify-between items-center'),{marginTop:"25%"}]}>
        <View>
          <Image
            source={AllImages.Logo}
            style={tw('h-80 w-52 mx-auto my-auto object-cover')}
          />
        </View>
        <View style={tw('flex justify-center items-center gap-3 p-5 w-full')}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={tw(
              'py-2 bg-white rounded-3xl border-4 border-white w-full',
            )}>
            <Text style={[tw('text-center text-[#4B164C] font-bold text-lg w-full')]}>I'm new here</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={false}
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={[tw(
              'py-2 bg-transparent  rounded-3xl  border-4 border-white cursor-pointer w-full',
            )]}>
            <Text style={[tw('text-center text-white font-bold text-lg w-full')]}>I've Been here before</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
