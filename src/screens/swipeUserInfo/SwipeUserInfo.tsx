import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {AllImages} from '../../../assets/images/index';
import {useTailwind} from 'tailwind-rn';
import {HorizontalLine} from '../../components/common/HorizontalLine';

export const SwipeUserInfo = () => {
  const tw = useTailwind();

  return (
    <View style={tw('relative')}>
      <Image
        source={AllImages.UserSwipe}
        style={tw('w-full h-full object-cover')}
      />
      <View
        style={tw('absolute top-1/3 rounded-t-3xl h-3/4 bg-white w-full p-5 mt-10')}>
        <View style={tw('flex-row justify-between items-center pb-2')}>
          <View style={tw('flex-col justify-center')}>
            <View style={tw('flex-row justify-between gap-5')}>
              <Text
                style={tw('text-center text-[#4B164C] font-bold text-base')}>
                Olivia jension
              </Text>
              <Image
                source={AllImages.Verified}
                style={tw('w-7 h-7 object-cover')}
              />
            </View>
            <View style={tw('flex-row justify-start gap-2')}>
              <Image
                source={AllImages.Location}
                style={tw('w-5 h-6 object-cover')}
              />
              <Text>Dubai</Text>
            </View>
          </View>
          <View style={tw('flex-row justify-center items-center gap-2')}>
            <Image
              source={AllImages.Flag}
              style={tw('w-5 h-5 object-cover')}
            />
            <Image
              source={AllImages.UserIcon}
              style={tw('w-5 h-5 object-cover')}
            />
            <Text style={tw('font-medium text-base')}>28</Text>
          </View>
        </View>
        <HorizontalLine />
        <View style={tw('flex-row justify-between items-center py-2')}>
          <Text style={tw('font-medium text-sm text-[#161616]')}>
          Occupation
          </Text>
          <View style={tw('flex-row justify-end items-center gap-2')}>
            <Image
              source={AllImages.Plus}
              style={tw('w-7 h-7 object-cover')}
            />
            <Text style={tw('font-medium text-sm')}>Art Manager</Text>
          </View>
        </View>
        <HorizontalLine />
        <View style={tw('gap-3 py-2')}>
          <Text style={tw('font-medium text-sm text-[#161616]')}>About me</Text>
          <Text style={tw('text-[#3D4260]')}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </Text>
        </View>
        <HorizontalLine />
        <View style={tw('gap-2')}>
          <Text style={tw('font-medium text-sm text-[#161616]')}>
            My Interests
          </Text>
          <View style={tw('flex-row flex-wrap items-center gap-2')}>
            <TouchableOpacity
              style={tw(
                'flex-row justify-between px-2 py-1 items-center gap-2 rounded-3xl bg-[#EDF2F7]',
              )}>
              <Image
                source={AllImages.Flag}
                style={tw('w-5 h-5 object-cover')}
              />
              <Text style={tw('text-center')}>Beaches</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw(
                'flex-row justify-between px-2 py-1 items-center gap-2 rounded-3xl bg-[#EDF2F7]',
              )}>
              <Image
                source={AllImages.Flag}
                style={tw('w-5 h-5 object-cover')}
              />
              <Text style={tw('text-center')}>Beaches</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw(
                'flex-row justify-between px-2 py-1 items-center gap-2 rounded-3xl bg-[#EDF2F7]',
              )}>
              <Image
                source={AllImages.Flag}
                style={tw('w-5 h-5 object-cover')}
              />
              <Text style={tw('text-center')}>Beaches</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw(
                'flex-row justify-between px-2 py-1 items-center gap-2 rounded-3xl bg-[#EDF2F7]',
              )}>
              <Image
                source={AllImages.Flag}
                style={tw('w-5 h-5 object-cover')}
              />
              <Text style={tw('text-center')}>Beaches</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw(
                'flex-row justify-between px-2 py-1 items-center gap-2 rounded-3xl bg-[#EDF2F7]',
              )}>
              <Image
                source={AllImages.Flag}
                style={tw('w-5 h-5 object-cover')}
              />
              <Text style={tw('text-center')}>Beaches</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw(
                'flex-row justify-between px-2 py-1 items-center gap-2 rounded-3xl bg-[#EDF2F7]',
              )}>
              <Image
                source={AllImages.Flag}
                style={tw('w-5 h-5 object-cover')}
              />
              <Text style={tw('text-center')}>Beaches</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
