import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {AuthBackground} from '@components';
import {GoogleAuth} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

export const Login = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  let objScreen = {
    Login: 'login',
    password: 'password',
    otp: 'Otp',
  };
  const tw = useTailwind();
  const [screen, setScreen] = useState(objScreen.Login);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <ScrollView
        contentContainerStyle={tw('flex-grow')}
        keyboardShouldPersistTaps="never">
        <AuthBackground
          header={
            screen === objScreen.Login
              ? "What's your phone number?"
              : 'Enter Your Password'
          }
          para="What's your phone number"
          onbackFunc={
            screen === objScreen.Login
              ? () => navigation.navigate('Welcome')
              : () => setScreen(objScreen.Login)
          }>
          {screen === objScreen.Login ? (
            <>
              <View style={tw('flex justify-between absolute top-52 w-full')}>
                <View
                  style={tw(
                    'flex justify-between h-44 bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
                  )}>
                  <TextInput
                    style={tw('h-10 rounded-3xl px-4 border text-black')}
                  />
                  <TouchableOpacity
                    style={tw(
                      'py-3 bg-[#4B164C] rounded-3xl font-semibold text-base',
                    )}>
                    <Text
                      style={tw('text-white text-center')}
                      onPress={() => setScreen(objScreen.password)}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={tw('flex-1 justify-end items-center gap-2 py-5')}>
                <GoogleAuth />
                <GoogleSigninButton
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  // onPress={this._signIn}
                  // disabled={this.state.isSigninInProgress}
                />
                
                <View style={tw('flex-row justify-center gap-1 mt-2 ')}>
                  <Text style={tw('text-black font-semibold')}>New user?</Text>
                  <Text
                    style={tw('text-[#4B164C] font-bold')}
                    onPress={() => navigation.navigate('Register')}>
                    Register
                  </Text>
                </View>
              </View>
            </>
          ) : (
            <>
              <View style={tw('flex justify-between absolute top-52 w-full')}>
                <View
                  style={tw(
                    'flex justify-between h-44 bg-white rounded-2xl gap-2 px-3 py-9 mx-4',
                  )}>
                  <TextInput
                    style={tw('h-10 rounded-3xl border text-black px-4')}
                  />
                  <TouchableOpacity
                    style={tw(
                      'py-3 bg-[#4B164C] rounded-3xl font-semibold text-base',
                    )}>
                    <Text
                      style={tw('text-white text-center')}
                      onPress={() => {
                        navigation.navigate('OtpLoginScreen');
                      }}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={tw('flex-1 justify-end items-center gap-2 py-5')}>
                <GoogleAuth />
                <View style={tw('flex-row justify-center gap-1 mt-2')}>
                  <Text
                    style={tw('text-[#4B164C] font-semibold')}
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    Forgot Password?
                  </Text>
                </View>
              </View>
            </>
          )}
        </AuthBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
