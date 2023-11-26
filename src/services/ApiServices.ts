import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {
  BASE_URL,
  FORGOT_PASSWORD_CHANGE_ENDPOINT,
  FORGOT_PASSWORD_ENDPOINT,
  LOGIN_ENDPOINT,
  OTP_ENDPOINT,
  REGISTER_ENDPOINT,
  REGISTER_FINAL_ENDPOINT,
} from '@env';
import {getBearerToken} from '@services';
type ApiResponse<T> = {
  resType: 'SUCCESS' | 'ERROR';
  data?: T;
  message?: string;
  statusCode?: number;
};

type ApiRequestConfig = {
  endpoint: string;
  method: 'get' | 'post' | 'put' | 'delete';
  requestData?: any;
  headers?: Record<string, string>;
  requireBearerToken?: boolean;
};

// Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

// Handle the API response and format it
const handleApiResponse = <T>(response: AxiosResponse<T>): ApiResponse<T> => {
  return {
    resType: response.data && response.status === 200 ? 'SUCCESS' : 'ERROR',
    data: response.data,
    message: response.statusText,
    statusCode: response.status,
  };
};

// General API request function
const apiRequest = async <T>(
  endpoint: string,
  method: 'get' | 'post' | 'put' | 'delete',
  requestData = {},
  headers: Record<string, string> = {},
  requireBearerToken: boolean = false,
): Promise<ApiResponse<T>> => {
  try {
    const bearerToken = requireBearerToken ? await getBearerToken() : '';

    const config: AxiosRequestConfig = {
      method,
      url: endpoint,
      headers: {
        ...headers,
        ...(bearerToken ? {Authorization: `Bearer ${bearerToken}`} : {}),
      },
      ...(method === 'get' || method === 'delete'
        ? {params: requestData}
        : {data: requestData}),
    };

    const response = await axiosInstance(config);
    return handleApiResponse<T>(response);
  } catch (error: any) {
    return {
      resType: 'ERROR',
      message: error.message || 'Something went wrong!',
      statusCode: error.response ? error.response.status : 500,
    };
  }
};
export const RegisterApi = async (phoneNumber: string) => {
  return await apiRequest(
    REGISTER_ENDPOINT,
    'post',
    {contact_no: phoneNumber},
    {},
    false,
  );
};
export const OtpVerify = async (otp: string) => {
  return await apiRequest(OTP_ENDPOINT, 'post', {otp: otp}, {}, false);
};

export const RegisterFinalApi = async (data: any) => {
  return await apiRequest(REGISTER_FINAL_ENDPOINT, 'post', data, {}, false);
};

export const LoginApi = async (data: any) => {
  return await apiRequest(LOGIN_ENDPOINT, 'post', data, {}, false);
};

export const ForgotPasswordPhoneApi = async (data: any) => {
  console.log(data,'data')
  return await apiRequest(FORGOT_PASSWORD_ENDPOINT, 'post', data, {}, false);
};

export const ForgotPasswordChangeApi = async (data: any) => {
  return await apiRequest(FORGOT_PASSWORD_CHANGE_ENDPOINT, 'post', data, {}, false);
};

// Exporting the API functions
export {apiRequest};
