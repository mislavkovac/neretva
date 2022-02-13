/* eslint-disable @next/next/no-img-element */
import { Divider, Link } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import data from '../public/data.json';
import Description from './Description';
import Product from './Product';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ReviewCard from './ReviewCard';
import CardRelated from './CardRelated';

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
				<Product
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
			{/* <CustomizedBreadcrumbs /> */}
			<div className="flex flex-col w-[100%] items-center justify-center mt-[2em]">
				<div>{product}</div>
				<div className="flex items-center w-[70%] font-sans m-[2rem] text-2xl text-[#354649] font-normal">
					<Description
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
			<Footer />
		</div>
	);
};

export default Index;
