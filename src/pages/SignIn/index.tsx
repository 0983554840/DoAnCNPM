import React from 'react';
import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';
import './style.scss';

interface SignInProps {}

export const SignIn = (props: SignInProps) => {
	return (
		<div className='signInPage container'>
			<div className='signInPage-form'>
				<div className='signInPage-form-img'>
					<img
						src='https://www.bootstrapdash.com/demo/login-template-free-2/assets/images/login.jpg'
						alt=''
					/>
				</div>
				<div className='signInPage-form-content'>
					<p>Sign into your account</p>
					<input
						type='email'
						name='email'
						id='email'
						className='form-control'
						placeholder='Email address'
					/>
					<p></p>
					<input
						type='password'
						name='password'
						id='password'
						className='form-control'
						placeholder='Password'
					/>
					<p></p>

					<input
						name='login'
						id='login'
						className='btn btn-block login-btn mb-4'
						type='button'
						value='Login'
					></input>
					<a href='http://localhost:3000/forgotpass'>Forgot Pass?</a>
					<p></p>
					<p>
						Dont have account?{' '}
						<a href='http://localhost:3000/signup'>Register here</a>
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
				</div>
			</div>
		</div>
	);
};
