import { Avatar, Rating } from '@mui/material';
import { Box } from '@mui/system';
import CommentIcon from '@mui/icons-material/Comment';
import React from 'react';

const ProductReview = ({ name, desc, rating, review }) => {
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
	return (
		<div className="cursor-pointer m-2 max-w-[100%] flex flex-row content-between justify-between rounded overflow-hidden shadow-xl bg-[#ffffff] border-b-[2px] border-[#C96567] transition duration-700 ease-in-out hover:scale-105">
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
				<div className="ml-[1rem] mr-[2rem] my-[0.5rem]">
					<p className="flex-1 text-[#314455] text-base max-w-3xl font-sans font-normal">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
				<div className="flex flex-row justify-end mr-[1rem] items-center mb-[1rem]">
					<Avatar
						sx={{
							bgcolor: '#314455',
							width: '2.2rem',
							height: '2.2rem',
						}}
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

export default ProductReview;
