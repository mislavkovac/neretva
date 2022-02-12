/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Rating from '../components/Rating';
import Description from '../components/Description';
import Colors from './Colors';
import Images from './Images';

const Product = ({ image, price, prevPrice, name, desc, tag, color }) => {
	let colors = [];
	let images = [];
	let i = 0;
	let show = true;

	for (i = 0; i < color.length; i++) {
		images.push(<Images image={image[i]} />);
	}

	for (i = 0; i < color.length; i++) {
		colors.push(<Colors image={image[i]} color={color[i]} />);
	}

	if (colors.length === 0) {
		show = false;
	}

	return (
		<div>
			<div className="flex flex-col justify-center">
				<div className="font-sans text-4xl ml-[1rem] text-[#354649] font-bold">
					{name}
				</div>
				<div className="font-sans text-2xl pt-[0.2em] mx-[1rem] text-[#C96567] font-bold">
					{desc}
				</div>
				<div className="ml-[1rem] mt-[0.2em]">
					<Rating />
				</div>
				<div className="flex flex-col m-[1em] items-center content-between justify-between rounded overflow-hidden shadow-lg bg-[#FAFAFA]">
					<img
						src={`/images/${image[0]}`}
						alt="Cart" //change name
						className="max-w-[250px] max-h-[250px] min-h-[200px] p-[0.2em]"
					/>
					<div className="justify-center flex flex-row">{images}</div>
				</div>
				<div className="flex flex-col">
					<div className="flex flex-row justify-between">
						<div className="flex flex-col font-sans font-bold ml-[2rem]">
							<div className="text-2xl">Price:</div>
							<div className="flex flex-col text-lg">
								<div className="text-[#818181] line-through">{prevPrice}</div>
								<div className="">{price}</div>
							</div>
						</div>
						<div className="flex flex-col">
							<div className="font-sans font-bold">QTY:</div>
							<label className="relative block mr-[2rem]">
								<input
									className="placeholder:text-[#6C7A89] placeholder:text-md text-base block bg-white w-[60px] border border-gray-300 rounded-sm py-[0.1em] pl-3 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
									defaultValue="1"
									type="number"
									min="1"
									name="search"
								/>
							</label>
						</div>
					</div>
					<div className="flex flex-row ml-[2rem]">
						{colors.length !== 0 ? (
							<div className="pt-[1.5em] font-sans font-bold text-xl">
								Color:
							</div>
						) : (
							''
						)}
						{colors}
					</div>
					<div className="flex self-center">
						<button className="bg-[#314455] w-[8em] px-[0.5em] mt-[1em] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567] py-[0.2em] text-2xl text-[#ffffff]">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
