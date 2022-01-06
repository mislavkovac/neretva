/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Images = ({ image, color }) => {
	return (
		<div className="max-w-[80px] m-[0.3em]">
			<img
				src={`/images/${image}`}
				alt="Cart" //change name
				className="max-h-[100px] shadow-md bg-[#f0f0f0]"
			/>
		</div>
	);
};

export default Images;
