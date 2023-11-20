import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {AllImages} from '@assets';
import {useTailwind} from 'tailwind-rn';

type ScreenWrapperProps = {
  children: React.ReactNode;
  header: string;
  para: string;
  onbackFunc?: () => void;
  leftArrow?: boolean;
};

export const AuthBackground = ({
  header,
  para,
  children,
  onbackFunc,
  leftArrow = true,
}: ScreenWrapperProps) => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-1 relative')}>
      <View
        style={tw(
          'flex justify-center bg-[#DF8CD1] h-64 rounded-br-3xl rounded-bl-3xl px-2 text-white gap-5',
        )}>
        {leftArrow && onbackFunc && (
          <TouchableOpacity
            style={tw('absolute top-5 mx-3')}
            onPress={() => {
              onbackFunc();
            }}>
            <Image source={AllImages.LeftArrow} style={tw('object-cover')} />
          </TouchableOpacity>
        )}
        <View style={tw('justify-center gap-5 flex')}>
          <Text
            style={tw('font-medium text-3xl text-white ml-2 font-semibold')}>
            {header}
          </Text>
          <Text style={tw('font-normal text-sm text-white ml-2')}>{para}</Text>
        </View>
      </View>
      {children}
    </View>
  );
};

export default AuthBackground;
