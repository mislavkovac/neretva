/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Link } from '@mui/material';

const Cartheader = () => {
	return (
		<div className="flex flex-row justify-center break-words content-center">
			<div className="bg-[#E0E7E9] shadow-lg mb-[0.5em] mr-[0.5em] max-w-[500px] flex-[1_1_100%] border-[0.5px] border-[#354649]">
				<div className="flex justify-between flex-row">
					<div className="ml-[1em]">
						<div className="font-sans text-3xl mt-[0.4em] font-normal">
							Neretva.com
						</div>
						<div className="font-sans text-2xl font-normal">
							Your shopping cart
						</div>
						<div className="font-sans text-lg font-normal mt-[1em]">
							You are not logged in, checking out as Guest
						</div>
					</div>
					<div>
						<img
							src="/images/image65.png"
							alt="Logo"
							className="max-h-[8em] p-[0.5em]"
						/>
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
							<div className="bg-[#A3C6C4] w-[5em] py-[0.2em] mt-3 text-2xl text-[#354649]">
								Register
							</div>
						</Link>
						<Link href="/login" className="no-underline flex">
							<div className="bg-[#A3C6C4] w-[5em] py-[0.2em] mt-3 text-2xl text-[#354649]">
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
