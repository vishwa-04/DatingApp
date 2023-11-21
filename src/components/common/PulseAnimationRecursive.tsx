import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';

export const PulseAnimationRecursive = ({timeout}: {timeout: number}) => {
  const animatedValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animationFunc = () => {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    };
    const time = setTimeout(() => {
      animationFunc();
    }, timeout);
    () => {
      clearTimeout(time);
    };
  }, [animatedValue]);

  const circleStyle = {
    opacity: animatedValue,
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [4, 1], // Scale from 100% to 120%
        }),
      },
    ],
  };

  return <Animated.View style={[styles.circle, circleStyle]} />;
};

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#df8cd1',
    borderRadius: 50,
    zIndex: 40,
  },
});
