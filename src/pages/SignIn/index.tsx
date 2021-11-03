import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';
import { loginAsync } from '../../apis/auths/login.api';
import { notifyError, notifySuccess } from '../../utils/notify';
import './style.scss';

interface SignInProps {}

export const SignIn = (props: SignInProps) => {
	const history = useHistory();
	const { register, handleSubmit } = useForm();
	const submit = async (data: any, e: any) => {
		e.preventDefault();
		const result = await loginAsync(data);
		if ([200, 201].includes(result.statusCode)) {
			//Luu token
			localStorage.setItem('token', result.data.token);
			//Thong bao
			notifySuccess('Sign in success');
			//Chuyen trang
			history.push('/');
		} else {
			notifyError('Sign in fail');
		}
	};

	return (
		<div className='signInPage container'>
			<div className='signInPage-form'>
				<div className='signInPage-form-img'>
					<img
						src='https://www.bootstrapdash.com/demo/login-template-free-2/assets/images/login.jpg'
						alt=''
					/>
				</div>
				<form
					onSubmit={handleSubmit(submit)}
					className='signInPage-form-content'
				>
					<p>Sign into your account</p>
					<input
						type='email'
						{...register('email')}
						id='email'
						className='form-control'
						placeholder='Email address'
					/>
					<p></p>
					<input
						type='password'
						id='password'
						{...register('password')}
						className='form-control'
						placeholder='Password'
					/>
					<p></p>

					<input
						id='login'
						className='btn btn-block login-btn mb-4'
						type='submit'
						value='Login'
					></input>
					<Link to='/forgotpass'>Forgot Pass?</Link>
					<p></p>
					<p>
						Dont have account?{' '}
						<Link to='/signup'>Register here</Link>
					</p>
					<p>
						SignIn with{' '}
						<a href='#'>
							<IoLogoTwitter />
						</a>
						{''}{' '}
						<a href='#'>
							<IoLogoFacebook />
						</a>
					</p>
				</form>
			</div>
		</div>
	);
};
