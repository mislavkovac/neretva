/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ReviewsTag from '../../../components/ReviewsTag';
import ReviewsTagMobile from '../../../components/ReviewsTagMobile';

export default function Productreview() {
	return (
		<div>
			<div className="hidden sm:block">
				<ReviewsTag />
			</div>
			<div className="block sm:hidden">
				<ReviewsTagMobile />
			</div>
		</div>
	);
}
