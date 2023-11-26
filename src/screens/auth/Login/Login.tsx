import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {
  AuthBackground,
  ButtonLoader,
  GoogleAuth,
  TextInputCommon,
} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ILogin} from '@validations';
import Toast from 'react-native-simple-toast';
import {asyncStorageConst} from '@constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useHideGooglAuth} from '../../../hooks';

export const Login = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(ILogin),
  });
  const [loader, setLoader] = useState(false);
  const isKeyboardVisible = useHideGooglAuth();
  const onSubmit = async (data: any) => {
    try {
      setLoader(true);
      await AsyncStorage.setItem(asyncStorageConst.LoginPhone, data.contact_no);
      navigation.navigate('LoginPassword');
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
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={{flex: 1}}
    //   keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
    <ScrollView
      contentContainerStyle={tw('flex-grow')}
      keyboardShouldPersistTaps="never">
      <AuthBackground
        header="What's your phone number"
        para="What's your phone number"
        onbackFunc={() => navigation.navigate('Welcome')}>
        <>
          {/* <div className='top-'></div> */}
          <View style={tw('flex justify-between absolute top-52 w-full')}>
            <View
              style={tw(
                'flex justify-between bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
              )}>
              <TextInputCommon
                style={'h-10 rounded-3xl border text-black px-16'}
                control={control}
                error={errors?.contact_no}
                phoneField={true}
                viewClass={'relative'}
                keyboardType={'number-pad'}
                name="contact_no"
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
                    style={tw(
                      'text-white text-center font-semibold text-base',
                    )}>
                    Continue
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          {!isKeyboardVisible && (
            <View style={tw('flex-1 justify-end items-center gap-2 py-5')}>
              <GoogleAuth />
              <View style={tw('flex-row justify-center gap-1 mt-2 ')}>
                <Text style={tw('text-black font-semibold')}>New user?</Text>
                <Text
                  style={tw('text-[#4B164C] font-bold')}
                  onPress={() => navigation.navigate('Register')}>
                  Register
                </Text>
              </View>
            </View>
          )}
        </>
      </AuthBackground>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
};
