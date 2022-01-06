/* eslint-disable @next/next/no-img-element */
import { Link } from '@mui/material';
import React from 'react';

const login = () => {
	return (
		<div className="h-screen bg-[#6C7A89] text-[#354649]">
			<div className="bg-[#6C7A89] text-[#354649] flex items-center justify-around content-center w-[100%] h-[100%]">
				<div className="bg-[#E0E7E9] shadow-lg relative rounded-t-full border-x-[0.5px] border-b-[0.5px] border-[#354649] flex-1 max-w-[500px]">
					<div className="absolute w-[100%] text-center mt-[40%] font-sans sm:text-6xl text-4xl font-bold break-words">
						<div>Neretva.com</div>
						<div>Login</div>
					</div>
					<img
						src="/images/image65.png"
						alt="Cart" //change name
						className="w-[100%] border-[0.5px] border-[#354649] rounded-full"
					/>
					<div className="font-sans text-xl pt-3 mx-[3rem] text-[#354649] font-normal">
						Email:
					</div>
					<div>
						<label className="relative block mx-[3rem]">
							<span className="absolute inset-y-0 left-0 flex items-center pl-2">
								<svg
									className="h-5 w-5 fill-gray-300"
									viewBox="0 0 20 20"
								></svg>
							</span>
							<input
								className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
								placeholder="example@example.com"
								type="text"
								name="search"
							/>
						</label>
					</div>
					<div className="font-sans text-xl pt-3 mx-[3rem] text-[#354649] font-normal">
						Passphrase:
					</div>
					<div>
						<label className="relative block mx-[3rem]">
							<span className="absolute inset-y-0 left-0 flex items-center pl-2">
								<svg
									className="h-5 w-5 fill-gray-300"
									viewBox="0 0 20 20"
								></svg>
							</span>
							<input
								className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
								placeholder="Enter passphrase"
								type="text"
								name="search"
							/>
						</label>
						<div className="mt-[1em] flex text-center justify-around w-[100%]">
							<Link href="/" className="no-underline flex">
								<div className="bg-[#A3C6C4] w-[5em] py-[0.2em] mt-3 mb-[2em] text-2xl text-[#354649]">
									Login
								</div>
							</Link>
						</div>
						<Link className="no-underline text-[#354649]" href="/">
							<div className="underline text-center">Return home</div>
						</Link>
						<div className="text-center my-[0.1em] text-2xl">
							Don’t have account?
						</div>
						<div className="mt-[1em] flex text-center justify-around w-[100%]">
							<Link href="/register" className="no-underline flex">
								<div className="bg-[#A3C6C4] w-[5em] py-[0.2em] mt-3 mb-[0.5em] text-2xl text-[#354649]">
									Register
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default login;
