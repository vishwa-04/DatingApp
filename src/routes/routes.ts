import Login from "src/screens/auth/Login/Login";
import OtpScreen from "src/screens/auth/OTP/OtpScreen";
import Register from "src/screens/auth/Register/Register";
import WelcomeScreen from "src/screens/auth/Welcome/WelcomeScreen";
import { RootAuthStackParamList, RootBottomTabParamList, RootStackParamList } from "src/types/navigation";
// import {AuthStackNavigator} from './Routes'

export const NativeStackRouteList: Array<{
  name: keyof RootStackParamList;
  component: (...event: any) => React.JSX.Element;
}> = [
  {
    name: 'Auth',
    component: AuthStackNavigator,
  },
  // {
  //   name: 'BottomNavBar',
  //   component: BottomTabNavigator,
  // },
 
];

export const NativeAuthStackRouteList: Array<{
  name: keyof RootAuthStackParamList;
  component: (...event: any) => React.JSX.Element;
}> = [
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Register',
    component: Register,
  },
 
  {
    name: 'OTP',
    component: OtpScreen,
  },
//   {
//     name: 'WelcomeScreen',
//     component: WelcomeScreen,
//   },
 
];


export { AuthStackNavigator };
// export const NativeBottomRouteList: Array<{
//   name: keyof RootBottomTabParamList;
//   component: (...event: any) => React.JSX.Element;
// }> = [
//   {
//     name: 'Home',
//     component: HomeScreen,
//   },
//   {
//     name: 'FrontDesk',
//     component: FrontDeskScreen,
//   },
//   {
//     name: 'Profile',
//     component: ProfileScreen,
//   },
// ];

// export {AuthStackNavigator};
