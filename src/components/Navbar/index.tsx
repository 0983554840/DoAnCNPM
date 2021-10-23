import React from 'react';
import { IoMdCart } from 'react-icons/io';

const Navbar = () => {
	return (
		<nav
			className='
        navbar navbar-expand-lg
        ftco_navbar
        ftco-navbar-light
    '
			id='ftco-navbar'
		>
			<div className='container'>
				<a className='navbar-brand' href='http://localhost:3000/'>
					Freshfoods
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#ftco-nav'
					aria-controls='ftco-nav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='oi oi-menu'></span> Menu
				</button>

				<div className='collapse navbar-collapse' id='ftco-nav'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item active'>
							<a
								href='http://localhost:3000/'
								className='nav-link'
							>
								Home
							</a>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='#'
								id='dropdown04'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
							>
								Shop
							</a>
							<div
								className='dropdown-menu'
								aria-labelledby='dropdown04'
							>
								<a className='dropdown-item' href='shop.html'>
									Shop
								</a>
								<a
									className='dropdown-item'
									href='wishlist.html'
								>
									Wishlist
								</a>
								<a
									className='dropdown-item'
									href='product-single.html'
								>
									Single Product
								</a>
								<a className='dropdown-item' href='cart.html'>
									Cart
								</a>
								<a
									className='dropdown-item'
									href='checkout.html'
								>
									Checkout
								</a>
							</div>
						</li>

						<li className='nav-item'>
							<a
								href='http://localhost:3000/contact'
								className='nav-link'
							>
								Contact
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='http://localhost:3000/signin'
								className='nav-link'
							>
								SignIn
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='http://localhost:3000/signup'
								className='nav-link'
							>
								SignUp
							</a>
						</li>
						<li className='nav-item cta cta-colored'>
							<a
								href='http://localhost:3000/cart'
								className='nav-link'
							>
								<IoMdCart />
								{/* <span className='icon-shopping_cart'></span>[0] */}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
