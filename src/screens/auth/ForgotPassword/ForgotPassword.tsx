import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '../../../../assets/images/index';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/navigation';

export const ForgotPassword = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  return (
    <View>
      <View
        style={tw(
          'h-10 bg-[#DF8CD1] flex flex-row justify-start items-center px-3 gap-24 ',
        )}>
        <Text onPress={() => navigation.navigate('Login')}>
          <Image source={AllImages.LeftArrow} style={tw('w-3 h-3')} />
        </Text>
        <Text style={tw('font-medium text-sm text-white')}>
          Change Password
        </Text>
      </View>
      <View style={tw('flex-col justify-between items-center gap-24')}>
        <View style={tw('gap-20 py-10')}>
          <Image
            source={AllImages.Female}
            style={tw('h-40 w-40 mx-auto rounded-full')}
          />
          <View style={tw('gap-5 relative')}>
            <TextInput
              style={tw('h-10 w-72 border rounded-xl')}
              placeholder="New Password"
            />
            <TextInput
              style={tw('h-10 w-72 border rounded-xl')}
              placeholder="Confirm Password"
            />
            <Image
              source={AllImages.Female}
              style={tw('h-5 w-5 absolute top-2 right-3')}
            />
            <Image
              source={AllImages.Female}
              style={tw('h-5 w-5 absolute top-[70px] right-3')}
            />
          </View>
        </View>
        <View style={tw('gap-3')}>
          <TouchableOpacity
            style={tw(
              'py-3 px-32 bg-[#4B164C] rounded-3xl font-semibold text-base',
            )}>
            <Text style={tw('text-white text-center')}> Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw(
              'py-3 px-32 bg-white rounded-3xl font-semibold text-base',
            )}>
            <Text style={tw('text-[#4B164C] text-center')}> Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
