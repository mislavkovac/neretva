/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Link } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import ProfileSidebar from '../components/ProfileSidebar';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Profile = () => {
	const [showSearch, setShowSearch] = useState(true);
	function searchShow() {
		setShowSearch(!showSearch);
	}
	return (
		<div>
			<div className="flex flex-row justify-center bg-[#314455] mb-[0.5rem] h-[5rem]">
				<Link href="/">
					<img
						className="max-h-[50px] my-[1rem] px-[0.4rem] self-center"
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
					<Link className="p-[0.2rem] m-[0.2rem] rounded-full flex">
						<PersonIcon style={{ color: 'white' }} />
					</Link>
					<Link className="rounded-full flex" href="/cart">
						<button className="p-[0.2rem] m-[0.2rem] rounded-full flex">
							<ShoppingBagIcon style={{ color: 'white' }} />
						</button>
					</Link>
				</div>
			</div>
			<ProfileSidebar path={'categories'} />
		</div>
	);
};

export default Profile;
