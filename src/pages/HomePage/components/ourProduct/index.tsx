import React from 'react';
import CardProduct from '../../../../components/CardProduct';

interface Props {}

const OurProduct = (props: Props) => {
	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	return (
		<section className='ftco-section'>
			<div className='container'>
				<div className='row justify-content-center mb-3 pb-3'>
					<div
						className='
							col-md-12
							heading-section
							text-center
							ftco-animate
						'
					>
						<span className='subheading'>Featured Products</span>
						<h2 className='mb-4'>Our Products</h2>
						<p>
							Far far away, behind the word mountains, far from
							the countries Vokalia and Consonantia
						</p>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row'>
					{data.map((e, i) => (
						<div className='col-md-6 col-lg-3 ftco-animate' key={i}>
							<CardProduct />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurProduct;
