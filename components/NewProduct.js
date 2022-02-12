/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Chip from '@mui/material/Chip';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Stack from '@mui/material/Stack';
import PercentIcon from '@mui/icons-material/Percent';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const NewProduct = ({ id, image, price, prevPrice, name, desc, tag }) => {
	return (
		<div className="bg-[#FAFAFA] ml-[0.5rem] shadow-sm flex flex-col justify-between px-[1rem] items-center">
			<div className="flex flex-row">
				<div className="flex-1 max-w-[400px] justify-center">
					<img
						className="max-h-[200px] m-[1rem] flex-1"
						src={`/images/${image[0]}`}
						alt={`${image[0]}`}
					/>
				</div>
				<div className="flex flex-1 flex-col m-[1rem] justify-center break-words">
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
						<div className="text-center font-sans text-lg font-normal mb-2 text-[#C96567]">
							{price}
						</div>
					</div>
				</div>
			</div>
			<div className="md:flex md:flex-row flex-col">
				<Chip
					icon={
						<NewReleasesIcon style={{ color: '#FAFAFA', padding: '0.1rem' }} />
					}
					label="New"
					style={{
						color: '#FAFAFA',
						background: '#644e5b',
						fontWeight: '900',
						width: '5rem',
						margin: '0.3rem 0.3rem',
					}}
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
						background: '#9e5a63',
						fontWeight: '900',
						width: '4rem',
						margin: '0.3rem 0.3rem',
					}}
					label="10"
				/>
				<Chip
					icon={
						<Inventory2Icon
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
						width: '8rem',
						margin: '0.3rem 0.3rem',
					}}
					label="Limited QTY"
				/>
			</div>
		</div>
	);
};

export default NewProduct;
