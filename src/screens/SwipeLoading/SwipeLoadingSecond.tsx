import {AllImages} from '@assets';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, Image} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {PulseAnimationRecursive} from '@components';

export const SwipeLoadingSecond = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const animatedValue = useRef(new Animated.Value(1)).current;
  const [loader, setLoader] = useState(true);
  const tw = useTailwind();
  useEffect(() => {
    const animationFunc = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.delay(2400),
        ]),
      ).start();
    };
    setTimeout(()=>{navigation.navigate('BottomNavBar')},3000)

    animationFunc();
  }, [animatedValue]);
  return (
    <View style={tw('flex-1 justify-center items-center')}>
      <Image
        source={AllImages.UserPhoto}
        style={[tw('rounded-full w-28 h-28 absolute z-50')]}
      />
      {loader &&
        Array.from({length: 100}, (_, index) => index + 1).map((x, index) => (
          <PulseAnimationRecursive timeout={index * 700} key={index} />
        ))}
    </View>
  );
};
