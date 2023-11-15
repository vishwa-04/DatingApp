import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import {AllImages} from '@assets';
import {useTailwind} from 'tailwind-rn';
import {ProfileBackground} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';

export const Settings = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();

  return (
    <ProfileBackground header={'Settings'} navigate={navigation}>
      <View style={tw('flex-1 justify-between')}>
        <View>
          <View style={tw('flex-row justify-between p-3 items-center')}>
            <View style={tw('flex-row justify-between gap-2 items-center')}>
              <Image
                source={AllImages.Feedback}
                style={tw('h-5 w-5 object-cover')}
              />
              <Text style={tw('font-medium text-base text-[#161616]')}>
                Feedback
              </Text>
            </View>
            <Image
              source={AllImages.Polygon}
              style={tw('h-5 w-5 object-cover')}
            />
          </View>
          <View style={tw('flex-row justify-between p-3 items-center')}>
            <View style={tw('flex-row justify-between gap-2 items-center')}>
              <Image
                source={AllImages.Help}
                style={tw('h-5 w-5 object-cover')}
              />
              <Text style={tw('font-medium text-base text-[#161616]')}>
                Help
              </Text>
            </View>
            <Image
              source={AllImages.Polygon}
              style={tw('h-5 w-5 object-cover')}
            />
          </View>
          <Pressable
            style={tw('flex-row justify-between p-3 items-center')}
            onPress={() => navigation.navigate('Notification')}>
            <View style={tw('flex-row justify-between gap-2 items-center')}>
              <Image
                source={AllImages.Notification}
                style={tw('h-5 w-5 object-cover')}
              />
              <Text style={tw('font-medium text-base text-[#161616]')}>
                Notification
              </Text>
            </View>
            <Image
              source={AllImages.Polygon}
              style={tw('h-5 w-5 object-cover')}
            />
          </Pressable>
          <View style={tw('flex-row justify-between p-3 items-center')}>
            <View style={tw('flex-row justify-between gap-2 items-center')}>
              <Image
                source={AllImages.PrivacyPolicy}
                style={tw('h-5 w-5 object-cover')}
              />
              <Text style={tw('font-medium text-base text-[#161616]')}>
                Privacy Policy
              </Text>
            </View>
            <Image
              source={AllImages.Polygon}
              style={tw('h-5 w-5 object-cover')}
            />
          </View>
          <View style={tw('flex-row justify-between p-3 items-center')}>
            <View style={tw('flex-row justify-between gap-2 items-center')}>
              <Image
                source={AllImages.TermsOfService}
                style={tw('h-5 w-5 object-cover')}
              />
              <Text style={tw('font-medium text-base text-[#161616]')}>
                Terms Of Service
              </Text>
            </View>
            <Image
              source={AllImages.Polygon}
              style={tw('h-5 w-5 object-cover')}
            />
          </View>
        </View>
        <View style={tw('px-3')}>
          <TouchableOpacity
            style={tw(
              'py-3 bg-[#4B164C] rounded-3xl font-semibold text-base',
            )}>
            <Text style={tw('text-white text-center')}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ProfileBackground>
  );
};
