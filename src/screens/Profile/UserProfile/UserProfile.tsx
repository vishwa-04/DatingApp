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

export const UserProfile = () => {
  const tw = useTailwind();

  return (
    <ImageBackground
      source={AllImages.AppBg}
      style={tw('h-full w-full relative')}>
      <TouchableOpacity style={tw('absolute top-5 mx-3')}>
        <Image source={AllImages.LeftArrow} style={tw('w-3 h-3')} />
      </TouchableOpacity>
      {/* <div className='rounded-full mt- font- text-'></div> */}
      <View
        style={tw('absolute top-1/4 rounded-t-3xl h-3/4 bg-white w-full p-5')}>
        <View style={tw('mt-28')}>
          <View style={tw('flex-row justify-start items-center gap-3 ')}>
            <Image
              source={AllImages.SplashScreen}
              style={tw('w-7 h-7 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Account Detail
            </Text>
          </View>
          <HorizontalLine />
          <View style={tw('flex-row justify-start items-center gap-3 ')}>
            <Image
              source={AllImages.SplashScreen}
              style={tw('w-7 h-7 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Account Detail
            </Text>
          </View>
          <HorizontalLine />
          <View style={tw('flex-row justify-start items-center gap-3 ')}>
            <Image
              source={AllImages.SplashScreen}
              style={tw('w-7 h-7 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Account Detail
            </Text>
          </View>
          <HorizontalLine />
          <View style={tw('flex-row justify-start items-center gap-3 ')}>
            <Image
              source={AllImages.SplashScreen}
              style={tw('w-7 h-7 object-cover')}
            />
            <Text style={tw('font-medium text-base text-[#161616]')}>
              Account Detail
            </Text>
          </View>
          <HorizontalLine />
        </View>
        <View style={tw('mt-8 gap-8')}>
          <TouchableOpacity
            style={tw(
              'py-3 px-32 bg-[#4B164C] rounded-3xl font-semibold text-base',
            )}>
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
            source={AllImages.Male}
            style={tw('h-40 w-40 object-cover rounded-full')}
          />
          <Text style={tw('font-medium text-sm')}>Jesica arnold</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
