import {Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {AuthBackground, TextInputCommon, ButtonLoader} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {IName} from '@validations';
import Toast from 'react-native-simple-toast';
import {asyncStorageConst} from '@constants';

export const Name = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(IName),
  });
  const [loader, setLoader] = useState(false);
  const onSubmit = async (data: any) => {
    try {
      setLoader(true);
      await AsyncStorage.setItem(asyncStorageConst.RegisterUserName, data.name);
      navigation.navigate('Gender');
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
      header="Your Name is..."
      para="What's your phone number"
      onbackFunc={() => navigation.navigate('Password')}>
      <View style={tw('flex justify-between absolute top-44 w-full')}>
        <View
          style={tw(
            'flex justify-between bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
          )}>
          <TextInputCommon
            style={'h-10 rounded-3xl border text-black'}
            control={control}
            error={errors?.name}
            viewClass={'relative'}
            name="name"
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
    </AuthBackground>
  );
};
