import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {postGmailSignUp} from '@services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncStorageConst} from '@constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';

GoogleSignin.configure({
  webClientId:
    '726813210606-1po2ohj5alsklhpbelbq99deaik3phm2.apps.googleusercontent.com',
  offlineAccess: true,
});

export const GoogleAuth = (
  props: NativeStackScreenProps<RootStackParamList>,
) => {
  GoogleSignin.configure();
  const tw = useTailwind();

  const signInGmail = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const insertData: any = await postGmailSignUp({
        socialType: 'gmail',
        social_login_token: userInfo?.user?.id,
        email: userInfo?.user?.email,
      });
      console.log(insertData?.data);
      await AsyncStorage.setItem(
        asyncStorageConst.loggedInUserData,
        JSON.stringify(insertData?.data?.data),
      );
      props?.navigation?.navigate('Home');

      console.log(userInfo, 'user info');
    } catch (error: any) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
        console.log(error, 'here');
      }
    }
  };

  return (
    <View style={tw('flex-row justify-between px-5 gap-3')}>
      <TouchableOpacity
        style={tw(
          'flex-row justify-center items-center bg-white rounded-3xl font-semibold text-base w-1/2 py-2 border-2 border-[#4B164C] gap-4',
        )}
        onPress={() => signInGmail()}>
        <Image source={AllImages.Gmail} style={tw('object-cover')} />
        <Text style={tw('text-[#4B164C] text-center font-semibold text-base')}>
          Gmail
        </Text>
      </TouchableOpacity>
    </View>
  );
};
