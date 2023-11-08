import {View} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';

export const HorizontalLine = () => {
  const tw = useTailwind();
  return (
    // <div classname='bg-gray'></div>
    <View style={tw('border-b  border-gray-200 mt-2.5 mb-2.5')} />
  );
};
