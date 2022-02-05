
import * as yup from "yup";

export const registerAccountSchema = yup.object({
    email: yup.string().email('this field must be an email').required().trim(),
    password: yup.string().min(6, 'must be more than 6 charterer .').max(10,'max length is 10').required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'passwords must match').required(),
    nickName: yup.string(),
    habitualResidence: yup.array(),
    phoneNumber: yup.string().matches(/^[0-9]{8}$/, 'phone number must be 8 numbers').required(),
    agreement: yup.boolean().oneOf([true], 'you must agree to the agreement'),
}).required();

