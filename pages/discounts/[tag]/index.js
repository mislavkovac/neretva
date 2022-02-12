/* eslint-disable @next/next/no-img-element */
import React from 'react';
import DiscountTag from '../../../components/DiscountTag';
import DiscountTagMobile from '../../../components/DiscountTagMobile';

export default function Categorie() {
	return (
		<div>
			<div className="hidden sm:block">
				<DiscountTag />
			</div>
			<div className="block sm:hidden">
				<DiscountTagMobile />
			</div>
		</div>
	);
}
