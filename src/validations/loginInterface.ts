import * as yup from 'yup';

export const ILogin = yup.object().shape({
  contact_no: yup
    .string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, 'Phone number must be only digits')
    .min(10)
    .max(10),
});

export const IPasswordLogin = yup.object().shape({
  password: yup.string().required('Password is required'),
});
