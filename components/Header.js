/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState } from 'react';
import style from '../styles/Header.module.css';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Navbar from './Navbar';

export default function Header() {
	const [showSearch, setShowSearch] = useState(true);
	function searchShow() {
		setShowSearch(!showSearch);
	}
	return (
		<div className="h-[700px] mb-[0.5rem] justify-evenly bg-gradient-to-b from-[#314455] to-[#97aabd] ">
			<div className="flex flex-row justify-evenly">
				<div>
					<img
						className="max-h-[90px] m-[1rem] flex-1"
						src="/images/logo.png"
						alt="logo"
					/>
				</div>
				<input
					style={{
						display: showSearch ? 'none' : 'block',
					}}
					className="placeholder:text-[#FFFFFF] text-[#FFFFFF] w-[480px] placeholder:text-base text-base mt-[1.6rem] h-[30px] block bg-[#314455] border-[#C96567] border-[1.5px] rounded-lg shadow-sm focus:border-[#C96567] focus:ring-[#C96567]"
					placeholder="Search for products"
					type="text"
					name="search"
				/>
				<div
					style={{
						display: showSearch ? 'flex' : 'none',
						justifyContent: 'center',
					}}
					className="w-[480px] mt-[1rem]"
				>
					<Navbar />
				</div>
				<div className="mx-[7rem] flex flex-row justify-center mt-[1rem]">
					<button
						onClick={searchShow}
						className="bg-[#C96567] ml-[1rem] h-[30px] p-[0.2rem] m-[0.2rem] rounded-full flex justify-center items-center"
					>
						<SearchIcon style={{ color: 'white' }} />
					</button>
					<button className="p-[0.2rem] m-[0.2rem] rounded-full flex">
						<PersonIcon style={{ color: 'white' }} />
					</button>
					<button className="p-[0.2rem] m-[0.2rem] rounded-full flex">
						<ShoppingBagIcon style={{ color: 'white' }} />
					</button>
				</div>
			</div>
			<div className="grid grid-cols-2 items-center justify-around">
				<div className="text-[#FFFFFF] text-5xl font-extrabold text-right">
					<div className="underline decoration-[#314455]">Neretva.com</div>
					<div className="text-3xl underline decoration-[#C96567]">
						You'r best online shopping buddy!
					</div>
				</div>
				<div>
					<img className="m-[1rem] flex-1" src="/images/phone.png" alt="logo" />
				</div>
			</div>
		</div>
	);
}
