import {Dimensions, StyleSheet} from 'react-native';

export const BottomNavStyle = () =>
  StyleSheet.create({
    barStyle: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: Dimensions.get('window').width,
      bottom: 0,
      height: 75,
      overflow: 'hidden',
      backgroundColor: '#FFFFFF',
    },
    innerViewButton: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 4,
      paddingHorizontal:5
    },
  });
