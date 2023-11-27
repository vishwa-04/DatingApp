import {Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {
  AuthBackground,
  TextInputCommon,
  ButtonLoader,
  GoogleAuth,
} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {IPasswordLogin} from '@validations';
import Toast from 'react-native-simple-toast';
import {apiResponse, asyncStorageConst} from '@constants';
import {LoginApi} from '@services';
import {useHideGooglAuth} from '../../../hooks';

export const LoginPassword = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  const [loader, setLoader] = useState(false);
  3;
  const isKeyboardVisible = useHideGooglAuth();

  const {
    control: passwordControl,
    handleSubmit: handlePasswordSubmit,
    formState: formStatePassword,
  } = useForm({
    resolver: yupResolver(IPasswordLogin),
  });
  const onSubmit = async (data: any) => {
    try {
      setLoader(true);
      const contact_no = await AsyncStorage.getItem(
        asyncStorageConst.LoginPhone,
      );
      const response: any = await LoginApi({
        contact_no: `+91${contact_no}`,
        password: data.password,
        device_token: 'qwertyuiop',
      });
      console.log(response,'response')
      // console.log(response.data.data,'response')
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
        asyncStorageConst.loggedInUserData,
        JSON.stringify(response.data.data),
      );
      navigation.navigate('Home');
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
      header="Enter Your Password"
      para="What's your phone number"
      onbackFunc={() => navigation.navigate('Login')}>
      <>
        <View style={tw('flex justify-between absolute top-52 w-full')}>
          <View
            style={tw(
              'flex justify-between bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
            )}>
            <TextInputCommon
              style={'h-10 rounded-3xl border text-black px-4'}
              control={passwordControl}
              error={formStatePassword.errors?.password}
              viewClass={'relative'}
              name="password"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={tw(
                `py-3 bg-[#4B164C] rounded-3xl font-semibold text-base ${
                  loader ? 'opacity-70' : ''
                }`,
              )}
              onPress={handlePasswordSubmit(onSubmit)}
              disabled={loader}>
              {loader ? (
                <ButtonLoader />
              ) : (
                <Text
                  style={tw('text-white text-center font-semibold text-base')}>
                  Submit
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        {!isKeyboardVisible && (
          <View style={tw('flex-1 justify-end items-center gap-2 py-5')}>
            <GoogleAuth />
            <View style={tw('flex-row justify-center gap-1 mt-2')}>
              <Text
                style={tw('text-[#4B164C] font-semibold')}
                onPress={() => navigation.navigate('ForgotPasswordPhone')}>
                Forgot Password?
              </Text>
            </View>
          </View>
        )}
      </>
    </AuthBackground>
  );
};
