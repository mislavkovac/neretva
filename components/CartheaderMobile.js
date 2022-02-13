/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import React from 'react';
import { Fade, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CartheaderMobile = () => {
	const [showOptions, setShowOptions] = useState(false);
	function options() {
		setShowOptions(!showOptions);
	}
	const [showCategories, setShowCategories] = useState(false);
	function categories() {
		setShowCategories(!showCategories);
		if (showSort === true) {
			setShowSort(!showSort);
		}
	}
	const [showSort, setShowSort] = useState(false);
	function sort() {
		setShowSort(!showSort);
		if (showCategories === true) {
			setShowCategories(!showCategories);
		}
	}
	return (
		<div className="flex flex-col justify-center break-words content-center">
			<div className="bg-[#E0E7E9] shadow-lg mb-[0.5em] flex-[1_1_100%] border-[0.5px] border-[#354649]">
				<div className="flex flex-col items-center">
					<Link
						href="/"
						className="font-sans text-2xl font-bold text-[#314455] underline decoration-[#C96567]"
					>
						Neretva.com
					</Link>
					<div className="font-sans text-md font-normal">
						Your shopping cart
					</div>
					<div className="mt-[0.2rem] mb-[0.5rem] flex flex-col text-center justify-around w-[100%]">
						<div className="flex flex-row justify-around">
							<Link href="/register" className="no-underline flex">
								<div className="bg-[#314455] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567] text-md text-[#ffffff] w-[5em] py-[0.2em] mt-3">
									Register
								</div>
							</Link>
							<Link href="/login" className="no-underline flex">
								<div className="bg-[#314455] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567] text-md text-[#ffffff] w-[5em] py-[0.2em] mt-3">
									Login
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartheaderMobile;
