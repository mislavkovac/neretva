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
			<div className="flex flex-col lg:flex-row justify-center">
				<div className="flex flex-row m-[1em] items-center content-between justify-between rounded overflow-hidden shadow-lg bg-[#FAFAFA]">
					<img
						src={`/images/${image[0]}`}
						alt="Cart" //change name
						className="max-w-[800px] max-h-[800px] min-h-[600px] p-[1em]"
					/>
					<div className="justify-center">{images}</div>
				</div>
				<div className="flex flex-col flex-1 self-center">
					<div className="font-sans text-5xl pt-[1em] ml-[3rem] text-[#354649] font-bold">
						{name}
					</div>
					<div className="font-sans text-3xl pt-[0.2em] ml-[3rem] text-[#C96567] font-bold">
						{desc}
					</div>
					<div className="ml-[3rem] mt-[1em]">
						<Rating />
					</div>
					<div className="flex flex-row my-[1em] ml-[3rem] font-sans text-xl font-bold">
						<div className="">Price:</div>
						<div className="flex flex-col">
							<div className="pl-[1em] text-[#818181] line-through">
								{prevPrice}
							</div>
							<div className="pl-[1em]">{price}</div>
						</div>
					</div>
					<div className="flex flex-row ml-[3rem] pt-[1em] items-center">
						<div>QTY:</div>
						<label className="relative block pl-[1em]">
							<input
								className="placeholder:text-[#6C7A89] placeholder:text-md text-base block bg-white w-[60px] border border-gray-300 rounded-sm py-[0.1em] pl-3 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
								defaultValue="1"
								type="number"
								min="1"
								name="search"
							/>
						</label>
					</div>
					<div className="flex flex-row">
						{colors.length !== 0 ? (
							<div className="ml-[3rem] pt-[2em]">Color:</div>
						) : (
							''
						)}
						{colors}
					</div>
					<div className="ml-[3rem]">
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
