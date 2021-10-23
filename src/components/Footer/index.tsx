import React from 'react';
import {
	IoIosArrowUp,
	IoIosPhonePortrait,
	IoLogoFacebook,
	IoLogoInstagram,
	IoLogoTwitter,
	IoMdHeart,
	IoMdMail,
	IoMdPhonePortrait,
} from 'react-icons/io';

import { BiCurrentLocation } from 'react-icons/bi';

interface FooterPageProps {}

export const FooterPage = (props: FooterPageProps) => {
	return (
		<footer className='ftco-footer ftco-section'>
			<div className='container'>
				<div className='row'>
					<div className='mouse'>
						<a href='#' className='mouse-icon'>
							<div className='mouse-wheel'>
								<IoIosArrowUp />
								{/* <span className='ion-ios-arrow-up'></span> */}
							</div>
						</a>
					</div>
				</div>
				<div className='row mb-5'>
					<div className='col-md'>
						<div className='ftco-footer-widget mb-4'>
							<h2 className='ftco-heading-2'>Vegefoods</h2>
							<p>
								Far far away, behind the word mountains, far
								from the countries VietNam .
							</p>
							<ul
								className='
									ftco-footer-social
									list-unstyled
									float-md-left float-lft
									mt-5
								'
							>
								<li className='ftco-animate'>
									<a href='#' className='footer-social'>
										<IoLogoTwitter />
										{/* <span className='icon-twitter'></span> */}
									</a>
								</li>
								<li className='ftco-animate'>
									<a href='#' className='footer-social'>
										<IoLogoFacebook />
										{/* <span className='icon-facebook'></span> */}
									</a>
								</li>
								<li className='ftco-animate'>
									<a href='#' className='footer-social'>
										<IoLogoInstagram />
										{/* <span className='icon-instagram'></span> */}
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-md'>
						<div className='ftco-footer-widget mb-4 ml-md-5'>
							<h2 className='ftco-heading-2'>Menu</h2>
							<ul className='list-unstyled'>
								<li>
									<a href='#' className='py-2 d-block'>
										Shop
									</a>
								</li>
								<li>
									<a href='#' className='py-2 d-block'>
										About
									</a>
								</li>
								<li>
									<a href='#' className='py-2 d-block'>
										Journal
									</a>
								</li>
								<li>
									<a href='#' className='py-2 d-block'>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='ftco-footer-widget mb-4'>
							<h2 className='ftco-heading-2'>Help</h2>
							<div className='d-flex'>
								<ul className='list-unstyled mr-l-5 pr-l-3 mr-4'>
									<li>
										<a href='#' className='py-2 d-block'>
											Shipping Information
										</a>
									</li>
									<li>
										<a href='#' className='py-2 d-block'>
											Returns &amp; Exchange
										</a>
									</li>
									<li>
										<a href='#' className='py-2 d-block'>
											Terms &amp; Conditions
										</a>
									</li>
									<li>
										<a href='#' className='py-2 d-block'>
											Privacy Policy
										</a>
									</li>
								</ul>
								<ul className='list-unstyled'>
									<li>
										<a href='#' className='py-2 d-block'>
											FAQs
										</a>
									</li>
									<li>
										<a href='#' className='py-2 d-block'>
											Contact
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-md'>
						<div className='ftco-footer-widget mb-4'>
							<h2 className='ftco-heading-2'>
								Have a Questions?
							</h2>
							<div className='block-23 mb-3'>
								<ul>
									<li>
										<BiCurrentLocation />
										{/* <span className='icon icon-map-marker'></span> */}
										<span className='text'>
											28 Luu Chi Hieu street, Ba Ria city
										</span>
									</li>
									<p></p>
									<li>
										<a href='#'>
											<IoMdPhonePortrait />
											{/* <span className='icon icon-phone'></span> */}

											<span className='text'>
												+0925 100 721
											</span>
										</a>
									</li>
									<li>
										<a href='#'>
											<IoMdMail />
											{/* <span className='icon icon-envelope'></span> */}
											<span className='text'>
												TrumBR@gmail.com
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<p>
							Copyright &copy; 2021 All rights reserved | This
							template is made with <IoMdHeart />
							{/* <i
								className='icon-heart color-danger'
								aria-hidden='true'
							></i> */}
							by {''}
							<a
								href='https://www.facebook.com/buitrunghieu2606/'
								target='_blank'
							>
								TNH@hcmute.edu.vn
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
