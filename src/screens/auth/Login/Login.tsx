import { Text,View} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';
import AuthBackground from '../../../components/common/AuthBackground'

export const Login = () => {
  const tailwind = useTailwind();
  return (
    <AuthBackground>
    <View>
      <Text style={{height:100}}>Login saddsaed</Text>
    </View>
    </AuthBackground>
  );
};
