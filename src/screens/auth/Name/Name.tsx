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
import {apiResponse} from '@constants';

export const Name = ({
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
  const [loader, setLoader] = useState(false);
  const onSubmit = async (data: any) => {
    try {
      setLoader(true);
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
            style={tw('py-3 bg-[#4B164C] rounded-3xl font-semibold text-base')}>
            <Text style={tw('text-white text-center')}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthBackground>
  );
};
