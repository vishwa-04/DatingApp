import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { AllImages } from '../../../assets/images/index';

type ScreenWrapperProps = {
  children: React.ReactNode;
};

const AuthBackground = ({ children }: ScreenWrapperProps) => {
  return (
    <View style={styles.container}>
      {/* The SafeAreaView is used to avoid the notch and the status bar */}
      <SafeAreaView style={styles.safeArea}>
        {/* This is your background with a mask image */}
        <View style={styles.background}>
        <View style={styles.contentContainer}>
          {children}
        </View>
          <View style={styles.maskContainer}>
            <Image source={AllImages.Mask} style={styles.maskImage} />
          </View>
        </View>
        {/* The children will start from the top and go below the background */}
       
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // The container takes up all available space
  },
  safeArea: {
    flex: 1, // SafeAreaView also takes up all available space
  },
  background: {
    backgroundColor: '#DF8CD1',
    height: 300,
    width: '100%',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    position: 'absolute', // Position absolute to layer on top
    top: 0, // Starts from the top
    left: 0, // Starts from the left
    zIndex: 1, // Ensures that the background is below the content
  },
  maskContainer: {
    height: '30%',
    width: '30%',
    position: 'absolute',
    right: 5,
    top: 200,
  },
  maskImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1, // Takes up all available space
    zIndex: 2, // Higher zIndex to ensure content is above the background
  },
});

export default AuthBackground;
