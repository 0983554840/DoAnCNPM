import React from 'react';
import { IoIosAnalytics, IoIosCart } from 'react-icons/io';
import { HiOutlineHeart } from 'react-icons/hi';

const CardProduct = (props: { data?: any }) => {
	console.log(props.data);
	return (
		<div className='product'>
			<a href='#' className='img-prod'>
				<img
					className='img-fluid'
					src={props.data?.image}
					alt='Colorlib Template'
				/>
				<div className='overlay'></div>
			</a>
			<div className='text py-3 pb-4 px-3 text-center'>
				<h3>
					<a href='#'>{props.data?.name}</a>
				</h3>
				<div className='d-flex'>
					<div className='pricing'>
						<p className='price'>
							<span>{props.data?.price}</span>
						</p>
					</div>
				</div>
				<div className='bottom-area d-flex px-4'>
					<div className='m-auto d-flex'>
						<a
							href='#'
							className='
												buy-now
												d-flex
												justify-content-center
												align-items-center
												mx-1
											'
						>
							<span>
								<IoIosCart />
							</span>
						</a>
						<a
							href='#'
							className='
												heart
												d-flex
												justify-content-center
												align-items-center
											'
						>
							<span>
								<HiOutlineHeart />
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardProduct;
