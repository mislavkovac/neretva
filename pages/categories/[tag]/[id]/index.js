/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CategoriesTagId from '../../../../components/CategoriesTagId';
import CategoriesTagIdMobile from '../../../../components/CategoriesTagIdMobile';

const Index = () => {
	return (
		<div className="">
			<div className="hidden sm:block">
				<CategoriesTagId />
			</div>
			<div className="block sm:hidden">
				<CategoriesTagIdMobile />
			</div>
		</div>
	);
};

export default Index;
