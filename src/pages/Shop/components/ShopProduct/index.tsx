import React from 'react';
import CardProduct from '../../../../components/CardProduct';

const ShopProduct = () => {
	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	return (
		<div className='row'>
			{data.map((e) => (
				<div className='col-md-6 col-lg-3 ftco-animate'>
					<CardProduct key={e} />
				</div>
			))}
		</div>
	);
};

export default ShopProduct;
