import React from 'react';
import { FooterPage } from '../../components/Footer';
import { ButtonGroup, Button } from 'react-bootstrap';
import HeroWrap from './components/HeroWrap';
import CartInfo from './components/CartInfo';

interface CartProps {}

export const Cart = (props: CartProps) => {
	return (
		<div>
			<HeroWrap />
			<CartInfo />
		</div>
	);
};
