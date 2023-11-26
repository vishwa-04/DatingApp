import {asyncStorageConst} from '@constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthToken = {
  primary_email: string;
  token: string;
  is_profile_updated: boolean;
};

type AuthResponse = {
  resType: 'SUCCESS' | 'ERROR';
  data?: AuthToken;
  message?: string;
};

const AUTH_TOKEN_KEY = 'auth_token';
const AUTOFILL_CREDENTIALS_KEY = 'autofillCredentials';

export const isSignedIn = async (): Promise<boolean> => {
  try {
    const authToken = await getAuthToken();
    // If authToken.data is not undefined and is_profile_updated is true, return true
    return (
      authToken.resType === 'SUCCESS' &&
      authToken.data?.is_profile_updated === true
    );
  } catch (error) {
    return false;
  }
};

export const setAuthToken = async (
  loginData: AuthToken,
): Promise<AuthResponse> => {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(loginData));
    return {resType: 'SUCCESS'};
  } catch (error) {
    return {resType: 'ERROR', message: 'Failed to set auth token'};
  }
};

export const getAuthToken = async (): Promise<AuthResponse> => {
  try {
    const userdata = await AsyncStorage.getItem(
      asyncStorageConst.loggedInUserData,
    );
    if (userdata) {
      const parsedToken = JSON.parse(userdata);
      return {resType: 'SUCCESS', data: parsedToken.login_token};
    } else {
      return {resType: 'ERROR', message: 'Auth token not found'};
    }
  } catch (error) {
    return {resType: 'ERROR', message: 'Failed to retrieve auth token'};
  }
};

export const removeAuthToken = async (): Promise<AuthResponse> => {
  try {
    await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
    return {resType: 'SUCCESS'};
  } catch (error) {
    return {resType: 'ERROR', message: 'Failed to remove auth token'};
  }
};

export const isProfilingDone = async (): Promise<AuthResponse> => {
  try {
    const authToken = await getAuthToken();
    if (authToken.resType === 'SUCCESS' && authToken.data?.is_profile_updated) {
      return {resType: 'SUCCESS'};
    } else {
      return {resType: 'ERROR', message: 'Profile is not updated'};
    }
  } catch (error) {
    return {resType: 'ERROR', message: 'Failed to check profiling status'};
  }
};

export const setUserProfilingDone = async (
  status: boolean,
): Promise<AuthResponse> => {
  try {
    const authToken = await getAuthToken();
    if (authToken.resType === 'SUCCESS' && authToken.data) {
      authToken.data.is_profile_updated = status;
      return setAuthToken(authToken.data);
    }
    return {resType: 'ERROR', message: 'Unable to set profiling status'};
  } catch (error) {
    return {resType: 'ERROR', message: 'Failed to set profiling status'};
  }
};

export const getBearerToken = async (): Promise<string> => {
  try {
    const authToken: any = await getAuthToken();
    if (authToken.resType === 'SUCCESS') {
      return authToken.data || '';
    }
    return '';
  } catch (error) {
    return '';
  }
};

// export const setAuthCredentialsForAutoFill = async (userdata: any): Promise<AuthResponse> => {
//   try {
//     await AsyncStorage.setItem(AUTOFILL_CREDENTIALS_KEY, JSON.stringify(userdata));
//     return { resType: 'SUCCESS' };
//   } catch (error) {
//     return { resType: 'ERROR', message: 'Failed to set autofill credentials' };
//   }
// };

// export const getAuthCredentialsForAutoFill = async (): Promise<AuthResponse> => {
//   try {
//     const udata = await AsyncStorage.getItem(AUTOFILL_CREDENTIALS_KEY);
//     if (udata) {
//       const parsedData = JSON.parse(udata);
//       return { resType: 'SUCCESS', data: parsedData };
//     } else {
//       return { resType: 'ERROR', message: 'Autofill credentials not found' };
//     }
//   } catch (error) {
//     return { resType: 'ERROR', message: 'Failed to retrieve autofill credentials' };
//   }
// };
