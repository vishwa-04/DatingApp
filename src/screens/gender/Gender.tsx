import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '../../../assets/images/index';

export const Gender = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();

  return (
    <View style={tw('flex-1 items-center')}>
      <View style={tw('pt-[30%] w-full')}>
        <Text style={tw('text-center text-black text-xl font-bold mb-10')}>
          Choose Gender
        </Text>
      </View>
      <View style={tw('flex-row justify-around w-full flex-grow')}>
        <TouchableOpacity style={tw('items-center')}>
          <Image source={AllImages.Male} style={tw('h-40 w-40')} />
          <View style={tw('mt-3')}>
          <Text style={tw('text-l text-black text-center font-bold')}>
            Male
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={tw('items-center')}>
          <Image source={AllImages.Female} style={tw('h-40 w-40')} />
          <View style={tw('mt-3')}>
            <Text style={tw('text-l text-black text-center font-bold')}>
              Female
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw('w-full px-6 pb-6')}>
        <View style={tw('items-center mb-3 text-black')}>
          <Text>Press continue to continue</Text>
        </View>
        <TouchableOpacity
          style={tw('py-3 bg-[#4B164C] rounded-3xl items-center')}
          onPress={() => {
            navigation.navigate('Birthday');
          }}>
          <Text style={tw('text-white text-lg')}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
