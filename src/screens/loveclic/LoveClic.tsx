import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {AllImages} from '@assets';
import {useTailwind} from 'tailwind-rn';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import { HorizontalLine, ToggleButton } from '@components';

export const LoveClic = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const tw = useTailwind();
  const animated = useRef(new Animated.Value(0)).current;
  const inputRange = [0, 1];
  const rotate = animated.interpolate({
    inputRange,
    outputRange: ['0deg', '360deg'],
  });
  const rotateSecond = animated.interpolate({
    inputRange,
    outputRange: ['180deg', '540deg'],
  });
  const rotateThird = animated.interpolate({
    inputRange,
    outputRange: ['270deg', '720deg'],
  });
  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.timing(animated, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ).start();
    };

    animate();
  }, [animated]); // The empty array ensures this effect only runs once, similar to componentDidMount

  const transform = [{rotate}];
  const transformSecond = [{rotate: rotateSecond}];
  const transformThird = [{rotate: rotateThird}];

  return (
    <ImageBackground
      source={AllImages.AppBg}
      style={tw('h-full w-full relative')}>
      <TouchableOpacity
        style={tw('absolute top-5 mx-3')}
        onPress={() => navigation.goBack()}>
        <Image source={AllImages.LeftArrow} style={tw('w-3 h-3')} />
      </TouchableOpacity>
      {/* <div className='rounded-full mt- font-normal w-18 text- w-'></div> */}
      <View
        style={[
          tw('absolute top-1/4 h-3/4 bg-white w-full flex-col justify-end'),
          {borderTopRightRadius: 40, borderTopLeftRadius: 40},
        ]}>
        <View style={[tw(' bg-[#4B164C]'), {height: '75%'}]}>
        <View style={tw('flex-1 justify-center items-center')}>
          <Animated.View style={[styles.itemTop, {transform}]}>
            <Animated.View style={[styles.topItem]}>
              <Image
                source={AllImages.Male}
                style={tw('rounded-full w-10 h-10')}
              />
            </Animated.View>
            <Animated.View style={[styles.itemBottom, {transform}]}>
              <View style={tw('p-16')}></View>
              <Animated.View style={[styles.topItem]}>
                <Image
                  source={AllImages.Female}
                  style={tw('rounded-full w-10 h-10')}
                />
              </Animated.View>
            </Animated.View>
            <Animated.View style={[{transform: transformSecond}]}>
              <Animated.View style={[styles.secondItem]}>
                <Image
                  source={AllImages.Female}
                  style={tw('rounded-full w-10 h-10')}
                />
              </Animated.View>
            </Animated.View>
          </Animated.View>
          <Image
            source={AllImages.UserPhoto}
            style={tw('rounded-full w-28 h-28 absolute')}
          />
        </View>
        <HorizontalLine/>
        <View style={tw('flex flex-row')}>
        <Text style={tw('text-white')}>LoremLoremLoremLoremLoremLoremLoremLorem</Text>
<ToggleButton/>
        </View>
        </View>
      </View>
      <View style={tw('absolute w-full top-24')}>
        <View style={tw('flex-col justify-center items-center')}>
          <Image source={AllImages.Male} style={tw('h-40 w-40 object-cover')} />
          <Text
            style={tw('font-normal text-xs text-center px-5 py-3 text-black')}>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
  },
  itemTop: {
    padding: 36,
    borderWidth: 2,
    borderColor: 'rgba(223, 140, 209, 0.3)',
    borderRadius: 9999,
    position: 'relative',
  },
  itemBottom: {
    padding: 36,
    borderWidth: 50,
    borderColor: 'rgba(223, 140, 209, 0.3)',
    borderRadius: 9999,
    position: 'relative',
  },
  topItem: {
    width: '100%',
    height: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondItem: {
    width: '100%',
    height: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
