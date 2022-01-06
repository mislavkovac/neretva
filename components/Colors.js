/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Colors = ({ id, image, price, prevPrice, name, desc, tag, color }) => {
	return (
		<div className="ml-[0.3rem] mt-[1em] text-center justify-start flex flex-row font-sans text-[#354649] font-normal">
			<button className="mx-[0.25em] flex flex-col items-center max-w-[60px] transition duration-700 ease-in-out hover:scale-105">
				<img
					src={`/images/${image}`}
					alt="Cart" //change name
					className="h-[3.5em] max-w-[4em] shadow-md"
				/>
				<div className="font-sans text-base text-[#354649] font-normal">
					{color}
				</div>
			</button>
		</div>
	);
};

export default Colors;
