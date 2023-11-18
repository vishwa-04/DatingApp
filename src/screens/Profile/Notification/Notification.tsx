import {View, Text, Image} from 'react-native';
import React from 'react';
import {AllImages} from '@assets';
import {useTailwind} from 'tailwind-rn';
import {ProfileBackground, ToggleButton} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
export const Notification = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  return (
    <ProfileBackground header={'Notification'} navigate={navigation}>
      <View>
        <Text style={tw('text-[#6f6f6f] bg-[#fafafa] p-3')}>General</Text>
        <View style={tw('flex-row justify-between p-3 items-center')}>
          <View style={tw('flex-row justify-between gap-2 items-center')}>
            <Image
              source={AllImages.AllowPushNotification}
              style={tw('object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Allow Push Notifications
            </Text>
          </View>
          <ToggleButton />
        </View>
        <View style={tw('flex-row justify-between p-3 items-center')}>
          <View style={tw('flex-row justify-between gap-2 items-center')}>
            <Image
              source={AllImages.MessageNotification}
              style={tw('object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Message Notifications
            </Text>
          </View>
          <ToggleButton />
        </View>
        <View style={tw('flex-row justify-between p-3 items-center')}>
          <View style={tw('flex-row justify-between gap-2 items-center')}>
            <Image
              source={AllImages.FriendRequestNotification}
              style={tw('object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Friend Request Notification
            </Text>
          </View>
          <ToggleButton />
        </View>
        <View style={tw('flex-row justify-between p-3 items-center')}>
          <View style={tw('flex-row justify-between gap-2 items-center')}>
            <Image
              source={AllImages.LocationSecond}
              style={tw('object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Location
            </Text>
          </View>
          <ToggleButton />
        </View>
      </View>
    </ProfileBackground>
  );
};
