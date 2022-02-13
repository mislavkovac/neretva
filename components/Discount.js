/* eslint-disable @next/next/no-img-element */
import { React, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import data from '../public/data.json';
import Card from '../components/Card';
import { Link } from '@mui/material';

const Discounts = () => {
	const [showSearch, setShowSearch] = useState(true);
	function searchShow() {
		setShowSearch(!showSearch);
	}

	let cards = [];
	for (const item of data) {
		if (item.prevPrice !== '')
			cards.push(
				<Card
					id={item.id}
					image={item.image}
					prevPrice={item.prevPrice}
					price={item.price}
					name={item.name}
					desc={item.desc}
					tag={item.tag}
					path={'categories'}
				/>
			);
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
			<div className="flex flex-row">
				<Sidebar path={'discounts'} />
				<div className="flex flex-col w-[100%]">
					<div className="mt-[0.5em] text-center font-sans text-5xl font-extrabold text-[#314455] underline decoration-[#C96567]">
						Discounts
					</div>
					<div className="mt-[2em] justify-center align-middle flex flex-row flex-wrap">
						{cards}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Discounts;

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
		if (item.tag === 'Mobile' && item.discount !== '0') {
			mobile.push(item);
		}
		if (item.tag === 'TVs & Monitors' && item.discount !== '0') {
			tv.push(item);
		}
		if (item.tag === 'Laptop' && item.discount !== '0') {
			laptop.push(item);
		}
		if (item.tag === 'PC' && item.discount !== '0') {
			pc.push(item);
		}
		if (item.tag === 'Audio' && item.discount !== '0') {
			audio.push(item);
		}
		if (item.tag === 'Dishwasher' && item.discount !== '0') {
			dishwasher.push(item);
		}
		if (item.tag === 'Washing_machine' && item.discount !== '0') {
			washing_mach.push(item);
		}
		if (item.tag === 'Refrigerator' && item.discount !== '0') {
			refrigerator.push(item);
		}
		if (item.tag === 'Socket' && item.discount !== '0') {
			socket.push(item);
		}
		if (item.tag === 'Light_bulbs' && item.discount !== '0') {
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
