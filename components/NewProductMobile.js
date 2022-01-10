/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Chip from '@mui/material/Chip';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Stack from '@mui/material/Stack';
import PercentIcon from '@mui/icons-material/Percent';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const NewProductMobile = ({ id, image, price, prevPrice, name, desc, tag }) => {
	return (
		<div className="bg-[#FAFAFA] ml-[0.5rem] shadow-sm flex flex-col justify-between px-[1rem] items-center break-words">
			<div className="flex-1 max-w-[400px] justify-center">
				<img
					className="max-h-[200px] m-[1rem] flex-1"
					src={`/images/${image[0]}`}
					alt={`${image[0]}`}
				/>
			</div>
			<div className="flex flex-1 flex-col m-[1rem] justify-center break-words">
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
					<div className="text-center font-sans text-xl font-bold mb-2 text-[#C96567]">
						{price}
					</div>
				</div>
			</div>
			<div className="flex-1">
				<Stack
					direction="column"
					spacing={1}
					style={{
						margin: '1rem 0',
					}}
				>
					<Chip
						icon={<NewReleasesIcon style={{ color: '#C96567' }} />}
						label="New"
						style={{
							color: '#C96567',
							background: '#314455',
							fontWeight: '900',
						}}
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
						label="10"
					/>
					<Chip
						icon={
							<Inventory2Icon
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
						label="Limited QTY"
					/>
				</Stack>
			</div>
		</div>
	);
};

export default NewProductMobile;
