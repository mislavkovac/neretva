/* eslint-disable @next/next/no-img-element */
import { Divider, Fade, Link, Slide } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import data from '../public/data.json';
import DescriptionMobile from './DescriptionMobile';
import ProductMobile from './ProductMobile';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ReviewCard from './ReviewCard';
import CardRelated from './CardRelated';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import OptionsMobile from './OptionsMobile';
import NavbarMobile from './NavbarMobile';
import FooterMobile from './FooterMobile';

const Index = () => {
	const router = useRouter();
	const { tag, id } = router.query;

	const [showSearch, setShowSearch] = useState(true);
	function searchShow() {
		setShowSearch(!showSearch);
	}

	const [showRelated, setShowRelated] = useState(false);
	function relatedShow() {
		setShowReview(!showReview);
		setShowRelated(!showRelated);
	}

	const [showReview, setShowReview] = useState(true);
	function reviewShow() {
		setShowReview(!showReview);
		setShowRelated(!showRelated);
	}

	const [showNavbar, setShowNavbar] = useState(false);
	function navbar() {
		setShowNavbar(!showNavbar);
	}
	const [showOptions, setShowOptions] = useState(false);
	function options() {
		setShowOptions(!showOptions);
	}

	let product = [];
	let itemProps = [];
	let relatedProducts = [];
	for (const item of data) {
		if (item.tag === tag && item.id !== id) {
			relatedProducts.push(
				<CardRelated
					id={item.id}
					image={item.image}
					price={item.price}
					prevPrice={item.prevPrice}
					name={item.name}
					desc={item.desc}
					tag={item.tag}
				/>
			);
		}
	}

	for (const item of data) {
		if (item.tag === tag && item.id == id) {
			itemProps.push(
				((itemProps.id = item.id),
				(itemProps.image = item.image),
				(itemProps.price = item.price),
				(itemProps.prevPrice = item.prevPrice),
				(itemProps.name = item.name),
				(itemProps.desc = item.desc),
				(itemProps.tag = item.tag),
				(itemProps.desc = item.desc),
				(itemProps.review = item.review),
				(itemProps.rating = item.rating))
			);
			product.push(
				<ProductMobile
					id={item.id}
					image={item.image}
					price={item.price}
					prevPrice={item.prevPrice}
					name={item.name}
					desc={item.desc}
					tag={item.tag}
					color={item.color}
				/>
			);
		}
	}

	let cards = [];
	for (const item of data) {
		for (const review of item.review) {
			if (item.tag === tag && item.id === id) {
				cards.push(
					<ReviewCard
						id={item.id}
						image={item.image}
						price={item.price}
						prevPrice={item.prevPrice}
						name={item.name}
						desc={item.desc}
						tag={item.tag}
						path={'categories'}
						rating={item.rating}
						review={review}
					/>
				);
			}
		}
	}
	return (
		<div>
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
					<Link
						href="/"
						className="text-3xl break-all text-center no-underline font-bold text-[#fafafa]"
					>
						Neretva.com
					</Link>
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
			</div>
			{/* <CustomizedBreadcrumbs /> */}
			<div
				style={{ display: showNavbar || showOptions ? 'none' : 'block' }}
				className="flex flex-col w-[100%] items-center justify-center mt-[2em]"
			>
				<div>{product}</div>
				<div className="flex items-center w-[100%] mt-[1rem] font-sans text-2xl text-[#354649] font-normal">
					<DescriptionMobile
						id={itemProps.id}
						image={itemProps.image}
						price={itemProps.price}
						prevPrice={itemProps.prevPrice}
						name={itemProps.name}
						desc={itemProps.desc}
						tag={itemProps.tag}
						review={itemProps.review}
						rating={itemProps.rating}
					/>
				</div>
			</div>
			<FooterMobile />
		</div>
	);
};

export default Index;
