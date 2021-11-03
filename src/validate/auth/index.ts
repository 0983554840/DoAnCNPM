import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
	email: yup.string().email().required('Please enter the required field'),
	name: yup.string().required('Please enter the required field'),
	password: yup
		.string()
		.required('Please enter the required field')
		.min(6, 'Mat khau co it nhat 6 ky tu nhap lai khong t dam m chet'),
	confirmPassword: yup
		.string()
		.required('Please enter the required field')
		.oneOf([yup.ref('password'), null], 'Mat khau phai giong nhau'),
	phone: yup
		.string()
		.required('Please enter the required field')
		.matches(/(84|0[1|2|3|4|5|6|7|8|9])+([0-9]{8})\b/),
});
