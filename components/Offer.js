/* eslint-disable @next/next/no-img-element */
import Tags from './Tags';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PercentIcon from '@mui/icons-material/Percent';

const Offer = ({ id, image, price, prevPrice, name, desc, tag }) => {
	return (
		<div className="bg-[#FAFAFA] flex-1 mr-[0.5rem] shadow-sm flex flex-col justify-center px-[1rem] items-center">
			<div className="text-center">
				<div className="font-sans text-4xl mt-[1rem] md:mt-0 font-bold mb-2 text-[#C96567] underline decoration-[#314455]">
					Special discount
				</div>
				<div className="font-sans text-4xl font-bold mb-2 text-[#314455] underline decoration-[#C96567]">
					Back in stock
				</div>
			</div>
			<div className="flex flex-col md:flex-row">
				<div className="max-w-[400px] flex-1 justify-center flex">
					<img
						className="max-h-[300px] min-w-[150px] m-[1rem] flex-1"
						src={`/images/${image[0]}`}
						alt={`${image[0]}`}
					/>
				</div>
				<div className="flex flex-col justify-center">
					<div className="text-center font-sans text-2xl font-bold text-[#314455]">
						{name}
					</div>
					<div className="text-center font-sans text-md font-bold text-[#C96567]">
						{desc}
					</div>
					<div className="">
						<div className="text-center font-sans text-md font-normal line-through text-[#000000] mb-2">
							{prevPrice}
						</div>
						<div className="text-center font-sans text-lg font-bold mb-2 text-[#C96567]">
							{price}
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[1.5rem] items-center flex md:flex-row flex-col justify-center">
				<Chip
					icon={
						<LocalOfferIcon style={{ color: '#FAFAFA', padding: '0.1rem' }} />
					}
					label="Best Offer"
					style={{
						color: '#FAFAFA',
						background: '#644e5b',
						fontWeight: '900',
						width: 'fit-content',
						margin: '0.3rem 0.3rem',
					}}
				/>
				<Chip
					icon={
						<AccessTimeIcon
							style={{
								color: '#FAFAFA',
								padding: '0.1rem',
							}}
						/>
					}
					style={{
						color: '#FAFAFA',
						background: '#9e5a63',
						fontWeight: '900',
						width: 'fit-content',
						margin: '0.3rem 0.3rem',
					}}
					label="HurryUp!!"
				/>
				<Chip
					icon={
						<PercentIcon
							style={{
								color: '#FAFAFA',
								padding: '0.1rem',
							}}
						/>
					}
					style={{
						color: '#FAFAFA',
						background: '#97aabd',
						fontWeight: '900',
						width: 'fit-content',
						margin: '0.3rem 0.3rem',
					}}
					label="20"
				/>
			</div>
		</div>
	);
};

export default Offer;
