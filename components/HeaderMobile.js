/* eslint-disable @next/next/no-img-element */
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import NavbarMobile from './NavbarMobile';
import OptionsMobile from './OptionsMobile';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from '@mui/material';

export default function HeaderMobile() {
	const [showNavbar, setShowNavbar] = useState(false);
	function navbar() {
		setShowNavbar(!showNavbar);
	}
	const [showOptions, setShowOptions] = useState(false);
	function options() {
		setShowOptions(!showOptions);
	}
	return (
		<div className="flex flex-col h-auto pb-[1rem] mb-[0.5rem] bg-gradient-to-b from-[#314455] to-[#97aabd]">
			<Slide direction="top" timeout={700} in={showNavbar}>
				<div
					style={{
						display: showNavbar ? 'block' : 'none',
					}}
					className="z-10 absolute bg-gradient-to-b from-[#314455] to-[#97aabd] h-[100%]  w-[100%]"
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
				{/* <img
					className="max-w-[50%] mx-[1rem] flex-1"
					src="/images/logo.png"
					alt="logo"
				/> */}
				<div className="text-3xl break-all text-center font-bold text-[#fafafa]">
					Neretva.com
				</div>
				{/* <Fade in={!showOptions} timeout={700}>
					<button
						style={{
							zIndex: showNavbar ? '0' : '20',
						}}
						className="bg-[#C96567] rounded-full z-10 flex w-[3.5rem] h-[3.5rem] justify-center items-center"
					>
						<ShoppingBagIcon
							onClick={options}
							style={{ color: 'white', width: '3rem', height: '3rem' }}
						/>
					</button>
				</Fade> */}
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
			<Slide direction="right" timeout={700} in={true}>
				<div className="text-2xl text-center font-bold mt-[1rem] text-[#fafafa]">
					You'r best online shopping buddy!
				</div>
			</Slide>
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
	);
}
