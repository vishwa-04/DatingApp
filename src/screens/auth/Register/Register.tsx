import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {AuthBackground, TextInputCommon, ButtonLoader} from '@components';
import {GoogleAuth} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {IRegister} from '@validations';
import {RegisterApi} from '@services';
import Toast from 'react-native-simple-toast';
import {apiResponse} from '@constants';

export const Register = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(IRegister),
  });
  const [loader, setLoader] = useState(false);
  const onSubmit = async (data: any) => {
    try {
      setLoader(true);
      const response: any = await RegisterApi(data.phoneNumber);
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
      navigation.navigate('OtpLoginScreen');
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
      header="What's your phone number"
      para="What's your phone number"
      leftArrow={false}>
      <>
        <View style={tw('flex-1 justify-between absolute top-52 w-full')}>
          <View
            style={tw(
              'flex justify-between h-44 bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
            )}>
            <TextInputCommon
              style={'h-10 rounded-3xl border text-black px-16'}
              control={control}
              error={errors?.phoneNumber}
              phoneField={true}
              viewClass={'relative'}
              keyboardType={'number-pad'}
            />
            <TouchableOpacity
              style={tw(
                `py-3 bg-[#4B164C] rounded-3xl ${loader ? 'opacity-70' : ''}`,
              )}
              onPress={handleSubmit(onSubmit)}
              disabled={loader}>
              {loader ? (
                <ButtonLoader />
              ) : (
                <Text
                  style={tw('text-white text-center font-semibold text-base')}>
                  Continue
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw('flex-1 justify-end items-center gap-2 py-5')}>
          <GoogleAuth />
          <View style={tw('flex-row justify-center gap-1')}>
            <Text style={tw('text-black')}>Already sign in?</Text>
            <Text
              style={tw('text-[#4B164C]')}
              onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </View>
        </View>
      </>
    </AuthBackground>
  );
};
