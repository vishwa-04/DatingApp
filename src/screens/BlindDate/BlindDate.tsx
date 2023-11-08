import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {AllImages} from '../../../assets/images/index';
import {useTailwind} from 'tailwind-rn';
import {HorizontalLine} from '../../components/common/HorizontalLine';

export const BlindDate = () => {
  const tw = useTailwind();

  return (
    <ImageBackground
      source={AllImages.AppBg}
      style={tw('h-full w-full relative')}>
      <TouchableOpacity style={tw('absolute top-5 mx-3')}>
        <Image source={AllImages.LeftArrow} style={tw('w-3 h-3')} />
      </TouchableOpacity>
      {/* <div className='rounded-full mt- font- w-18 h-'></div> */}
      <View
        style={tw('absolute top-1/4 rounded-t-3xl h-3/4 bg-white w-full p-3')}>
        <View style={tw('mt-60 gap-2')}>
          <View
            style={tw(
              'flex-row justify-between items-center bg-[#b928a0] rounded-xl p-3',
            )}>
            <View style={tw('gap-3')}>
              <Text>dbjhfbjk</Text>
              <Text>dbjhfbjk</Text>
              <TouchableOpacity
                style={tw(
                  'p-3 bg-[#4B164C] rounded-3xl font-semibold text-base',
                )}>
                <Text style={tw('text-white text-center')}> STart</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={AllImages.Male}
              style={tw('h-20 w-16 object-cover rounded-full')}
            />
          </View>
          <View style={tw('flex-row justify-between gap-2')}>
            <View
              style={tw(
                'flex-row justify-start items-center gap-2 h-16 rounded-xl bg-[#ffb3f2] w-1/2',
              )}>
              <Image
                source={AllImages.Male}
                style={tw('h-5 w-5 object-cover rounded-full')}
              />
              <Text>dbjhfbjk</Text>
            </View>
            <View
              style={tw(
                'flex-row justify-start items-center gap-2 h-16 rounded-xl bg-[#ffb3f2] w-1/2',
              )}>
              <Image
                source={AllImages.Male}
                style={tw('h-5 w-5 object-cover rounded-full')}
              />
              <Text>dbjhfbjk</Text>
            </View>
          </View>
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
