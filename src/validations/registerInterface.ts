// validationSchema.ts
import * as yup from 'yup';

export const IRegister = yup.object().shape({
  phoneNumber: yup.string().required('Phone number is required').matches(/^[0-9]+$/, "Phone number must be only digits").min(10).max(10),
});