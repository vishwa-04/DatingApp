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
        <Text style={tw('text-[#6f6f6f] bg-[#fafafa] p-3')}>General</Text>
        <View style={tw('flex-row justify-between p-3 items-center')}>
          <View style={tw('flex-row justify-between gap-2 items-center')}>
            <Image
              source={AllImages.AllowPushNotification}
              style={tw('h-8 w-8 object-cover ')}
            />
            <Text style={tw('font-medium text-sm')}>Allow Push Notifications</Text>
          </View>
          <ToggleButton />
        </View>
        <View style={tw('flex-row justify-between p-3 items-center')}>
        <View style={tw('flex-row justify-between gap-2 items-center')}>
            <Image
              source={AllImages.MessageNotification}
              style={tw('h-8 w-8 object-cover ')}
            />
            <Text style={tw('font-medium text-sm')}>Message Notifications</Text>
          </View>
          <ToggleButton />
        </View>
        <View style={tw('flex-row justify-between p-3 items-center')}>
        <View style={tw('flex-row justify-between gap-2 items-center')}>
            <Image
              source={AllImages.FriendRequestNotification}
              style={tw('h-8 w-8 object-cover ')}
            />
            <Text style={tw('font-medium text-sm')}>Friend Request Notification</Text>
          </View>
          <ToggleButton />
        </View>
        <View style={tw('flex-row justify-between p-3 items-center')}>
        <View style={tw('flex-row justify-between gap-2 items-center')}>
            <Image
              source={AllImages.LocationSecond}
              style={tw('h-8 w-8 object-cover ')}
            />
            <Text style={tw('font-medium text-sm')}>Location</Text>
          </View>
          <ToggleButton />
        </View>
      </View>
    </ProfileBackground>
  );
};
