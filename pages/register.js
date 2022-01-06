/* eslint-disable @next/next/no-img-element */
import { Link } from '@mui/material';
import React from 'react';
import Register from '../components/Register';

const login = () => {
	return (
		<div className="h-screen bg-[#6C7A89] text-[#354649]">
			<div className="bg-[#6C7A89] text-[#354649] flex items-center justify-around content-center w-[100%] h-[100%]">
				<div className="bg-[#E0E7E9] shadow-lg relative rounded-t-full border-x-[0.5px] border-b-[0.5px] border-[#354649] flex-1 max-w-[500px]">
					<div className="absolute w-[100%] text-center mt-[40%] font-sans sm:text-6xl text-4xl font-bold break-words">
						<div>Neretva.com</div>
						<div>Register</div>
					</div>
					<img
						src="/images/image65.png"
						alt="Cart" //change name
						className="w-[100%] border-[0.5px] border-[#354649] rounded-full"
					/>
					<div className="text-center mt-[3%] font-sans sm:text-5xl text-3xl font-normal break-words">
						Please enter your information
					</div>
					<Register />
					<Link className="no-underline text-[#354649]" href="/">
						<div className="underline text-center">Return home</div>
					</Link>
					<div className="text-center my-[0.1em] text-2xl">
						Already have account?
					</div>
					<div className="mt-[1em] flex text-center justify-around w-[100%]">
						<Link href="/login" className="no-underline flex">
							<div className="bg-[#A3C6C4] w-[5em] py-[0.2em] mt-3 mb-[0.5em] text-2xl text-[#354649]">
								Login
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default login;
