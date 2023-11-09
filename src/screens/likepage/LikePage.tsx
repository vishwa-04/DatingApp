import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn';

export const LikePage = () => {
  const tw = useTailwind();
  return (
    <View  style={tw('flex-1 items-center')}>
      <Text>LikePage</Text>
    </View>
  )
}