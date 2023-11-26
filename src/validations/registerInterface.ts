// validationSchema.ts
import * as yup from 'yup';

export const IRegister = yup.object().shape({
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, 'Phone number must be only digits')
    .min(10)
    .max(10),
});

export const IPassword = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Must contain at least 8 characters')
    .matches(/(?=.*[A-Z])/, 'Must contain at least one uppercase character.')
    .matches(/(?=.*[a-z])/, 'Must contain at least one lowercase character.')
    .matches(
      /^(?=.*[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[^\s]{1,}$/,
      'Must contain at least one number or special character.',
    ),
});

export const forgotPassword = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Must contain at least 8 characters')
    .matches(/(?=.*[A-Z])/, 'Must contain at least one uppercase character.')
    .matches(/(?=.*[a-z])/, 'Must contain at least one lowercase character.')
    .matches(
      /^(?=.*[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[^\s]{1,}$/,
      'Must contain at least one number or special character.',
    ),
  conPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf(
      [yup.ref('password')],
      'Password and confirm password is not matched.',
    ),
});

export const IName = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Must contain at least 2 characters'),
});
