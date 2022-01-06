import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import stylesLayout from '../styles/Layout.module.css';
import { Link } from '@mui/material';
import Cart from '../components/Cart';

const product = () => {
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
			<div className="h-screen"></div>
			<Footer />
		</div>
	);
};

export default product;
