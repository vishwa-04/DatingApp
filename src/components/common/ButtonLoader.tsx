import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';

export const ButtonLoader = ({
  text = 'Loading...',
  color = '#ffffff',
  mainClass = 'flex-row justify-center items-center gap-2',
  textClass = 'text-white text-center font-semibold text-base',
}: {
  text?: string;
  color?: string;
  mainClass?: string;
  textClass?: string;
}) => {
  const tw = useTailwind();
  return (
    <View style={tw(mainClass)}>
      <ActivityIndicator size={'small'} color={color} />
      <Text style={tw(textClass)}>{text}</Text>
    </View>
  );
};

