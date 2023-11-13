import {AllImages} from '../../../assets/images';
import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, Easing, Image} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export const SwipeLoading = () => {
  const animated = useRef(new Animated.Value(0)).current;
  const tw = useTailwind();
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
    <View style={tw('flex-1 justify-center items-center')}>
      <Animated.View style={[styles.itemTop, {transform}]}>
        <Animated.View style={[styles.topItem]}>
          <Image source={AllImages.Male} style={tw('rounded-full w-10 h-10')} />
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
    // top: 12,
  },
  text: {
    color: '#fff',
  },
});
