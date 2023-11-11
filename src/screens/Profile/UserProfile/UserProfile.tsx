import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {AllImages} from '../../../../assets/images/index';
import {useTailwind} from 'tailwind-rn';
import {HorizontalLine} from '../../../components/common/HorizontalLine';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/navigation';

export const UserProfile = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();

  return (
    <ImageBackground
      source={AllImages.AppBg}
      style={tw('h-full w-full relative')}>
      <TouchableOpacity
        style={tw('absolute top-5 mx-3')}
        onPress={() => navigation.goBack()}>
        <Image source={AllImages.LeftArrow} style={tw('w-3 h-3')} />
      </TouchableOpacity>
      {/* <div className='rounded-full mt- font- text-'></div> */}
      <View
        style={tw('absolute top-1/4 rounded-t-3xl h-3/4 bg-white w-full p-5')}>
        <View style={tw('mt-28')}>
          <View style={tw('flex-row justify-start items-center gap-3 my-2')}>
            <Image
              source={AllImages.AccountDetail}
              style={tw('w-7 h-7 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Account Detail
            </Text>
          </View>
          <HorizontalLine />
          <View style={tw('flex-row justify-start items-center gap-3 my-2')}>
            <Image
              source={AllImages.Setting}
              style={tw('w-7 h-7 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Settings
            </Text>
          </View>
          <HorizontalLine />
          <View style={tw('flex-row justify-start items-center gap-3 my-2')}>
            <Image
              source={AllImages.ConatctUs}
              style={tw('w-7 h-7 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              ConatctUs
            </Text>
          </View>
          <HorizontalLine />
          <View style={tw('flex-row justify-start items-center gap-3 my-2')}>
            <Image
              source={AllImages.BlockedUsers}
              style={tw('w-7 h-7 object-cover')}
            />
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
            style={tw('py-3 bg-[#4B164C] rounded-3xl font-semibold text-base')}>
            <Text style={tw('text-white text-center')}> Log out</Text>
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
          <Text style={tw('font-medium text-sm')}>Jesica arnold</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
