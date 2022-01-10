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
				<div className="font-sans text-4xl font-bold mb-2 text-[#C96567] underline decoration-[#314455]">
					Special discount
				</div>
				<div className="font-sans text-4xl font-bold mb-2 text-[#314455] underline decoration-[#C96567]">
					Back in stock
				</div>
			</div>
			<div className="flex flex-row">
				<div className="max-w-[400px] flex-1 justify-center flex">
					<img
						className="max-h-[300px] m-[1rem]"
						src={`/images/${image[0]}`}
						alt={`${image[0]}`}
					/>
				</div>
				<div className="flex flex-col justify-center">
					<div className="text-center font-sans text-2xl font-normal text-[#314455]">
						{name}
					</div>
					<div className="text-center font-sans text-md font-normal text-[#314455]">
						{desc}
					</div>
					<div className="">
						<div className="text-center font-sans text-md font-normal line-through text-[#000000] mb-2">
							{prevPrice}
						</div>
						<div className="text-center font-sans text-lg font-normal mb-2 text-[#C96567]">
							{price}
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[1.5rem]">
				<Stack direction="row" spacing={1}>
					<Chip
						icon={<LocalOfferIcon style={{ color: '#C96567' }} />}
						label="Best Offer"
						style={{
							color: '#C96567',
							background: '#314455',
							fontWeight: '900',
						}}
					/>
					<Chip
						icon={
							<AccessTimeIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#314455',
							fontWeight: '900',
						}}
						label="HurryUp!!"
					/>
					<Chip
						icon={
							<PercentIcon
								style={{
									color: '#C96567',
								}}
							/>
						}
						style={{
							color: '#C96567',
							background: '#314455',
							fontWeight: '900',
						}}
						label="20"
					/>
				</Stack>
			</div>
		</div>
	);
};

export default Offer;
