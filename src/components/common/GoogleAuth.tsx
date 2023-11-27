import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';
import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
	// webClientId: GOOGLE_WEB_CLIENT_ID,
  webClientId:'726813210606-1po2ohj5alsklhpbelbq99deaik3phm2.apps.googleusercontent.com',
  offlineAccess:true,
  // androidClientId:'726813210606-1po2ohj5alsklhpbelbq99deaik3phm2.apps.googleusercontent.com',
	// webClientId: '726813210606-lnkvan6oinp899ii2816f97icc6a8e70.apps.googleusercontent.com',
	// iosClientId: GOOGLE_IOS_CLIENT_ID,
});

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo,"user info")
    // setState({ userInfo });
  } catch (error) {
    console.log(error)
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
      console.log(error,"here")
    }
  }
};
const handleGoogleLogin = async () => {
  // setLoading(true);
  try {
    const response = await signIn();
    const { idToken, user } = response;

    if (idToken) {
      const resp = await authAPI.validateToken({
        token: idToken,
        email: user.email,
      });
      await handlePostLoginData(resp.data);
    }
  } catch (apiError) {
    setError(
      apiError?.response?.data?.error?.message || 'Something went wrong'
    );
  } finally {
    console.log("first")
    // setLoading(false);
  }
};
export const GoogleAuth = () => {
  GoogleSignin.configure();
  const tw = useTailwind();
  const signIn = async () => {
    try {
      // await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
    } catch (error) {
      console.log(error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    // <div className='w-'></div>
    <View style={tw('flex-row justify-between px-5 gap-3')}>
      {/* <TouchableOpacity
        style={tw(
          'flex-row justify-center items-center bg-white rounded-3xl font-semibold text-base w-1/2 py-2 border-2 border-[#4B164C] gap-4',
        )}>
        <Image source={AllImages.Facebook} style={tw('object-cover')} />
        <Text style={tw('text-[#4B164C] text-center font-semibold text-base')}>
          Facebook
        </Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={tw(
          'flex-row justify-center items-center bg-white rounded-3xl font-semibold text-base w-1/2 py-2 border-2 border-[#4B164C] gap-4',
        )} onPress={()=>signIn()}>
        <Image source={AllImages.Gmail} style={tw('object-cover')} />
        <Text style={tw('text-[#4B164C] text-center font-semibold text-base')}>
          Gmail
        </Text>
      </TouchableOpacity>
    </View>
  );
};
