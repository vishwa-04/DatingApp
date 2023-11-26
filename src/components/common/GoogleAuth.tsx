import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const GoogleAuth = () => {
  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess:true,
      webClientId:
        '577646306021-i6gqdoaqk436jsee7jvq542t4rcmb959.apps.googleusercontent.com',
        scopes:['profile',"email"]
    });
  }, []);

  const signIn = async () => {
    try {
      // await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error.code);
      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   // operation (e.g. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
    }
  };

  const tw = useTailwind();
  return (
    // <div className='w-'></div>
    <View style={tw('flex-row justify-between px-5 gap-3')}>
      <TouchableOpacity
        style={tw(
          'flex-row justify-center items-center bg-white rounded-3xl font-semibold text-base w-1/2 py-2 border-2 border-[#4B164C] gap-4',
        )}>
        <Image source={AllImages.Facebook} style={tw('object-cover')} />
        <Text style={tw('text-[#4B164C] text-center font-semibold text-base')}>
          Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw(
          'flex-row justify-center items-center bg-white rounded-3xl font-semibold text-base w-1/2 py-2 border-2 border-[#4B164C] gap-4',
        )}
        onPress={() => signIn()}>
        <Image source={AllImages.Gmail} style={tw('object-cover')} />
        <Text style={tw('text-[#4B164C] text-center font-semibold text-base')}>
          Gmail
        </Text>
      </TouchableOpacity>
    </View>
  );
};
