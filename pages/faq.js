/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Faq from '../components/Faq';
import FaqMobile from '../components/FaqMobile';

const faq = () => {
	return (
		<div>
			<div className="hidden sm:block">
				<Faq />
			</div>
			<div className="block sm:hidden">
				<FaqMobile />
			</div>
		</div>
	);
};

export default faq;
