import {AllImages} from '@assets';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import React, {useEffect, useRef} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Easing,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const circleSize = 200;

export const SwipeLoadingSecond = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const animation = useRef(new Animated.Value(0)).current;
  const tw = useTailwind();
  useEffect(() => {
    const startAnimation = () => {
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 750,
          useNativeDriver: true,
        }),
        Animated.delay(300),
      ]).start(() => {
        animation.setValue(0);
        startAnimation();
      });
    };

    startAnimation();
  }, [animation]);
  const rotateInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const transform = [{rotate: rotateInterpolation}];

  return (
    <View style={tw('flex-1 justify-center items-center')}>
      <View style={[styles.itemTop]}>
        <View style={[styles.topItem]}>
          <Image source={AllImages.Male} style={tw('rounded-full w-10 h-10')} />
        </View>
        <View style={[styles.itemBottom]}>
          <View style={tw('p-16')}></View>
          <View style={[styles.topItem]}>
            <Image
              source={AllImages.Female}
              style={tw('rounded-full w-10 h-10')}
            />
          </View>
        </View>
        <View>
          <View style={[styles.secondItem]}>
            <Image
              source={AllImages.Female}
              style={tw('rounded-full w-10 h-10')}
            />
          </View>
        </View>
      </View>

      <Animated.Image
        source={AllImages.UserPhoto}
        style={[tw('rounded-full w-28 h-28 absolute'), {transform}]}
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
  },
  text: {
    color: '#fff',
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2, // Makes it circular
    backgroundColor: 'red', // Set your desired color
    position: 'absolute',
    left: deviceWidth / 2,
    top: deviceHeight / 2,
    marginLeft: -circleSize / 2,
    marginTop: -circleSize / 2,
  },
});
