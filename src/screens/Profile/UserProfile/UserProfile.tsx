import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  Pressable
} from 'react-native';
import React, {useState} from 'react';
import {AllImages} from '@assets';
import {useTailwind} from 'tailwind-rn';
import {ButtonLoader, HorizontalLine} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackUserList} from '@types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { asyncStorageConst } from '@constants';

export const UserProfile = ({
  navigation,
}: NativeStackScreenProps<RootStackUserList>) => {
  const tw = useTailwind();
  const [logoutLoader, setLogoutLoader] = useState(false)

  const logoutFunc = async ()=>{
    try {
      await AsyncStorage.removeItem(asyncStorageConst.loggedInUserData);
    } catch (error) {
      console.log(error)
      
    }
    finally{}
  }

  return (
    <ImageBackground
      source={AllImages.AppBg}
      style={tw('h-full w-full relative')}>
      <TouchableOpacity
        style={tw('absolute top-5 mx-3')}
        onPress={() => navigation.goBack()}>
        <Image source={AllImages.LeftArrow} style={tw('object-cover')} />
      </TouchableOpacity>
      <View
        style={tw('absolute top-1/4 rounded-t-3xl h-3/4 bg-white w-full p-5')}>
        <View style={tw('mt-28')}>
          <Pressable
            style={tw('flex-row justify-start items-center gap-3 my-2')}
            onPress={() => navigation.navigate('EditProfile')}>
            <Image
              source={AllImages.AccountDetail}
              style={tw('object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Account Detail
            </Text>
          </Pressable>
          <HorizontalLine />
          <Pressable
            style={tw('flex-row justify-start items-center gap-3 my-2')}
            onPress={() => navigation.navigate('Settings')}>
            <Image source={AllImages.Setting} style={tw('object-cover')} />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Settings
            </Text>
          </Pressable>
          <HorizontalLine />
          <View style={tw('flex-row justify-start items-center gap-3 my-2')}>
            <Image source={AllImages.ConatctUs} style={tw('object-cover')} />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              ConatctUs
            </Text>
          </View>
          <HorizontalLine />
          <View style={tw('flex-row justify-start items-center gap-3 my-2')}>
            <Image source={AllImages.BlockedUsers} style={tw('object-cover')} />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Blocked Users
            </Text>
          </View>
          <HorizontalLine />
        </View>
      </View>
      <View style={tw('flex-1 justify-end py-16 px-3')}>
        <View style={tw('gap-3 ')}>
          <TouchableOpacity
            style={tw('py-3 bg-[#4B164C] rounded-3xl font-semibold text-base')}
            disabled={logoutLoader} onPress={()=>logoutFunc()}>
            {logoutLoader ? (
              <ButtonLoader />
            ) : (
              <Text style={tw('text-white text-center')}>Log out</Text>

            )}
          </TouchableOpacity>
          <Text style={tw('text-[#4B164C] text-center font-medium text-sm')}>
            Delete Account
          </Text>
          <TouchableOpacity />
        </View>
      </View>
      <View style={tw('absolute w-full top-24')}>
        <View style={tw('flex-col justify-center items-center')}>
          <Image
            source={AllImages.UserPhoto}
            style={tw('h-40 w-40 object-cover rounded-full')}
          />
          <Text style={tw('font-medium text-sm text-black')}>
            Jesica arnold
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
