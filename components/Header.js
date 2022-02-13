/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState } from 'react';
import style from '../styles/Header.module.css';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Header() {
	const [showSearch, setShowSearch] = useState(true);
	function searchShow() {
		setShowSearch(!showSearch);
	}
	return (
		<div className="h-[700px] w-[100%] flex flex-col mb-[0.5rem] bg-gradient-to-b from-[#314455] to-[#97aabd] ">
			<div className="flex flex-row justify-center">
				<Link href="/" passHref>
					<img
						className="max-h-[50px] mt-[1rem] px-[0.4rem] self-center cursor-pointer"
						src="/images/logo.png"
						alt="logo"
					/>
				</Link>
				<input
					style={{
						display: showSearch ? 'none' : 'block',
					}}
					className="placeholder:text-[#FFFFFF] text-[#FFFFFF] w-[30rem] mx-[1rem] placeholder:text-base text-base mt-[1.6rem] h-[30px] block bg-[#314455] border-[#C96567] border-[1.5px] rounded-lg shadow-sm focus:border-[#C96567] focus:ring-[#C96567]"
					placeholder="Search for products"
					type="text"
					name="search"
				/>
				<div
					style={{
						display: showSearch ? 'flex' : 'none',
						justifyContent: 'center',
					}}
					className="w-[30rem] mt-[1rem] mx-[1rem]"
				>
					<Navbar />
				</div>
				<div className="flex flex-row justify-center mt-[1.5rem]">
					<button
						onClick={searchShow}
						className="bg-[#C96567] ml-[1rem] h-[30px] p-[0.2rem] m-[0.2rem] rounded-full flex justify-center items-center"
					>
						<SearchIcon style={{ color: 'white' }} />
					</button>
					<button className="p-[0.2rem] my-[0.2rem] rounded-full flex">
						<PersonIcon style={{ color: 'white', cursor: 'pointer' }} />
					</button>
					<Link href="/cart" passHref>
						<div className="p-[0.2rem] my-[0.2rem] rounded-full flex">
							<ShoppingBagIcon style={{ color: 'white', cursor: 'pointer' }} />
						</div>
					</Link>
				</div>
			</div>
			<div className="flex flex-row items-center justify-center w-[100%] break-words">
				<div className="text-[#FFFFFF] text-5xl font-extrabold text-right flex flex-col items-end">
					{/* <div className="underline decoration-[#314455]">Neretva.com</div> */}
					<div className="text-5xl pt-[0.5rem] pr-[1rem] underline decoration-[#C96567]">
						Your best online shopping buddy!
					</div>
					<div className="flex flex-row mt-[4rem] max-w-[45rem] justify-around items-end">
						<div className="flex flex-col text-center items-center text-3xl flex-1">
							<img
								className="max-w-[10rem]"
								src="/images/image70.png"
								alt="logo"
							/>
							<div className="mt-[1rem]">
								We are shipping worldwide for free
							</div>
						</div>
						<div className="flex flex-col text-center items-center text-3xl flex-1">
							<img
								className="max-w-[10rem]"
								src="/images/image71.png"
								alt="logo"
							/>
							<div className="max-w-[11rem] mt-[1rem]">
								More than 10 million products
							</div>
						</div>
						<div className="flex flex-col text-center items-center text-3xl flex-1">
							<img
								className="max-w-[10rem]"
								src="/images/image72.png"
								alt="logo"
							/>
							<div className="w-[11rem] mt-[1rem]">
								We are offering best sales
							</div>
						</div>
					</div>
				</div>
				<div className="hidden xl:block">
					<img
						className="m-[1rem] ml-[10rem] flex-1 max-h-[30rem]"
						src="/images/phone.png"
						alt="logo"
					/>
				</div>
			</div>
		</div>
	);
}
