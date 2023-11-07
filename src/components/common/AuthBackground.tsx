import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {AllImages} from '../../../assets/images/index';
import {useTailwind} from 'tailwind-rn';

type ScreenWrapperProps = {
  children: React.ReactNode;
  header: string;
  para: string;
};

const AuthBackground = ({header, para, children}: ScreenWrapperProps) => {
  const tw = useTailwind();
  return (
    // <View style={styles.container}>
    //   {/* The SafeAreaView is used to avoid the notch and the status bar */}
    //   <SafeAreaView style={styles.safeArea}>
    //     {/* This is your background with a mask image */}
    //     <View style={styles.background}>
    //       <View style={styles.contentContainer}>{children}</View>
    //       <View style={styles.maskContainer}>
    //         <Image source={AllImages.Mask} style={styles.maskImage} />
    //       </View>
    //     </View>
    //     {/* The children will start from the top and go below the background */}
    //   </SafeAreaView>
    // </View>
    // <div className='font gap-'></div>
    <View style={tw('flex-1 relative')}>
      <View
        style={tw(
          'flex justify-center bg-[#DF8CD1] h-[100%] rounded-br-3xl rounded-bl-3xl px-2 text-white gap-5',
        )}>
        {/* <TouchableOpacity style={tw('absolute top-4')}>
          <Image source={AllImages.LeftArrow} style={{width: 20, height: 20}} />
        </TouchableOpacity> */}
        <View style={tw('flex justify-center gap-5')}>
          <Text style={tw('font-medium text-3xl')}>{header}</Text>
          <Text style={tw('font-normal text-sm')}>{para}</Text>
        </View>
      </View>
      <View style={tw('flex justify-between absolute top-52 w-full gap-56')}>
        {children}
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // The container takes up all available space
//   },
//   safeArea: {
//     flex: 1, // SafeAreaView also takes up all available space
//   },
//   background: {
//     backgroundColor: '#DF8CD1',
//     height: 300,
//     width: '100%',
//     borderBottomLeftRadius: 60,
//     borderBottomRightRadius: 60,
//     position:'relative',
//     // top: 0, // Starts from the top
//     // left: 0, // Starts from the left
//     // zIndex: 1, // Ensures that the background is below the content
//   },
//   maskContainer: {
//     height: '30%',
//     width: '30%',
//     // position: 'absolute',
//     // right: 5,
//     // top: 200,
//   },
//   maskImage: {
//     height: '100%',
//     width: '100%',
//     resizeMode: 'contain',
//   },
//   contentContainer: {
//     flex: 1, // Takes up all available space
//     zIndex: 2, // Higher zIndex to ensure content is above the background
//     position: 'absolute',
//     right: 5,
//     top: 300,
//   },
// });

export default AuthBackground;
