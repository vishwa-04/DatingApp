import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {AllImages} from '../../../../assets/images/index';
import {useTailwind} from 'tailwind-rn';
import {ProfileBackground} from '../../../components/common/ProfileBackground';

export const Settings = () => {
  const tw = useTailwind();

  return (
    <ProfileBackground header={'Settings'}>
      <View style={tw('flex-1 justify-between')}>
        <View>
          <View style={tw('flex-row justify-between p-3')}>
            <View style={tw('flex-row justify-between gap-2')}>
              <Image
                source={AllImages.Male}
                style={tw('h-5 w-5 object-cover rounded-full')}
              />
              <Text style={tw('font-medium text-sm')}>Jesica arnold</Text>
            </View>
            <Image
              source={AllImages.Male}
              style={tw('h-5 w-5 object-cover rounded-full')}
            />
          </View>
          <View style={tw('flex-row justify-between p-3')}>
            <View style={tw('flex-row justify-between gap-2')}>
              <Image
                source={AllImages.Male}
                style={tw('h-5 w-5 object-cover rounded-full')}
              />
              <Text style={tw('font-medium text-sm')}>Jesica arnold</Text>
            </View>
            <Image
              source={AllImages.Male}
              style={tw('h-5 w-5 object-cover rounded-full')}
            />
          </View>
          <View style={tw('flex-row justify-between p-3')}>
            <View style={tw('flex-row justify-between gap-2')}>
              <Image
                source={AllImages.Male}
                style={tw('h-5 w-5 object-cover rounded-full')}
              />
              <Text style={tw('font-medium text-sm')}>Jesica arnold</Text>
            </View>
            <Image
              source={AllImages.Male}
              style={tw('h-5 w-5 object-cover rounded-full')}
            />
          </View>
        </View>
        <View style={tw('px-3')}>
          <TouchableOpacity
            style={tw(
              'py-3 px-32 bg-[#4B164C] rounded-3xl font-semibold text-base',
            )}>
            <Text style={tw('text-white text-center')}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ProfileBackground>
  );
};
