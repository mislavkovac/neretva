/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Link } from '@mui/material';

const Cartheader = () => {
	return (
		<div className="flex flex-row justify-center break-words content-center">
			<div className="bg-[#E0E7E9] shadow-lg mb-[0.5em] mr-[0.5em] max-w-[500px] flex-[1_1_100%] border-[0.5px] border-[#354649]">
				<div className="ml-[1em]">
					<div className="font-sans text-4xl font-bold text-[#314455] underline decoration-[#C96567]">
						Neretva.com
					</div>
					<div className="font-sans text-2xl font-normal">
						Your shopping cart
					</div>
					<div className="font-sans text-lg font-normal mt-[1em]">
						You are not logged in, checking out as Guest
					</div>
				</div>
			</div>
			<div className="bg-[#E0E7E9] shadow-lg mb-[0.5em] ml-[0.5em] max-w-[450px] flex-[1_1_100%] border-[0.5px] border-[#354649]">
				<div className="font-sans text-xl font-normal mt-[1em] ml-[1em]">
					You can login or register here:
				</div>
				<div>
					<div className="mt-[1em] flex text-center justify-around w-[100%]">
						<Link href="/register" className="no-underline flex">
							<div className="bg-[#314455] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567] text-2xl text-[#ffffff] w-[5em] py-[0.2em] mt-3">
								Register
							</div>
						</Link>
						<Link href="/login" className="no-underline flex">
							<div className="bg-[#314455] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567] text-2xl text-[#ffffff] w-[5em] py-[0.2em] mt-3">
								Login
							</div>
						</Link>
					</div>
				</div>
				<div>
					<Link className="no-underline text-[#354649]" href="/">
						<div className="underline text-center">Return home</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cartheader;
