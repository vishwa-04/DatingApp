import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootStackParamList,RootAuthStackParamList} from '../types/navigation'
import {NativeStackRouteList,NativeAuthStackRouteList} from './routes'
import { ActivityIndicator } from "react-native";


const NativeStack = createNativeStackNavigator<RootStackParamList>();
export const Routes = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      {/* <CustomStatusBar theme={theme} /> */}
      <SafeAreaProvider>
        <NavigationContainer>
          <NativeStack.Navigator
            screenOptions={{
              animation: 'none',
              orientation: 'portrait',
              headerShown: false,
            }}>
            {NativeStackRouteList.map((item, index) => {
              return (
                <NativeStack.Screen
                  name={item.name}
                  component={item.component}
                />
              );
            })}
          </NativeStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </SafeAreaProvider>
  );
};

const AuthStack = createNativeStackNavigator<RootAuthStackParamList>();

export const AuthStackNavigator = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Auth'>): React.JSX.Element => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // React.useEffect(() => {
  //   setIsLoading(true);
  //   const isCurrentlySignedIn = isSignedIn();

  //   if (isCurrentlySignedIn) {
  //     navigation.replace('BottomNavBar');
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, []);

  if (isLoading) {
    return <ActivityIndicator size={25} />;
  } else {
    return (
      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          orientation: 'portrait',
          animation: 'none',
          headerShown: false,
        }}>
        {NativeAuthStackRouteList.map((item, index) => {
          return (
            <AuthStack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
            />
          );
        })}
      </AuthStack.Navigator>
    );
  }
};
