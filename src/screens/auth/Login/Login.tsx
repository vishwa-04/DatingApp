import {View, Text} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';

export const Login = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('bg-red-500')}>
      <Text style={{height: 100}}>Login saddsaed</Text>
    </View>
  );
};
