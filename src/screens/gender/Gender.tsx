import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScreenHeader} from '../../components/common/Header';
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
      <View style={tw('pt-[20%] w-full')}>
        <Text style={tw('text-center text-black text-l mb-4')}>Choose Gender</Text>
      </View>
      <View style={tw('flex-row justify-around w-full flex-grow')}>
        <TouchableOpacity style={tw('items-center')}>
          <Image source={AllImages.Male} style={tw('h-40 w-40')} />
          <Text style={tw('text-l text-black text-center')}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw('items-center')}>
          <Image source={AllImages.Female} style={tw('h-40 w-40')} />
          <Text style={tw('text-l text-black text-center')}>Female</Text>
        </TouchableOpacity>
      </View>
      <View style={tw('w-full px-6 pb-6')}>
        <View  style={tw('items-center mb-3 text-black')}>
            <Text>Press continue to continue</Text>
        </View>
        <TouchableOpacity
          style={tw('py-3 bg-[#4B164C] rounded-3xl items-center')}
          onPress={() => {navigation.navigate('Birthday')}}>
          <Text style={tw('text-white text-lg')}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
