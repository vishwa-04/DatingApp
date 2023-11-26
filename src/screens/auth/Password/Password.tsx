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
import {IPassword} from '@validations';
import Toast from 'react-native-simple-toast';
import {asyncStorageConst} from '@constants';
import {useHideGooglAuth} from '../../../hooks';

export const Password = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  const isKeyboardVisible = useHideGooglAuth();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(IPassword),
  });
  const [loader, setLoader] = useState(false);
  const onSubmit = async (data: any) => {
    try {
      setLoader(true);
      await AsyncStorage.setItem(
        asyncStorageConst.RegisterPassword,
        data.password,
      );
      navigation.navigate('Name');
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
  };
  return (
    <AuthBackground
      header="Enter Your Password"
      para="What's your phone number"
      leftArrow={false}>
      <>
        <View style={tw('flex-1 justify-between absolute top-52 w-full')}>
          <View
            style={tw(
              'flex justify-between bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
            )}>
            <TextInputCommon
              style={'h-10 rounded-3xl border text-black'}
              control={control}
              error={errors?.password}
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
        {!isKeyboardVisible && (
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
        )}
      </>
    </AuthBackground>
  );
};
