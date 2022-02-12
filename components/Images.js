/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Images = ({ image, color }) => {
	return (
		<div className="sm:w-[80px] m-[0.3em]">
			<img
				src={`/images/${image}`}
				alt="Cart" //change name
				className="sm:max-h-[100px] max-h-[60px] shadow-md bg-[#f0f0f0]"
			/>
		</div>
	);
};

export default Images;
