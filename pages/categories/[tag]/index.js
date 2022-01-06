import React from 'react';
import Router, { useRouter } from 'next/router';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import Search from '../../../components/Search';
import stylesLayout from '../../../styles/Layout.module.css';
import { Link } from '@mui/material';
import Cart from '../../../components/Cart';
import data from '../../../public/data.json';
import Card from '../../../components/Card';
import Sidebar from '../../../components/Sidebar';

export default function Categorie() {
	const router = useRouter();
	const { tag } = router.query;

	let cards = [];
	for (const item of data) {
		if (item.tag === tag)
			cards.push(
				<Card
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

	return (
		<div>
			<div className="grid grid-cols-3 justify-between place-items-stretch items-center w-[100%] h-[5em] bg-[#6c7a89]">
				<Link href="/" className="flex no-underline text-center">
					<p className={stylesLayout.headerText}>Neretva.com</p>
				</Link>
				<Search className="w-[100%]" />
				<Cart />
			</div>
			<Navbar />
			<div className="flex">
				<Sidebar />
				<div className="flex flex-col w-[100%] items-center">
					<div className="mt-[0.5em] w-[100%] font-sans text-center text-sm md:text-5xl font-normal text-[#354649]">
						{tag}
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
