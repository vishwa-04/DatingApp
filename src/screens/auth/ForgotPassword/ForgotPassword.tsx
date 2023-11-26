import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import {Input, NativeBaseProvider} from 'native-base';
import {forgotPassword} from '@validations';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiResponse, asyncStorageConst} from '@constants';
import {ForgotPasswordChangeApi} from '@services';
import {ButtonLoader} from '@components';

export const ForgotPassword = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const [show, setShow] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [passShow, setPassShow] = React.useState(false);
  const [conPassShow, setConPassShow] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(forgotPassword),
  });
  const handleClick = () => setShow(!show);
  const tw = useTailwind();
  const onSubmit = async (data: any) => {
    try {
      setLoader(true);
      const contact_no = await AsyncStorage.getItem(
        asyncStorageConst.ForgotPasswordPhone,
      );
      const response: any = await ForgotPasswordChangeApi({
        contact_no,
        password: data.password,
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
      Toast.showWithGravityAndOffset(
        response?.data?.message || '',
        Toast.LONG,
        Toast.TOP,
        0, // X Offset
        30, // Y Offset - Adjust this value as needed
      );
      navigation.navigate('Login');
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
    <NativeBaseProvider>
      <View style={tw('flex-1 justify-start h-full')}>
        {/* <div className='z-'> </div> */}
        <View
          style={tw(
            'bg-[#DF8CD1] flex flex-row justify-between items-center p-3 relative',
          )}>
          <Pressable
            onPress={() => navigation.navigate('Login')}
            style={{position: 'relative'}}>
            <Image source={AllImages.LeftArrow} style={tw('object-cover')} />
          </Pressable>
          <View style={{width: '100%'}}>
            <Text
              style={tw(
                'font-medium text-sm text-white items-center text-center',
              )}>
              Change Password
            </Text>
          </View>
        </View>
        <View style={tw('flex-1 justify-between items-center')}>
          <View style={tw('gap-20 py-10')}>
            {/* <div className='h-40'></div> */}
            <View
              style={tw(
                'rounded-full bg-[#e4dfe5] h-40 w-40 flex-col justify-center items-center mx-auto',
              )}>
              <Image source={AllImages.Password} />
            </View>
            <View style={{width: '80%', gap: 10}}>
              <Controller
                control={control}
                name={'password'}
                render={({field: {onChange, onBlur, value}}) => (
                  <>
                    <Input
                      rightElement={
                        <View style={{paddingRight: 15}}>
                          <Pressable
                            onPress={() => {
                              setPassShow(pass => !pass);
                            }}>
                            <Image
                              source={
                                !passShow
                                  ? AllImages.OpenEye
                                  : AllImages.CloseEye
                              }
                              style={{height: 20, width: 20}}
                              tintColor={'grey'}
                            />
                          </Pressable>
                        </View>
                      }
                      width={'100%'}
                      borderColor={'#CCCCCC'}
                      focusOutlineColor={'#4B164C'}
                      variant="rounded"
                      backgroundColor={'none'}
                      secureTextEntry={passShow ? false : true}
                      placeholder={'New Password'}
                      placeholderTextColor={'grey'}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    {errors.password && (
                      <Text style={tw('text-red-500 px-2')}>
                        {errors.password.message}
                      </Text>
                    )}
                  </>
                )}
              />
              <Controller
                control={control}
                name={'conPassword'}
                render={({field: {onChange, onBlur, value}}) => (
                  <>
                    <Input
                      rightElement={
                        <View style={{paddingRight: 15}}>
                          <Pressable
                            onPress={() => {
                              setConPassShow(pass => !pass);
                            }}>
                            <Image
                              source={
                                !conPassShow
                                  ? AllImages.OpenEye
                                  : AllImages.CloseEye
                              }
                              style={{height: 20, width: 20}}
                              tintColor={'grey'}
                            />
                          </Pressable>
                        </View>
                      }
                      placeholderTextColor={'grey'}
                      borderColor={'#CCCCCC'}
                      focusOutlineColor={'#4B164C'}
                      variant="rounded"
                      backgroundColor={'none'}
                      secureTextEntry={conPassShow ? false : true}
                      placeholder={'Confirm PassWord'}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    {errors.conPassword && (
                      <Text style={tw('text-red-500 px-2')}>
                        {errors.conPassword.message}
                      </Text>
                    )}
                  </>
                )}
              />
            </View>
          </View>
          <View style={tw('gap-3 py-3')}>
            <TouchableOpacity
              style={tw(
                'py-3 px-32 bg-[#4B164C] rounded-3xl font-semibold text-base',
              )}
              onPress={handleSubmit(onSubmit)}>
              {loader ? (
                <ButtonLoader />
              ) : (
                <Text style={tw('text-white text-center')}>
                  Verify & Continue
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={tw(
                'py-3 px-32 bg-white rounded-3xl font-semibold text-base',
              )}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={tw('text-[#4B164C] text-center')}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
