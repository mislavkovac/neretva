/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import React from 'react';
import data from '../public/data.json';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Sidebar from './Sidebar';
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Categories() {
	const [showSearch, setShowSearch] = useState(true);
	function searchShow() {
		setShowSearch(!showSearch);
	}

	let cards = [];
	for (const item of data) {
		cards.push(
			<Card
				id={item.id}
				image={item.image}
				price={item.price}
				prevPrice={item.prevPrice}
				name={item.name}
				desc={item.desc}
				tag={item.tag}
				path={'categories'}
			/>
		);
	}
	return (
		<div className="">
			<div className="flex flex-row justify-center bg-[#314455] mb-[0.5rem] h-[5rem]">
				<Link href="/" passHref>
					<img
						className="max-h-[50px] my-[1rem] px-[0.4rem] self-center cursor-pointer"
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
						<PersonIcon style={{ color: 'white' }} />
					</button>
					<Link className="rounded-full flex" href="/cart" passHref>
						<button className="p-[0.2rem] my-[0.2rem] rounded-full flex">
							<ShoppingBagIcon style={{ color: 'white' }} />
						</button>
					</Link>
				</div>
			</div>
			<div className="flex flex-row">
				<Sidebar path={'categories'} />
				<div className="flex flex-col w-[100%]">
					<div className="mt-[0.5em] text-center font-sans text-5xl font-extrabold text-[#314455] underline decoration-[#C96567]">
						All products
					</div>
					<div className="mt-[2em] justify-center align-middle flex flex-row flex-wrap">
						{cards}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export const getStaticProps = async () => {
	let mobile = [];
	let tv = [];
	let laptop = [];
	let pc = [];
	let audio = [];
	let dishwasher = [];
	let washing_mach = [];
	let refrigerator = [];
	let socket = [];
	let light_bulbs = [];
	for (const item of data) {
		if (item.tag === 'Mobile') {
			mobile.push(item);
		}
		if (item.tag === 'TVs & Monitors') {
			tv.push(item);
		}
		if (item.tag === 'Laptop') {
			laptop.push(item);
		}
		if (item.tag === 'PC') {
			pc.push(item);
		}
		if (item.tag === 'Audio') {
			audio.push(item);
		}
		if (item.tag === 'Dishwasher') {
			dishwasher.push(item);
		}
		if (item.tag === 'Washing_machine') {
			washing_mach.push(item);
		}
		if (item.tag === 'Refrigerator') {
			refrigerator.push(item);
		}
		if (item.tag === 'Socket') {
			socket.push(item);
		}
		if (item.tag === 'Light_bulbs') {
			light_bulbs.push(item);
		}
	}

	return {
		props: {
			mobile: mobile,
			tv: tv,
			laptop: laptop,
			pc: pc,
			audio: audio,
			dishwasher: dishwasher,
			washing_mach: washing_mach,
			refrigerator: refrigerator,
			socket: socket,
			light_bulbs: light_bulbs,
		},
	};
};
