import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackCardList} from '@types';

export const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackCardList>) => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-1 justify-between p-5')}>
      <View style={tw('flex-col justify-between gap-3 mt-20 ')}>
        {/* <div className="font-semibold text- font- leading- text- gap-" /> */}
        <Image
          source={AllImages.Home}
          style={tw('h-64 w-64 m-auto object-cover')}
        />
        <Text
          style={tw('font-semibold text-sm text-black leading-6 text-center')}>
          Lorem Ipsum has been the industry's
        </Text>
        <Text style={tw('font-normal text-xs text-black text-center px-3')}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </Text>
      </View>
      <View style={tw('flex-col justify-between gap-3 px-5 bg-transparent')}>
        <Text style={tw('font-normal text-xs text-[#636363] text-center')}>
          Lorem Ipsum has been the industry's
        </Text>
        <TouchableOpacity
          style={tw(
            'py-3 px-32 bg-[#4B164C] rounded-3xl font-semibold text-base',
          )}>
          <Text
            style={tw('text-white text-center')}
            onPress={() => navigation.navigate('SwipeLoading')}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
