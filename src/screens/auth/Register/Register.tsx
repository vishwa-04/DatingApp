import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
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

export const Register = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  let objScreen = {
    Register: 'register',
    Password: 'password',
    Name: 'name',
  };
  const tw = useTailwind();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(IRegister),
  });
  const [screen, setScreen] = useState(objScreen.Register);
  const [loader, setLoader] = useState(false);
  const onSubmit = async (data: any) => {
    try {
      setLoader(true);
      await RegisterApi(data.phoneNumber);
      // Toast.showWithGravityAndOffset(
      //   'This is a long toast at the top.',
      //   Toast.LONG,
      //   Toast.TOP,
      //   0, // X Offset
      //   30, // Y Offset - Adjust this value as needed
      // );
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
  return (
    <AuthBackground
      header={
        screen === objScreen.Register
          ? "What's your phone number"
          : screen === objScreen.Password
          ? 'Enter Your Password'
          : 'Your Name is...'
      }
      para="What's your phone number"
      onbackFunc={
        screen === objScreen.Register
          ? () => navigation.navigate('Welcome')
          : screen === objScreen.Password
          ? () => setScreen(objScreen.Register)
          : () => setScreen(objScreen.Password)
      }>
      {screen === objScreen.Register ? (
        <>
          <View style={tw('flex-1 justify-between absolute top-52 w-full')}>
            <View
              style={tw(
                'flex justify-between h-44 bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
              )}>
              <TextInputCommon
                style={'h-10 rounded-3xl border text-black'}
                control={control}
                error={errors?.phoneNumber}
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
                    style={tw(
                      'text-white text-center font-semibold text-base',
                    )}>
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
      ) : screen === objScreen.Password ? (
        <>
          <View style={tw('flex-1 justify-between absolute top-52 w-full')}>
            <View
              style={tw(
                'flex justify-between h-44 bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
              )}>
              <TextInput style={tw('h-10 rounded-3xl border text-black')} />
              <TouchableOpacity
                style={tw(
                  'py-3 bg-[#4B164C] rounded-3xl font-semibold text-base',
                )}>
                <Text
                  style={tw('text-white text-center')}
                  onPress={() => {
                    setScreen(objScreen.Password);
                  }}>
                  Continue
                </Text>
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
      ) : (
        <View style={tw('flex justify-between absolute top-52 w-full')}>
          <View
            style={tw(
              'flex justify-between h-44 bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
            )}>
            <TextInput style={tw('h-10 rounded-3xl border text-black')} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Gender');
              }}
              style={tw(
                'py-3 bg-[#4B164C] rounded-3xl font-semibold text-base',
              )}>
              <Text style={tw('text-white text-center')}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </AuthBackground>
  );
};
