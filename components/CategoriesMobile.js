/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import React from 'react';
import data from '../public/data.json';
import Slide from '@mui/material/Slide';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import OptionsMobile from './OptionsMobile';
import NavbarMobile from './NavbarMobile';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from './Sidebar';
import Card from './Card';
import { Link } from '@mui/material';
import Footer from './Footer';
import Navbar from './Navbar';
import SidebarMobile from './SidebarMobile';
import SortMobile from './SortMobile';
import FooterMobile from './FooterMobile';

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

	const [showNavbar, setShowNavbar] = useState(false);
	function navbar() {
		setShowNavbar(!showNavbar);
	}
	const [showOptions, setShowOptions] = useState(false);
	function options() {
		setShowOptions(!showOptions);
	}
	const [showCategories, setShowCategories] = useState(false);
	function categories() {
		setShowCategories(!showCategories);
		if (showSort === true) {
			setShowSort(!showSort);
		}
	}
	const [showSort, setShowSort] = useState(false);
	function sort() {
		setShowSort(!showSort);
		if (showCategories === true) {
			setShowCategories(!showCategories);
		}
	}
	return (
		<div className="">
			<div className="flex flex-col h-[3.5rem] pb-[1rem] mb-[0.5rem] bg-gradient-to-b from-[#314455] to-[#97aabd]">
				<Slide direction="top" timeout={700} in={showNavbar}>
					<div
						style={{
							display: showNavbar ? 'block' : 'none',
						}}
						className="z-10 absolute bg-gradient-to-b from-[#314455] to-[#97aabd] h-[100%] w-[100%]"
					>
						<NavbarMobile />
					</div>
				</Slide>
				<Slide direction="top" timeout={700} in={showOptions}>
					<div
						style={{
							display: showOptions ? 'block' : 'none',
						}}
						className="z-10 w-[5rem] place-self-end absolute bg-gradient-to-b from-[#314455] to-[#97aabd] h-[100%]"
					>
						<OptionsMobile />
					</div>
				</Slide>
				<div className="p-[0.5rem] pl-[0.5rem] flex flex-row items-center justify-between">
					<Fade in={!showNavbar} timeout={700}>
						<button
							onClick={navbar}
							style={{
								zIndex: showOptions ? '0' : '20',
							}}
							className="bg-[#C96567] rounded-full z-10 flex w-[2.5rem] h-[2.5rem] justify-center items-center"
						>
							<MenuIcon
								style={{ color: 'white', width: '2rem', height: '2rem' }}
							/>
						</button>
					</Fade>
					<Fade in={showNavbar} timeout={700}>
						<button
							onClick={navbar}
							className="bg-[#C96567] rounded-full z-30 absolute flex flex-1 w-[2.5rem] h-[2.5rem] justify-center items-center"
						>
							<CloseIcon
								style={{
									color: 'white',
									width: '2rem',
									height: '2rem',
									display: 'flex',
									flex: '1',
								}}
							/>
						</button>
					</Fade>
					<div className="text-3xl break-all text-center font-bold text-[#fafafa]">
						Neretva.com
					</div>
					<Link
						href="/cart"
						className="bg-[#C96567] rounded-full z-10 flex w-[2.5rem] h-[2.5rem] justify-center items-center"
					>
						<ShoppingBagIcon
							style={{ color: 'white', width: '2rem', height: '2rem' }}
						/>
					</Link>
					<Fade in={showOptions} timeout={700}>
						<button className="bg-[#C96567] rounded-full absolute right-2 flex z-30 w-[2.5rem] h-[2.5rem] justify-center items-center">
							<CloseIcon
								onClick={options}
								style={{ color: 'white', width: '2rem', height: '2rem' }}
							/>
						</button>
					</Fade>
				</div>
				<div
					style={{
						display: showNavbar || showOptions ? 'block' : 'none',
						position: 'fixed',
						top: '0',
						left: '0',
						width: '100vw',
						height: '100vh',
						background: 'rgba(0, 0, 0, 0.5)',
						backdropFilter: 'blur(2px)',
					}}
				></div>
			</div>
			<div className="flex flex-col">
				<Fade in={!showCategories} timeout={700}>
					<button
						style={{ display: showSort ? 'none' : 'block' }}
						onClick={categories}
						className="bg-[#314455] w-[50%] py-[0.2em] text-xl text-[#ffffff] z-10 shadow-lg bottom-0 left-0 fixed border-[#C96567] border-r-[0.5px]"
					>
						Categories
					</button>
				</Fade>
				<Fade in={showCategories} timeout={700}>
					<div
						style={{ display: showSort ? 'none' : 'block' }}
						className="w-full absolute py-[0.2em] text-xl text-[#ffffff] z-30 shadow-lg top-0 bg-gradient-to-b from-[#314455] to-[#97aabd]"
					>
						<SidebarMobile path={'categories'} />
					</div>
				</Fade>
				<Fade in={showCategories} timeout={700}>
					<button className="bg-[#C96567] rounded-full fixed top-2 right-2 flex z-30 w-[2.5rem] h-[2.5rem] justify-center items-center">
						<CloseIcon
							onClick={categories}
							style={{ color: 'white', width: '2rem', height: '2rem' }}
						/>
					</button>
				</Fade>
				{/* rgehrwguzewhrgoewzrgho */}
				<Fade in={!showSort} timeout={700}>
					<button
						style={{ display: showCategories ? 'none' : 'block' }}
						onClick={sort}
						className="bg-[#314455] w-[50%] py-[0.2em] text-xl text-[#ffffff] z-10 shadow-lg bottom-0 right-0 fixed border-[#C96567] border-l-[0.5px]"
					>
						Filters
					</button>
				</Fade>
				<Fade in={showSort} timeout={700}>
					<div className="w-full absolute py-[0.2em] h-[100vh] text-xl text-[#ffffff] z-30 shadow-lg top-0 bg-gradient-to-b from-[#314455] to-[#97aabd]">
						<SortMobile />
					</div>
				</Fade>
				<Fade in={showSort} timeout={700}>
					<button className="bg-[#C96567] rounded-full fixed top-2 right-2 flex z-30 w-[2.5rem] h-[2.5rem] justify-center items-center">
						<CloseIcon
							onClick={sort}
							style={{ color: 'white', width: '2rem', height: '2rem' }}
						/>
					</button>
				</Fade>
				<div
					className="flex flex-col w-[100%]"
					style={{ display: showSort || showCategories ? 'none' : 'block' }}
				>
					<div className="mt-[0.5em] text-center font-sans text-5xl font-extrabold text-[#314455] underline decoration-[#C96567]">
						All products
					</div>
					<div className="mt-[2em] justify-center align-middle flex flex-row flex-wrap">
						{cards}
					</div>
				</div>
			</div>
			<div className="mb-[2.2rem]">
				<FooterMobile />
			</div>
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
