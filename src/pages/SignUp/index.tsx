import React from 'react';
import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';
import './style.scss';

interface SignInProps {}

export const SignUp = (props: SignInProps) => {
	return (
		<div className='signUpPage container'>
			<div className='signUpPage-form'>
				<div className='signUpPage-form-img'>
					<img
						src='https://www.bootstrapdash.com/demo/login-template-free-2/assets/images/login.jpg'
						alt=''
					/>
				</div>
				<div className='signUpPage-form-content'>
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
						type='name'
						name='username'
						id='username'
						className='form-control'
						placeholder='Username'
					/>
					<p></p>
					<input
						name='register'
						id='register'
						className='btn btn-block login-btn mb-4'
						type='button'
						value='Register'
					></input>
					<p></p>
					<p>
						Already have account?{' '}
						<a href='http://localhost:3000/signin'>Signin here</a>
					</p>
					<p>
						Signin with{' '}
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
