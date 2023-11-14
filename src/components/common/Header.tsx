import React from 'react';

import {AllIcons} from '@assets';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type ScreenHeaderProps = {
  headerTitle?: string;
  showLeft: boolean;
  headerLeft?: React.JSX.Element;
  customTitle?: React.JSX.Element;
  headerTitleAlign?: 'left' | 'center';
  headerRight?: {
    icon: any;
    onPress: () => void;
  };
  leftOnPress?: () => void;
};

export const ScreenHeader = React.memo(
  ({
    headerTitle,
    showLeft,
    headerLeft,
    customTitle,
    headerTitleAlign,
    headerRight,
    leftOnPress,
  }: ScreenHeaderProps) => {

    return (
      <View
       >
        <View style={ { width: '100%' }}>
          <View
            onTouchEnd={leftOnPress ? leftOnPress : () => { }}
            style={{
              width:
                showLeft === false && !headerRight
                  ? '0%'
                  : headerTitleAlign === 'left' && showLeft === false
                    ? '0%'
                    : showLeft === false && headerRight
                      ? '11.5%'
                      : '11.5%',
              height: 40,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {showLeft && !headerLeft && (
              <View
               >
                <View
                 >
                  <Image
                    source={AllIcons.ArrowSimpleLeft}
                  
                  />
                </View>
              </View>
            )}
            {showLeft && headerLeft && <View>{headerLeft}</View>}
          </View>
          <View
            style={[
              {
                width: showLeft
                  ? '76%'
                  : !headerRight
                    ? '100%'
                    : headerTitleAlign === 'left'
                      ? '88%'
                      : '76%',
                justifyContent:
                  headerTitleAlign === 'center' ? 'center' : 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
              },
              headerTitleAlign === 'left' && {
                paddingLeft: 12,
              },
            ]}>
            {headerLeft ? (
              <>
                {headerTitle ? (
                  <Text>
                    {headerTitle}
                  </Text>
                ) : (
                  customTitle
                )}
              </>
            ) : headerTitle ? (
              <Text style={[ { paddingLeft: 0 }]}>
                {headerTitle}
              </Text>
            ) : (
              customTitle && customTitle
            )}
          </View>

         
        </View>
      </View>
    );
  },
);


