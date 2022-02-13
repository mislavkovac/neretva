/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import CommentIcon from '@mui/icons-material/Comment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';

const OrderHistoryCard = ({ image, name, desc, rating, review }) => {
	const labels = {
		0.5: 'Useless',
		1: 'Useless+',
		1.5: 'Poor',
		2: 'Poor+',
		2.5: 'Ok',
		3: 'Ok+',
		3.5: 'Good',
		4: 'Good+',
		4.5: 'Excellent',
		5: 'Excellent+',
	};
	console.log(image);
	return (
		<div className="cursor-pointer m-2 max-w-2xl flex flex-col sm:flex-row content-between justify-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-700 ease-in-out hover:scale-105">
			<div className="max-w-[400px] justify-center flex flex-col">
				<img
					className="sm:max-h-[400px] mx-[3rem] max-h-[300px]"
					src={`/images/${image}`}
					alt={`${image}`}
				/>
			</div>
			<div className="">
				<div className="mt-[1rem] ml-[1rem]">
					<div className="font-sans text-2xl font-bold text-[#314455]">
						{name}
					</div>
					<div className="font-sans text-lg font-bold text-[#C96567]">
						{desc}
					</div>
				</div>
				<div className="flex flex-row ml-[1rem] mb-[1rem]">
					<Rating precision={0.5} name="read-only" value={rating} readOnly />
					<Box sx={{ ml: 2 }}>{labels[rating]}</Box>
				</div>
				<div className="flex flex-col ml-[1rem] mr-[2rem] my-[0.5rem]">
					<div className="flex-1 text-[#314455] text-base max-w-lg font-sans font-normal">
						Track order
					</div>
					<div className="flex-1 text-[#314455] text-base max-w-lg font-sans font-normal">
						View order details
					</div>
					<div className="flex-1 text-[#314455] text-base max-w-lg font-sans font-normal">
						Get invoice
					</div>
				</div>
				<div className="flex flex-row justify-end mr-[1rem] items-center mb-[1rem]">
					<Avatar
						sx={{ bgcolor: '#314455', width: '2.2rem', height: '2.2rem' }}
					>
						<CommentIcon />
					</Avatar>
					<div className="ml-[0.5rem] font-bold text-[#C96567]">
						By: @{review}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderHistoryCard;
