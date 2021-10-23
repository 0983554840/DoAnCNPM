import React from 'react';
import HeroCommon from '../../components/HeroCommon';
import ProductDetail from './components/ProductDetail';
import RelativeProduct from './components/RelativeProduct';

interface Props {}

const SingleProductPage = (props: Props) => {
	return (
		<div>
			<HeroCommon />
			<ProductDetail />
			<RelativeProduct />
		</div>
	);
};

export default SingleProductPage;
