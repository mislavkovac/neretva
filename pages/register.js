/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Register from '../components/Register';

const login = () => {
	return (
		<div className="h-screen bg-[#314455] text-[#314455]">
			<div className="bg-[#314455] text-[#314455] flex items-center justify-around content-center w-[100%] h-[100%]">
				<div className="bg-[#E0E7E9] shadow-lg border-[#314455] flex-1 max-w-[500px]">
					<div className="text-center text-3xl sm:text-4xl mt-[3%] font-extrabold text-[#314455] underline decoration-[#C96567] break-words">
						Please enter your information
					</div>
					<Register />
					<Link
						href="/"
						className="no-underline flex text-center justify-around"
						passHref
					>
						<div className="bg-[#314455] w-[7em] py-[0.2em] my-3 text-base text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]">
							Return home
						</div>
					</Link>
					<div className="text-center my-[0.1em] text-2xl">
						Already have account?
					</div>
					<div className="mt-[1em] flex text-center justify-around w-[100%]">
						<Link href="/login" className="no-underline flex" passHref>
							<div className="bg-[#314455] w-[5em] py-[0.2em] my-3 text-xl text-[#ffffff] shadow-lg rounded-md hover:text-[#314455] hover:bg-[#C96567]">
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
