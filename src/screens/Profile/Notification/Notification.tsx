import {View, Text, Image} from 'react-native';
import React from 'react';
import {AllImages} from '../../../../assets/images/index';
import {useTailwind} from 'tailwind-rn';
import {ProfileBackground} from '../../../components/common/ProfileBackground';
import {ToggleButton} from '../../../components/common/ToggleButton';

export const Notification = () => {
  const tw = useTailwind();

  return (
    <ProfileBackground header={'Notification'}>
      <View>
        <Text style={tw('text-[6f6f6f] bg-[#fafafa] p-3')}>Notification</Text>
        <View style={tw('flex-row justify-between p-3')}>
          <View style={tw('flex-row justify-between gap-2')}>
            <Image
              source={AllImages.Male}
              style={tw('h-5 w-5 object-cover rounded-full')}
            />
            <Text style={tw('font-medium text-sm')}>Jesica arnold</Text>
          </View>
          <ToggleButton />
        </View>
        <View style={tw('flex-row justify-between p-3')}>
          <View style={tw('flex-row justify-between gap-2')}>
            <Image
              source={AllImages.Male}
              style={tw('h-5 w-5 object-cover rounded-full')}
            />
            <Text style={tw('font-medium text-sm')}>Jesica arnold</Text>
          </View>
          <ToggleButton />
        </View>
        <View style={tw('flex-row justify-between p-3')}>
          <View style={tw('flex-row justify-between gap-2')}>
            <Image
              source={AllImages.Male}
              style={tw('h-5 w-5 object-cover rounded-full')}
            />
            <Text style={tw('font-medium text-sm')}>Jesica arnold</Text>
          </View>
          <ToggleButton />
        </View>
      </View>
    </ProfileBackground>
  );
};
