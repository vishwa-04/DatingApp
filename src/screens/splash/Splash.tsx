import {View, Image, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {AllImages} from '@assets';
import {useTailwind} from 'tailwind-rn';
import {ScrollView} from 'react-native';

export const Splash = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const tw = useTailwind();

  // Create an animated value starting at 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the fade in animation when the component mounts
    Animated.timing(fadeAnim, {
      toValue: 1, // Animate to opacity: 1 (opaque)
      duration: 2000, // Make the animation last for 2 seconds
      useNativeDriver: true, // Enable native driver for smoother animation
    }).start();

    // Set a timeout to switch the loading state
    const time = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, [fadeAnim, setLoading]);

  return (
    // <div className='h-'></div>
      <Animated.View style={{opacity: fadeAnim}}>
        <View
          style={tw(
            'flex-col justify-center bg-white',
          )}>
          <Image
            source={AllImages.SplashScreen}
            style={tw('h-full w-full m-auto object-cover')}
          />
        </View>
      </Animated.View>
  );
};
