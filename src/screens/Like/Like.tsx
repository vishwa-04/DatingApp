import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '../../../assets/images/index';

export const Like = () => {
  const tw = useTailwind();
  return (
    <View>
      {/* <div className='w-'></div> */}
      <View style={tw('flex-row justify-center gap-2 p-2 mt-3')}>
        <TouchableOpacity style={tw('gap-2')}>
          <Text style={tw('text-[#4b164c]')}>My Likes</Text>
          <View
            style={tw(
              'border-b border border-gray-200 w-1/2 m-auto border-[#4b164c]',
            )}
          />
        </TouchableOpacity>
        <View style={tw('border-l border border-[#df8cd1] ')} />
        <TouchableOpacity style={tw('gap-2')}>
          <Text style={tw('text-[#df8cd1]')}>Likes me</Text>
          <View
            style={tw(
              'border-b border border-gray-200 w-1/2 m-auto border-[#df8cd1]',
            )}
          />
        </TouchableOpacity>
      </View>
      <Text style={tw('text-center p-2')}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
      </Text>
      <View style={tw('flex-row flex-wrap justify-between p-6 gap-y-6')}>
        <Image
          source={AllImages.Tinder}
          style={tw('w-36 h-60 object-cover rounded-2xl')}
        />
        <Image
          source={AllImages.Tinder}
          style={tw('w-36 h-60 object-cover rounded-2xl')}
        />
        <Image
          source={AllImages.Tinder}
          style={tw('w-36 h-60 object-cover rounded-2xl')}
        />
        <Image
          source={AllImages.Tinder}
          style={tw('w-36 h-60 object-cover rounded-2xl')}
        />
        <Image
          source={AllImages.Tinder}
          style={tw('w-36 h-60 object-cover rounded-2xl')}
        />
      </View>
    </View>
  );
};
