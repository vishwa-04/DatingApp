import React from 'react';

import {AllIcons} from '../../../../assets/icons/index';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {Image, Pressable, Text, View} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
import {BottomNavStyle} from './NavbarStyles';

export const CustomBottomTabBar = React.memo(
  ({
    state,
    descriptors,
    navigation,
  }: {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    insets: EdgeInsets;
  }): React.JSX.Element => {
    const style = BottomNavStyle();

    return (
      <View style={style.barStyle}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={index}
              onPress={onPress}
              style={style.innerViewButton}>
              <NavigationIcon
                route={label}
                isFocused={isFocused}
                options={options}
              />
            </Pressable>
          );
        })}
      </View>
    );
  },
);

const NavigationIcon = React.memo(
  ({
    route,
    isFocused,
    options,
  }: {
    route: string;
    isFocused: boolean;
    options: BottomTabNavigationOptions;
  }): React.JSX.Element => {
    const style = BottomNavStyle();

    let icon = [];
    let label = '';
    switch (route) {
      case 'Card':
        icon[0] = AllIcons.Card;
        icon[1] = AllIcons.CardOutline;
        break;

      case 'Star':
        icon[0] = AllIcons.Star;
        icon[1] = AllIcons.StarOutline;
        break;

      case 'Smile':
        icon[0] = AllIcons.Smile;
        icon[1] = AllIcons.SmileOutline;
        break;
      case 'Message':
        icon[0] = AllIcons.Message;
        icon[1] = AllIcons.MessageOutline;
        break;
      case 'User':
        icon[0] = AllIcons.User;
        icon[1] = AllIcons.UserOutline;
        break;
    }

    let fieldBlock = (
      <>
        {isFocused && <View />}
        <Image
          source={isFocused ? icon[0] : icon[1]}
          style={{
            // tintColor: isFocused
            //   ? options.tabBarActiveTintColor
            //   : options.tabBarInactiveTintColor,
            resizeMode: 'contain',
            height: 22,
            width: 22,
          }}
        />
      </>
    );

    return fieldBlock;
  },
);
