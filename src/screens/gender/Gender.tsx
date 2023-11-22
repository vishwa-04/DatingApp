import {View, Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';
import {asyncStorageConst, genderConst} from '@constants';
import {ButtonLoader} from '@components';

export const Gender = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  const [loader, setLoader] = useState(false);
  const [gender, setGender] = useState<string | null>(null);
  const [dirty, setDirty] = useState<boolean>(false);
  const onSubmit = async () => {
    try {
      setDirty(true);
      if (gender) {
        await AsyncStorage.setItem(asyncStorageConst.RegisterGender, gender);
        navigation.navigate('Birthday');
      }
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
    <View style={tw('flex-1 items-center')}>
      <View style={tw('pt-[30%] w-full')}>
        {/* <div className="font-normal text-sm text-[#636363]" /> */}
        <Text style={tw('text-center text-black text-sm font-semibold mb-10')}>
          Choose Gender
        </Text>
      </View>
      <View style={tw('flex-row justify-around w-full flex-grow')}>
        <View style={tw('items-center')}>
          <TouchableOpacity
            style={tw(
              `p-1 ${
                gender === genderConst.Male
                  ? 'border-2 border-[#4B164C] rounded-full'
                  : ''
              }`,
            )}
            onPress={() => {
              if (gender !== genderConst.Male) {
                setGender(genderConst.Male);
              }
            }}>
            <Image source={AllImages.Male} style={tw('h-40 w-40')} />
          </TouchableOpacity>
          <View style={tw('mt-3')}>
            <Text style={tw('text-center text-black text-sm font-semibold')}>
              Male
            </Text>
          </View>
        </View>
        <View style={tw('items-center p-1')}>
          <TouchableOpacity
            style={tw(
              `p-1 ${
                gender === genderConst.Female
                  ? 'border-2 border-[#4B164C] rounded-full'
                  : ''
              }`,
            )}
            onPress={() => {
              if (gender !== genderConst.Female) {
                setGender(genderConst.Female);
              }
            }}>
            <Image source={AllImages.Female} style={tw('h-40 w-40')} />
          </TouchableOpacity>
          <View style={tw('mt-3')}>
            <Text style={tw('text-center text-black text-sm font-semibold')}>
              Female
            </Text>
          </View>
        </View>
      </View>
      <View style={tw('w-full px-6 pb-6')}>
        <View style={tw('items-center mb-3 text-black')}>
          <Text style={tw('font-normal text-sm text-[#636363]')}>
            Press continue to continue
          </Text>
          {dirty && gender === null && (
            <Text style={tw('text-red-500 px-2')}>
              Please select the gender
            </Text>
          )}
        </View>
        <TouchableOpacity
          style={tw(
            `py-3 bg-[#4B164C] rounded-3xl font-semibold text-base ${
              loader ? 'opacity-70' : ''
            }`,
          )}
          onPress={() => onSubmit()}
          disabled={loader}>
          {loader ? (
            <ButtonLoader />
          ) : (
            <Text style={tw('text-white text-center font-semibold text-base')}>
              Continue
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
