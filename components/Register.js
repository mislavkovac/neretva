import { Link } from '@mui/material';
import React from 'react';
import { useState } from 'react';

export default function Register() {
	const [firstButton, setShowMe] = useState(true);
	function first() {
		setShowMe(!firstButton);
	}
	const [secondButton, setShowMe1] = useState(false);
	function second() {
		setShowMe(!firstButton);
		setShowMe1(!secondButton);
	}
	const [thirdButton, setShowMe2] = useState(false);
	function third() {
		setShowMe1(!secondButton);
		setShowMe2(!thirdButton);
	}
	const [forthButton, setShowMe3] = useState(false);
	function forth() {
		setShowMe2(!secondButton);
		setShowMe3(!forthButton);
	}
	return (
		<div>
			<div className="flex flex-row items-center justify-center mt-[1em]">
				<div
					style={{
						backgroundColor: firstButton ? '#A3C6C4' : '#E0E7E9',
					}}
					className="flex-1 border-2 border-[#354649] bg-[#A3C6C4] max-w-[30px] h-[30px] text-center text-xl rounded-full"
				>
					1
				</div>
				<hr className="w-[120px] border-[0.25px] border-[#354649]"></hr>
				<div
					style={{
						backgroundColor: secondButton ? '#A3C6C4' : '#E0E7E9',
					}}
					className="flex-1 border-2 border-[#354649] bg-[#E0E7E9] max-w-[30px] h-[30px] text-center text-xl rounded-full"
				>
					2
				</div>
				<hr className="w-[120px] border-[0.25px] border-[#354649]"></hr>
				<div
					style={{
						backgroundColor: thirdButton ? '#A3C6C4' : '#E0E7E9',
					}}
					className="flex-1 border-2 border-[#354649] bg-[#E0E7E9] max-w-[30px] h-[30px] text-center text-xl rounded-full"
				>
					3
				</div>
			</div>
			<div
				style={{
					display: firstButton ? 'block' : 'none',
				}}
				className="font-sans text-xl pt-3 mx-[3rem] text-[#354649] font-normal"
			>
				Full name:
			</div>
			<div>
				<label
					style={{
						display: firstButton ? 'block' : 'none',
					}}
					className="relative block mx-[3rem]"
				>
					<span className="absolute inset-y-0 left-0 flex items-center pl-2">
						<svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20"></svg>
					</span>
					<input
						className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
						placeholder="e.g. Ivo Ivic"
						type="text"
						name="search"
					/>
				</label>
			</div>
			<div
				style={{
					display: firstButton ? 'block' : 'none',
				}}
				className="font-sans text-xl pt-3 mx-[3rem] text-[#354649] font-normal"
			>
				Username:
			</div>
			<div>
				<label
					style={{
						display: firstButton ? 'block' : 'none',
					}}
					className="relative block mx-[3rem]"
				>
					<span className="absolute inset-y-0 left-0 flex items-center pl-2">
						<svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20"></svg>
					</span>
					<input
						className="placeholder:text-[#6C7A89] placeholder:text-lg mb-[1rem] text-xl block bg-white w-full border border-gray-300 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
						placeholder="Username"
						type="text"
						name="search"
					/>
				</label>

				<div className=" flex text-center justify-around w-[100%]">
					<button
						style={{
							display: firstButton ? 'block' : 'none',
						}}
						onClick={second}
						className="bg-[#A3C6C4] w-[5em] py-[0.2em] text-2xl text-[#354649]"
					>
						Next
					</button>
				</div>
				<div
					style={{
						display: secondButton ? 'block ' : 'none',
					}}
					className="font-sans text-xl pt-3 mx-[3rem] text-[#354649] font-normal"
				>
					Email:
				</div>
				<div>
					<label
						style={{
							display: secondButton ? 'block ' : 'none',
						}}
						className="relative block mx-[3rem]"
					>
						<span className="absolute inset-y-0 left-0 flex items-center pl-2">
							<svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20"></svg>
						</span>
						<input
							className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
							placeholder="example@example.com"
							type="text"
							name="search"
						/>
					</label>
				</div>
				<div
					style={{
						display: secondButton ? 'block' : 'none',
					}}
					className="font-sans text-xl pt-3 mx-[3rem] text-[#354649] font-normal"
				>
					Repeat Email:
				</div>
				<div>
					<label
						style={{
							display: secondButton ? 'block' : 'none',
						}}
						className="relative block mx-[3rem]"
					>
						<span className="absolute inset-y-0 left-0 flex items-center pl-2">
							<svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20"></svg>
						</span>
						<input
							className="placeholder:text-[#6C7A89] placeholder:text-lg mb-[1rem] text-xl block bg-white w-full border border-gray-300 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
							placeholder="example@example.com"
							type="text"
							name="search"
						/>
					</label>
				</div>
				<div className="flex flex-row">
					<div className=" w-[100%] flex justify-around">
						<button
							style={{
								display: secondButton ? 'block' : 'none',
							}}
							onClick={second}
							className="bg-[#A3C6C4] w-[5em] py-[0.2em] text-2xl text-[#354649]"
						>
							Previous
						</button>
					</div>
					<div className=" w-[100%] flex justify-around">
						<button
							style={{
								display: secondButton ? 'block' : 'none',
							}}
							onClick={third}
							className="bg-[#A3C6C4] w-[5em] py-[0.2em] text-2xl text-[#354649]"
						>
							Next
						</button>
					</div>
				</div>
				<div
					style={{
						display: thirdButton ? 'block ' : 'none',
					}}
					className="font-sans text-xl pt-3 mx-[3rem] text-[#354649] font-normal"
				>
					Passphrase:
				</div>
				<div>
					<label
						style={{
							display: thirdButton ? 'block ' : 'none',
						}}
						className="relative block mx-[3rem]"
					>
						<span className="absolute inset-y-0 left-0 flex items-center pl-2">
							<svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20"></svg>
						</span>
						<input
							className="placeholder:text-[#6C7A89] placeholder:text-lg text-xl block bg-white w-full border border-gray-300 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
							placeholder="Passphrase"
							type="password"
							name="search"
						/>
					</label>
				</div>
				<div
					style={{
						display: thirdButton ? 'block' : 'none',
					}}
					className="font-sans text-xl pt-3 mx-[3rem] text-[#354649] font-normal"
				>
					Repeat Passphrase:
				</div>
				<div>
					<label
						style={{
							display: thirdButton ? 'block' : 'none',
						}}
						className="relative block mx-[3rem]"
					>
						<span className="absolute inset-y-0 left-0 flex items-center pl-2">
							<svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20"></svg>
						</span>
						<input
							className="placeholder:text-[#6C7A89] placeholder:text-lg mb-[1rem] text-xl block bg-white w-full border border-gray-300 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#6C7A89] focus:ring-[#6C7A89] focus:ring-1"
							placeholder="Repeat Passphrase"
							type="password"
							name="search"
						/>
					</label>
				</div>
				<div className="flex flex-row mb-[2em]">
					<div className=" w-[100%] flex justify-around">
						<button
							style={{
								display: thirdButton ? 'block' : 'none',
							}}
							onClick={third}
							className="bg-[#A3C6C4] w-[5em] py-[0.2em] text-2xl text-[#354649]"
						>
							Previous
						</button>
					</div>
					<div className=" w-[100%] flex justify-around">
						<Link className="no-underline" href="/">
							<button
								style={{
									display: thirdButton ? 'block' : 'none',
								}}
								onClick={forth}
								className="bg-[#A3C6C4] w-[5em] py-[0.2em] text-2xl text-[#354649]"
							>
								Register
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
