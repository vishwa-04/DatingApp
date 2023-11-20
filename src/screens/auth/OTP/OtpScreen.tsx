import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AuthBackground} from '@components';
import {useTailwind} from 'tailwind-rn';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import OtpInputs from 'react-native-otp-inputs';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {IOTP} from '@validations';
import Toast from 'react-native-simple-toast';
import {OtpVerify} from '@services';
import {Controller, FieldError} from 'react-hook-form';

export const OtpScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  const [checkOtp, setCheckOtp] = useState('');
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(IOTP),
  });
  const [loader, setLoader] = useState(false);
  const onSubmit = async (data: any) => {
    try {
      setLoader(true);
      const response = await OtpVerify(data.otp);
      console.log(response?.data);
      navigation.navigate('OtpLoginScreen');
    } catch (error: any) {
      Toast.showWithGravityAndOffset(
        error?.message,
        Toast.LONG,
        Toast.TOP,
        0, // X Offset
        30, // Y Offset - Adjust this value as needed
      );
      console.log(error);
    } finally {
      setLoader(false);
    }
    // Handle form submission
  };
  const handleCheck = () => {
    if (checkOtp === '000000') {
      navigation.navigate('Home');
    } else {
      console.log('Wrong otp');
    }
  };

  return (
    <AuthBackground
      header="Enter Your OTP"
      para="What's your phone number"
      onbackFunc={() => navigation.goBack()}
      children={undefined}>
      <>
        <View style={tw('flex justify-between absolute top-52 w-full gap-64')}>
          <View
            style={tw(
              'flex justify-between h-48 bg-white rounded-2xl gap-4 px-3 py-9 mx-4',
            )}>
            {/* <TextInput style={tw('h-10 rounded-3xl border')} /> */}
            <Controller
              control={control}
              name="otp"
              render={({field: {onChange, onBlur, value}}) => (
                <OtpInputs
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  numberOfInputs={6}
                  handleChange={code => setCheckOtp(code)}
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
                  }}
                  textAlign="center"
                  textAlignVertical="center"
                />
              )}
            />
           

            <View style={tw('flex-row justify-center gap-1')}>
              <Text style={tw('text-black')}>Didn’t receive OTP?</Text>
              <Text style={tw('text-[#4B164C]')}>Resend</Text>
            </View>
            <TouchableOpacity
            disabled={checkOtp.length===4}
              onPress={() => {
                handleCheck();
              }}
              style={tw(
                'py-3 px-16 bg-[#4B164C] rounded-3xl font-semibold text-base',
              )}>
              <Text style={tw('text-white text-center')}>
                Verify & Continue
              </Text>
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
