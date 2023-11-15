import {View, Text, Image} from 'react-native';
import React from 'react';
import {AllImages} from '@assets';
import {useTailwind} from 'tailwind-rn';
import {ProfileBackground} from '@components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';

export const EditProfile = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();

  return (
    <ProfileBackground header={'Edit Profile'} navigate={navigation}>
      <View>
        <Text style={tw('text-[#6f6f6f] bg-[#fafafa] p-3')}>Public Profile</Text>
        <View style={tw('flex-row justify-between p-3')}>
          <View style={tw('flex-row justify-between items-center gap-2')}>
            <Image
              source={AllImages.FirstName}
              style={tw('w-5 h-5 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>First Name</Text>
          </View>
          <Text>bsdjbfsd</Text>
        </View>
        <View style={tw('flex-row justify-between p-3')}>
          <View style={tw('flex-row justify-between items-center gap-2')}>
            <Image
              source={AllImages.Nationality}
              style={tw('w-5 h-5 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>Nationality</Text>
          </View>
          <Text>bsdjbfsd</Text>
        </View>
        <View style={tw('flex-row justify-between p-3')}>
          <View style={tw('flex-row justify-between items-center gap-2')}>
            <Image
              source={AllImages.Emirates}
              style={tw('w-5 h-5 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>Emirates</Text>
          </View>
          <Text>bsdjbfsd</Text>
        </View>
        <View style={tw('flex-row justify-between p-3')}>
          <View style={tw('flex-row justify-between items-center gap-2')}>
            <Image
              source={AllImages.Age}
              style={tw('w-5 h-5 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>Age</Text>
          </View>
          <Text>bsdjbfsd</Text>
        </View>
        <View style={tw('flex-row justify-between p-3')}>
          <View style={tw('flex-row justify-between items-center gap-2')}>
            <Image
              source={AllImages.Occupation}
              style={tw('w-5 h-5 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>Occupation</Text>
          </View>
          <Text>bsdjbfsd</Text>
        </View>
      </View>
      <View>
        <Text style={tw('text-[#6f6f6f] bg-[#fafafa] p-3')}>Private Detail</Text>
        <View style={tw('flex-row justify-between p-3')}>
          <View style={tw('flex-row justify-between items-center gap-2')}>
            <Image
              source={AllImages.Email}
              style={tw('w-5 h-5 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>Email</Text>
          </View>
          <Text>bsdjbfsd</Text>
        </View>
        <View style={tw('flex-row justify-between p-3')}>
          <View style={tw('flex-row justify-between items-center gap-2')}>
            <Image
              source={AllImages.Phone}
              style={tw('w-5 h-5 object-cover')}
            /> 
            <Text style={tw('font-medium text-base text-[#161616]')}>Phone</Text>
          </View>
          <Text>bsdjbfsd</Text>
        </View>
      </View>
    </ProfileBackground>
  );
};
