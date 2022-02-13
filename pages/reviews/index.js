/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import React from 'react';
import Navbar from '../../components/Navbar';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from '@mui/material';
import data from '../../public/data.json';
import Sidebar from '../../components/Sidebar';
import ReviewCard from '../../components/ReviewCard';
import Reviews from '../../components/Reviews';
import ReviewsMobile from '../../components/ReviewsMobile';
import Footer from '../../components/Footer';

const Review = () => {
	const [showSearch, setShowSearch] = useState(true);
	function searchShow() {
		setShowSearch(!showSearch);
	}

	let cards = [];
	for (const item of data) {
		for (const review of item.review) {
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
	return (
		<div>
			<div className="hidden sm:block">
				<Reviews />
			</div>
			<div className="block sm:hidden">
				<ReviewsMobile />
			</div>
		</div>
	);
};

export default Review;
