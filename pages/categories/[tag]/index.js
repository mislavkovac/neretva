/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CategoriesTag from '../../../components/CategoriesTag';
import CategoriesTagMobile from '../../../components/CategoriesTagMobile';

export default function Categorie() {
	return (
		<div className="">
			<div className="hidden sm:block">
				<CategoriesTag />
			</div>
			<div className="block sm:hidden">
				<CategoriesTagMobile />
			</div>
		</div>
	);
}
