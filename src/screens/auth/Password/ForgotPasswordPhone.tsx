import {Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {AuthBackground, TextInputCommon, ButtonLoader} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {IRegister} from '@validations';
import {ForgotPasswordPhoneApi, RegisterApi} from '@services';
import Toast from 'react-native-simple-toast';
import {apiResponse, asyncStorageConst} from '@constants';

export const ForgotPasswordPhone = ({
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
      console.log(data.phoneNumber);
      await AsyncStorage.setItem(
        asyncStorageConst.ForgotPasswordPhone,
        `+91${data.phoneNumber}`,
      );
      const response: any = await ForgotPasswordPhoneApi({
        contact_no: `+91${data.phoneNumber}`,
      });
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
      await AsyncStorage.setItem(
        asyncStorageConst.ForgotPasswordOTP,
        `${response.data.data}`,
      );
      console.log(response)
      navigation.navigate('OtpPasswordScreen');
    } catch (error: any) {
      console.log(error, 'error');
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
      onbackFunc={() => navigation.navigate('Welcome')}>
      <View style={tw('flex-1 justify-between absolute top-52 w-full')}>
        <View
          style={tw(
            'flex justify-between bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
          )}>
          <TextInputCommon
            style={'h-10 rounded-3xl border text-black px-16'}
            control={control}
            error={errors?.phoneNumber}
            phoneField={true}
            viewClass={'relative'}
            keyboardType={'number-pad'}
            name="phoneNumber"
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
    </AuthBackground>
  );
};
