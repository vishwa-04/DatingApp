import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AuthBackground, ButtonLoader} from '@components';
import {useTailwind} from 'tailwind-rn';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import OtpInputs from 'react-native-otp-inputs';
import Toast from 'react-native-simple-toast';
import {OtpVerify} from '@services';
import {apiResponse} from '@constants';

export const OtpPasswordScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  const [checkOtp, setCheckOtp] = useState('');
  const [loader, setLoader] = useState(false);
  const handleCheck = async () => {
    try {
      setLoader(true);
      const response: any = await OtpVerify(checkOtp);
      if (response?.data?.status === apiResponse.fail) {
        Toast.showWithGravityAndOffset(
          response?.data?.message || '',
          Toast.LONG,
          Toast.TOP,
          0, // X Offset
          30, // Y Offset - Adjust this value as needed
        );
        return;
      }
      navigation.navigate('Password');
    } catch (error: any) {
      Toast.showWithGravityAndOffset(
        error?.message,
        Toast.LONG,
        Toast.TOP,
        0, // X Offset
        30, // Y Offset - Adjust this value as needed
      );
    } finally {
      setLoader(false);
    }
  };
  return (
    <AuthBackground
      header="Enter Your OTP"
      para="What's your phone number"
      onbackFunc={() => navigation.goBack()}>
      <>
        <View style={tw('flex absolute top-52 w-full gap-4')}>
          <View style={tw('h-48 bg-white rounded-2xl gap-4 px-3 py-9 mx-4')}>
            {/* <TextInput style={tw('h-10 rounded-3xl border')} /> */}

            <OtpInputs
              style={{flexDirection: 'row', justifyContent: 'center'}}
              numberOfInputs={4}
              handleChange={code => {
                setCheckOtp(code); // This will update the local state
              }}
              autofillFromClipboard={false}
              inputStyles={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: '#4B164C',
                height: 40,
                width: 40,
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                marginHorizontal: 10,
              }}
              textAlign="center"
              textAlignVertical="center"
            />
            <View style={tw('flex-row justify-center gap-1')}>
              <Text style={tw('text-black')}>Didn't receive OTP?</Text>
              <Text style={tw('text-[#4B164C]')}>Resend</Text>
            </View>
            <TouchableOpacity
              disabled={checkOtp.length !== 4}
              onPress={() => {
                handleCheck();
              }}
              style={[
                tw(
                  `py-3 px-16 bg-[#4B164C] rounded-3xl font-semibold text-base ${
                    checkOtp.length !== 4 ? 'opacity-50' : ''
                  }`,
                ),
                // {opacity: checkOtp.length < 4 ? 0.5 : 1},
              ]}>
              {loader ? (
                <ButtonLoader />
              ) : (
                <Text style={tw('text-white text-center')}>
                  Verify & Continue
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw('flex-1 justify-end items-center gap-2 py-5')}>
          <View style={tw('flex-row justify-center gap-1')}>
            <Text style={tw('text-black')}>Already sign in?</Text>
            <Text style={tw('text-[#4B164C]')}>Login</Text>
          </View>
        </View>
      </>
    </AuthBackground>
  );
};
