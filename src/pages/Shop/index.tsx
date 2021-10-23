import React from 'react';
import HeroCommon from '../../components/HeroCommon';
import Pagination from '../../components/Pagination';
import ShopFilter from './components/ShopFilter';
import ShopProduct from './components/ShopProduct';

const ShopPage = () => {
	return (
		<main>
			<HeroCommon />
			<section className='ftco-section'>
				<div className='container'>
					<ShopFilter />
					<ShopProduct />
					<Pagination />
				</div>
			</section>
		</main>
	);
};

export default ShopPage;
