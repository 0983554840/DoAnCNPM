import React from 'react';
import CardProduct from '../../../../components/CardProduct';
import product1 from '../../../../images/product-1.jpg';
import product2 from '../../../../images/product-2.jpg';
import product3 from '../../../../images/product-3.jpg';
import product4 from '../../../../images/product-4.jpg';

const RelativeProduct = () => {
	const data = [1, 2, 3, 4];
	return (
		<div>
			<section className='ftco-section'>
				<div className='container'>
					<div className='row justify-content-center mb-3 pb-3'>
						<div className='col-md-12 heading-section text-center ftco-animate'>
							<span className='subheading'>Products</span>
							<h2 className='mb-4'>Related Products</h2>
							<p>
								Far far away, behind the word mountains, far
								from the countries VietNam
							</p>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='row'>
						{data.map((e, i) => (
							<div
								className='col-md-6 col-lg-3 ftco-animate'
								key={i}
							>
								<CardProduct />
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default RelativeProduct;
