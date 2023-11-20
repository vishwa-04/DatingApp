// validationSchema.ts
import * as yup from 'yup';

export const IOTP = yup.object().shape({
  otp: yup.string().required('OTP is required').max(6)
});