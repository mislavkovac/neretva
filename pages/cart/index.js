import React from 'react';
import Checkout from '../../components/Checkout';
import CheckoutMobile from '../../components/CheckoutMobile';

/* eslint-disable @next/next/no-img-element */
export default function cart() {
	return (
		<div className="">
			<div className="hidden sm:block">
				<Checkout />
			</div>
			<div className="block sm:hidden">
				<CheckoutMobile />
			</div>
		</div>
	);
}
