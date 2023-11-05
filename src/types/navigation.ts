
export type RootStackParamList = {
  Auth: undefined;
  BottomNavBar: undefined;
 
};

export type RootBottomTabParamList = {
  Home: undefined;
  FrontDesk: undefined;
  Profile: undefined;
};

export type RootAuthStackParamList = {
  Login: undefined;
  Register: undefined;

  OTP: {primary_email: string; reset_pass?: boolean} | undefined;
  Success: {type: 'Login' | 'Profile' | 'Pass'} | undefined;

  ProfileSignup: undefined;
  ForgotPassword: undefined;
  ResetPassword:
    | {
        reset_pass?: boolean | undefined;
      }
    | undefined;
};
