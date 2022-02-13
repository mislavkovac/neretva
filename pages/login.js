/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const login = () => {
	return (
		<div className="h-screen bg-[#314455] text-[#314455]">
			<div className="bg-[#314455] text-[#314455] flex items-center justify-around content-center w-[100%] h-[100%]">
				<div className="bg-[#E0E7E9] shadow-lg relative border-[#314455] flex-1 max-w-[500px]">
					<div className="text-center text-3xl sm:text-4xl mt-[3%] font-extrabold text-[#314455] underline decoration-[#C96567] break-words">
						Please enter your information
					</div>
					<div className="font-sans text-xl pt-3 mx-[1rem] sm:mx-[3rem] text-[#314455] font-normal">
						Email:
					</div>
					<div>
						<label className="relative block mx-[1rem] sm:mx-[3rem]">
							<span className="absolute inset-y-0 left-0 flex items-center pl-2">
								<svg
									className="h-5 w-5 fill-gray-300"
									viewBox="0 0 20 20"
								></svg>
							</span>
							<input
								className="placeholder:text-[#6C7A89] placeholder:text-lg rounded-md text-xl block bg-white w-full border border-gray-300 py-2 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
								placeholder="example@example.com"
								type="text"
								name="search"
							/>
						</label>
					</div>
					<div className="font-sans text-xl pt-3 mx-[1rem] sm:mx-[3rem] text-[#314455] font-normal">
						Passphrase:
					</div>
					<div className="flex flex-col justify-center items-center">
						<label className="relative block mx-[1rem] sm:mx-[3rem]">
							<span className="absolute inset-y-0 left-0 flex items-center pl-2">
								<svg
									className="h-5 w-5 fill-gray-300"
									viewBox="0 0 20 20"
								></svg>
							</span>
							<input
								className="placeholder:text-[#6C7A89] placeholder:text-lg rounded-md text-xl block bg-white w-full border border-gray-300 py-2 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
								placeholder="Enter passphrase"
								type="text"
								name="search"
							/>
						</label>
						<div className="mt-[1em] flex text-center justify-around w-[100%]">
							<Link href="/" className="no-underline flex" passHref>
								<div className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-xl text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]">
									Login
								</div>
							</Link>
						</div>
						<Link href="/" passHref>
							<div className="no-underline flex text-center justify-around bg-[#314455] w-[7rem] py-[0.2em] my-3 text-base text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]">
								Return home
							</div>
						</Link>
						<div className="text-center my-[0.1em] text-2xl">
							Don’t have account?
						</div>
						<div className="mt-[1em] flex text-center justify-around w-[100%]">
							<Link href="/register" className="no-underline flex" passHref>
								<div className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-xl text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]">
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
